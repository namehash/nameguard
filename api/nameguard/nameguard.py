import os
import re

import ens_normalize
import requests
from ens import ENS
from ens_normalize import DisallowedSequence
import os

import requests
from label_inspector.inspector import Inspector
from label_inspector.config import initialize_inspector_config
from label_inspector.models import InspectorConfusableGraphemeResult
from web3 import HTTPProvider
from dotenv import load_dotenv

from nameguard import checks
from nameguard.models import (
    NameGuardReport,
    LabelGuardReport,
    ConsolidatedGraphemeGuardReport,
    BulkNameGuardBulkReport,
    Normalization,
    GraphemeGuardReport,
    NetworkName,
    SecureReverseLookupResult,
    SecureReverseLookupStatus,
    FakeEthNameCheckStatus, 
    FakeEthNameCheckResult,
)
from nameguard.provider import get_nft_metadata
from nameguard.utils import (
    namehash_from_name,
    labelhash_from_label,
    calculate_nameguard_rating,
    count_risks,
    agg_checks,
    get_highest_risk,
    label_is_labelhash,
    compute_canonical_from_list,
)
from nameguard.exceptions import NamehashNotFoundInSubgraph, ProviderUnavailable, NotAGrapheme
from nameguard.logging import logger
from nameguard.subgraph import namehash_to_name_lookup, resolve_all_labelhashes_in_name, \
    resolve_all_labelhashes_in_name_querying_labelhashes, resolve_all_labelhashes_in_names_querying_labelhashes

GRAPHEME_CHECKS = [
    checks.grapheme.confusables.check_grapheme,
    checks.grapheme.font_support.check_grapheme,
    checks.grapheme.invisible.check_grapheme,
    checks.grapheme.typing_difficulty.check_grapheme,
]

LABEL_CHECKS = [
    checks.label.normalized.check_label,
    checks.label.mixed_scripts.check_label,
    checks.label.namewrapper.check_label,
    checks.label.punycode.check_label,
    checks.label.unknown.check_label,
]

NAME_CHECKS = [
    checks.name.impersonation_risk.check_name,
    checks.name.punycode_name.check_name,
]


def init_inspector():
    with initialize_inspector_config('prod_config') as config:
        return Inspector(config)


ens_contract_adresses = {
    '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',  # Base Registrar
    '0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401',  # Name Wrapper
}

ALCHEMY_UNKNOWN_NAME = re.compile('^\[0x[0-9a-f]{4}\.\.\.[0-9a-f]{4}\]\.eth$')

def nested_get(dic, keys):
    for key in keys:
        dic = dic[key]
    return dic


class NameGuard:
    def __init__(self):
        self._inspector = init_inspector()
        load_dotenv()
        # TODO use web sockets and async
        self.ns = {}
        for network_name, env_var in ((NetworkName.MAINNET, 'PROVIDER_URI_MAINNET'),
                                      (NetworkName.GOERLI, 'PROVIDER_URI_GOERLI'),
                                      (NetworkName.SEPOLIA, 'PROVIDER_URI_SEPOLIA')):
            if os.environ.get(env_var) is None:
                logger.warning(f'Environment variable {env_var} is not set')
            self.ns[network_name] = ENS(HTTPProvider(os.environ.get(env_var)))

    def analyse_label(self, label: str):
        return self._inspector.analyse_label(label, simple_confusables=True)

    async def inspect_name(self, network_name: NetworkName, name: str, resolve_labelhashes: bool = True) -> NameGuardReport:
        '''
        Inspect a name. A name is a sequence of labels separated by dots.
        A label can be a labelhash or a string.
        If a labelhash is encountered, it will be treated as an unknown label.
        '''

        logger.debug(f'[inspect_name] name: \'{name}\'')
        
        if resolve_labelhashes:
            name = await resolve_all_labelhashes_in_name_querying_labelhashes(network_name, name)

        labels = name.split('.')
        logger.debug(f'[inspect_name] labels: {labels}')

        # labelhashes have `None` as their analysis
        labels_analysis = [self.analyse_label(label)
                           # do not analyze labelhashes
                           if not label_is_labelhash(label)
                           else None
                           for label in labels]

        # -- check individual entities --

        # checks for each grapheme in each label
        labels_graphemes_checks = [
            [
                [check(grapheme) for check in GRAPHEME_CHECKS]
                for grapheme in label_analysis.graphemes
            ] if label_analysis is not None else []
            # label has [] graphemes if it's a labelhash
            for label_analysis in labels_analysis
        ]

        # checks for each label
        labels_checks = [
            [check(label_analysis) for check in LABEL_CHECKS]
            # checks have to handle labelhashes
            for label_analysis in labels_analysis
        ]

        # checks for the whole name
        name_checks = [check(labels_analysis) for check in NAME_CHECKS]

        # -- aggregate results --

        # merge grapheme checks into label checks
        for label_i, label_graphemes_checks in enumerate(labels_graphemes_checks):
            for grapheme_checks in label_graphemes_checks:
                labels_checks[label_i].extend([c.raise_context() for c in grapheme_checks])
            labels_checks[label_i] = agg_checks(labels_checks[label_i])

        # merge label checks into name checks
        for label_checks in labels_checks:
            name_checks.extend([c.raise_context() for c in label_checks])
        name_checks = agg_checks(name_checks)

        # -- generate result --

        return NameGuardReport(
            name=name,
            namehash=namehash_from_name(name),
            normalization=Normalization.UNKNOWN
            if any(label_analysis is None for label_analysis in labels_analysis)
            else Normalization.UNNORMALIZED
            if any(label_analysis.status == 'unnormalized' for label_analysis in labels_analysis)
            else Normalization.NORMALIZED,
            rating=calculate_nameguard_rating(name_checks),
            risk_count=count_risks(name_checks),
            highest_risk=get_highest_risk(name_checks),
            checks=sorted(name_checks, reverse=True),
            canonical_name=compute_canonical_from_list(
                [label_analysis.normalized_canonical_label
                 if label_analysis is not None
                 else labels[i] # labelhash
                 for i, label_analysis in enumerate(labels_analysis)],
                 sep='.',
            ),
            labels=[
                LabelGuardReport(
                    # actual label or [labelhash]
                    label=label,
                    labelhash=labelhash_from_label(
                        label_analysis.label) if label_analysis is not None else '0x' + label[1:-1],
                    normalization=Normalization.UNKNOWN
                    if label_analysis is None
                    else Normalization.UNNORMALIZED
                    if label_analysis.status == 'unnormalized'
                    else Normalization.NORMALIZED,
                    rating=calculate_nameguard_rating(label_checks),
                    risk_count=count_risks(label_checks),
                    highest_risk=get_highest_risk(label_checks),
                    checks=sorted(label_checks, reverse=True),
                    canonical_label=label_analysis.normalized_canonical_label if label_analysis is not None else label, # labelhash
                    graphemes=[
                        ConsolidatedGraphemeGuardReport(
                            grapheme=grapheme.value,
                            grapheme_name=grapheme.name,
                            grapheme_type=grapheme.type,
                            grapheme_script=grapheme.script,
                            grapheme_link=grapheme.link,
                            rating=calculate_nameguard_rating(grapheme_checks),
                            risk_count=count_risks(grapheme_checks),
                            highest_risk=get_highest_risk(grapheme_checks),
                            grapheme_description=grapheme.description,
                        )
                        for grapheme, grapheme_checks in zip(label_analysis.graphemes, label_graphemes_checks)
                    ] if label_analysis is not None else None,
                )
                for label, label_analysis, label_checks, label_graphemes_checks in zip(
                    labels,
                    labels_analysis,
                    labels_checks,
                    labels_graphemes_checks,
                )
            ],
        )

    async def bulk_inspect_names(self, network_name: NetworkName, names: list[str]) -> BulkNameGuardBulkReport:
        names = await resolve_all_labelhashes_in_names_querying_labelhashes(network_name, names)
        return BulkNameGuardBulkReport(
            results=[await self.inspect_name(network_name, name, resolve_labelhashes=False) for name in names],
        )

    async def inspect_namehash(self, network_name: NetworkName, namehash: str) -> NameGuardReport:
        logger.debug(f'[inspect_namehash] namehash: \'{namehash}\'')
        name = await namehash_to_name_lookup(network_name, namehash)
        return await self.inspect_name(network_name, name)

    async def inspect_name_with_labelhash_lookup(self, network_name: NetworkName, name: str) -> NameGuardReport:
        '''
        Inspect a name. A name is a sequence of labels separated by dots.
        A label can be a labelhash or a string.
        If a labelhash is encountered, the entire name will be looked up by its namehash.
        If the namehash is not found, all labelhashes will be treated as unknown labels.
        '''

        logger.debug(f'[inspect_name_with_labelhash_lookup] name: \'{name}\'')

        return await self.inspect_name(network_name, name)

    def inspect_grapheme(self, grapheme: str) -> GraphemeGuardReport:
        '''
        Inspect a single grapheme.
        Throws `NotAGrapheme` if the input is not a single grapheme.
        '''

        label_analysis = self.analyse_label(grapheme)
        if label_analysis.grapheme_length != 1:
            raise NotAGrapheme(f'The input contains {label_analysis.grapheme_length} graphemes.')

        grapheme_analysis = label_analysis.graphemes[0]
        grapheme_checks = [check(grapheme_analysis) for check in GRAPHEME_CHECKS]

        return GraphemeGuardReport(
            grapheme=grapheme_analysis.value,
            grapheme_name=grapheme_analysis.name,
            grapheme_type=grapheme_analysis.type,
            grapheme_script=grapheme_analysis.script,
            grapheme_link=grapheme_analysis.link,
            rating=calculate_nameguard_rating(grapheme_checks),
            risk_count=count_risks(grapheme_checks),
            highest_risk=get_highest_risk(grapheme_checks),
            checks=sorted(grapheme_checks, reverse=True),
            confusables=[self._inspect_confusable(c)
                         for c in grapheme_analysis.confusables_other]
                         if grapheme_analysis.confusables_other else [],
            canonical_confusable=self._inspect_confusable(grapheme_analysis.confusables_canonical)
                                 if grapheme_analysis.confusables_canonical else None,
            canonical_grapheme=label_analysis.canonical_label,
            grapheme_description=grapheme_analysis.description,
        )

    def _inspect_confusable(self, grapheme: InspectorConfusableGraphemeResult) -> ConsolidatedGraphemeGuardReport:
        grapheme_checks = [check(grapheme) for check in GRAPHEME_CHECKS]
        return ConsolidatedGraphemeGuardReport(
            grapheme=grapheme.value,
            grapheme_name=grapheme.name,
            grapheme_type=grapheme.type,
            grapheme_script=grapheme.script,
            grapheme_link=grapheme.link,
            rating=calculate_nameguard_rating(grapheme_checks),
            risk_count=count_risks(grapheme_checks),
            highest_risk=get_highest_risk(grapheme_checks),
            grapheme_description=grapheme.description,
        )

    async def primary_name(self, address: str, network_name: str) -> SecureReverseLookupResult:
        try:
            domain = self.ns[network_name].name(address)
        except requests.exceptions.ConnectionError as ex:
            raise ProviderUnavailable(f"Communication error with provider occurred: {ex}")
        display_name = f'Unnamed {address[2:6].lower()}'
        primary_name = None
        nameguard_result = None
        if domain is None:
            status = SecureReverseLookupStatus.NO_PRIMARY_NAME
        else:
            nameguard_result = await self.inspect_name(network_name, domain)
            
            result = ens_normalize.ens_process(domain, do_normalize=True, do_beautify=True)
            if result.normalized != domain:
                status = SecureReverseLookupStatus.UNNORMALIZED
            else:
                display_name = result.beautified
                status = SecureReverseLookupStatus.NORMALIZED
                primary_name = domain


        return SecureReverseLookupResult(primary_name=primary_name,
                                         display_name=display_name,
                                         primary_name_status=status,
                                         nameguard_result=nameguard_result)

    async def fake_eth_name_check(self, network_name, contract_address, token_id) -> FakeEthNameCheckResult:
        """
        Check if the token is a fake ENS name (not valid ENS contract address and title and collection name of NFT look like ENS name).
        """
        contract_address = contract_address.lower()

        
        res_json = await get_nft_metadata(contract_address, token_id)

        token_type = res_json['id']['tokenMetadata']['tokenType']
        
        if token_type not in ['ERC721', 'ERC1155'] and contract_address in ens_contract_adresses:
            return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.POTENTIALLY_AUTHENTIC_ETH_NAME, nameguard_result=None)
        if token_type == 'NOT_A_CONTRACT':
            return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.UNKNOWN_NFT, nameguard_result=None)
        elif token_type == 'NO_SUPPORTED_NFT_STANDARD':
            return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.UNKNOWN_NFT, nameguard_result=None)  #TODO: different status?
        elif token_type not in ['ERC721', 'ERC1155']:  # Alchemy does not support other types
            return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.UNKNOWN_NFT, nameguard_result=None)

        title = res_json['title']

        if contract_address in ens_contract_adresses:
            if title == '':
                return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.POTENTIALLY_AUTHENTIC_ETH_NAME, nameguard_result=None)
            else:
                if ALCHEMY_UNKNOWN_NAME.match(title):
                    return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.POTENTIALLY_AUTHENTIC_ETH_NAME, nameguard_result=None)

                report = await self.inspect_name(network_name, title)
                if ens_normalize.is_ens_normalized(title):
                    return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.AUTHENTIC_ETH_NAME, nameguard_result=report)
                else:
                    return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.INVALID_ETH_NAME, nameguard_result=report)
        else:
            fields_values=[]
            for keys in [['title'],
                         ['metadata', 'name'], 
                         ['contractMetadata', 'openSea', 'collectionName'],
                         ['contractMetadata', 'name']]:
                try:
                    name = nested_get(res_json, keys)
                    try:
                        #TODO: remove invisible and then canonicalize
                        cured_title = ens_normalize.ens_cure(name)  #TODO improve
                        # canonicalize
                        inspector_result = self.analyse_label(cured_title)
                        if inspector_result.canonical_label is not None:
                            canonical_name = inspector_result.canonical_label
                        else:
                            canonical_name = cured_title
                    except DisallowedSequence:
                        canonical_name = title
                    if canonical_name.endswith('.eth'):
                        return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.IMPERSONATED_ETH_NAME, nameguard_result=None)
                    fields_values.append(canonical_name)
                except KeyError:
                    pass
            for field_value in fields_values:
                if '.eth' in field_value:
                    return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.POTENTIALLY_IMPERSONATED_ETH_NAME, nameguard_result=None)

            return FakeEthNameCheckResult(status=FakeEthNameCheckStatus.NON_IMPERSONATED_ETH_NAME, nameguard_result=None)
