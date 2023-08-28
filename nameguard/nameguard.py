import httpx
from fastapi import HTTPException
from ens.constants import EMPTY_SHA3_BYTES
from ens.utils import Web3
from hexbytes import HexBytes
from typing import Optional

from label_inspector.inspector import Inspector
from label_inspector.models import InspectorResultNormalized, InspectorResultUnnormalized, InspectorResult
from label_inspector.config import initialize_inspector_config

from nameguard import checks
from nameguard.models import (
    NameGuardResult,
    LabelGuardResult,
    GraphemeGuardResult,
    NameGuardBulkResult,
    Rating,
    GenericCheckResult,
    NameGuardSummary,
    NameStatus,
)


GRAPHEME_CHECKS = [
    checks.grapheme.confusables.check_grapheme,
    checks.grapheme.invisible.check_grapheme,
    checks.grapheme.typing_difficulty.check_grapheme,
]

LABEL_CHECKS = [
    checks.label.normalized.check_label,
    checks.label.mixed_scripts.check_label,
    checks.label.namewrapper.check_label,
    checks.label.font_support.check_label,
    checks.label.punycode.check_label,
]

NAME_CHECKS = []

ENS_SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens'

SUBGRAPH_NAME_QUERY = """
query getDomains($nameHash: String) {
  domain(id: $nameHash) {
    id
    labelhash
    name
    createdAt
    parent {
      id
    }
    resolver {
      texts
      address
    }
  }
}
"""  # redundant elements in query for future use

# todo: move exceptions somewhere else?
# -- exceptions --

class InvalidNameHash(HTTPException):
    def __init__(self, reason=''):
        super().__init__(422, f"Provided namehash is not valid, reason: {reason}")

class ENSSubgraphUnavailable(HTTPException):
    def __init__(self, error_msg: str):  # todo: which status code?
        super().__init__(418, f"Error while making request to ENS Subgraph: {error_msg}")

class NamehashMismatchError(HTTPException):
    def __init__(self):  # todo: which status code?
        super().__init__(418, "Namehash calculated on the name returned from ENS Subgraph"
                              " does not equal the input namehash.")

class NamehashNotFoundInSubgraph(HTTPException):
    def __init__(self):
        super().__init__(404, "Provided namehash could not be found in ENS Subgraph.")

def init_inspector():
    with initialize_inspector_config('prod_config') as config:
        return Inspector(config)


def hexbytes_to_int(hb: HexBytes) -> int:
    return int(hb.hex(), base=16)


def int_to_hexstr(n: int, hex_len=64) -> str:
    """
    Given an integer `n`, return a hex-string prefixed with '0x',
    padded with 0s to have exactly `hex_len` digits.

    :raises ValueError  if `n` in hex repr has more digits than `hex_len`
    """
    res = f"{n:#0{hex_len + 2}x}"
    if len(res) > hex_len + 2:
        raise ValueError(f'Resulting hex number has more digits ({len(res) - 2}) than specified ({hex_len}).')
    return res


def namehash_from_name(name: str) -> str:
    def label_to_hash(label_: str) -> HexBytes:
        if "." in label_:
            raise ValueError(f"Cannot generate hash for label {label_!r} with a '.'")
        return Web3().keccak(text=label_)

    node = EMPTY_SHA3_BYTES
    if name:
        labels = name.split(".")
        for label in reversed(labels):
            labelhash = label_to_hash(label)
            assert isinstance(labelhash, bytes)  # todo: remove?
            assert isinstance(node, bytes)
            node = Web3().keccak(node + labelhash)
    return node.hex()


def validate_namehash(namehash: str) -> str:
    """
    Validate namehash string and return namehash in hex-string format.

    :param namehash: A string representing a namehash. It can be in
                     a) decimal format - decimal integer of any length,
                     b) hex format - 64 hex digits prefixed with 0x.
    :return: namehash in hex format (padded with 0s to match 64 digits and prefixed with 0x)
    """
    if namehash.startswith('0x'):
        if len(namehash) != 66 or not all(c in '0123456789abcdefABCDEF' for c in namehash[2:]):
            raise InvalidNameHash(reason="Hex number must be 64 digits long and prefixed with '0x'.")
        return namehash
    else:
        try:
            int_namehash = int(namehash)
        except ValueError:
            raise InvalidNameHash(
                reason="Must be a valid, decimal integer or a hex number with 64 digits, prefixed with '0x'.")
        try:
            hex_namehash = int_to_hexstr(int_namehash)
        except ValueError:
            raise InvalidNameHash(
                reason="The decimal integer converted to base-16 should have at most 64 digits.")
        return hex_namehash


def calculate_nameguard_rating(checks: list[GenericCheckResult]) -> Rating:
    return max(check.rating for check in checks)


def count_risks(checks: list[GenericCheckResult]) -> int:
    return sum(1 for check in checks if check.rating > Rating.GREEN)


def agg_checks(checks: list[GenericCheckResult]) -> list[GenericCheckResult]:
    out = {}
    for check in checks:
        out[check.name] = max(out.get(check.name, check), check)
    return list(out.values())


class NameGuard:
    def __init__(self):
        self.inspector = init_inspector()
        self.httpx_client = httpx.AsyncClient()

    def inspect_name(self, name: str, return_labels=True) -> NameGuardResult:
        labels = name.split('.')
        labels_analysis = [self.analyse_label(label) for label in labels]

        # -- check individual entities --

        # checks for each grapheme in each label
        labels_graphemes_checks = [
            [
                [check(grapheme) for check in GRAPHEME_CHECKS]
                for grapheme in label_analysis.graphemes
            ]
            for label_analysis in labels_analysis
            if label_analysis.status == 'normalized'
        ]

        # checks for each label
        labels_checks = [
            [check(label_analysis) for check in LABEL_CHECKS]
            for label_analysis in labels_analysis
        ]

        # checks for the whole name
        name_checks = [check(name) for check in NAME_CHECKS]

        # -- aggregate results --

        # merge grapheme checks into label checks
        for label_i, label_graphemes_checks in enumerate(labels_graphemes_checks):
            for grapheme_checks in label_graphemes_checks:
                labels_checks[label_i].extend(grapheme_checks)
            labels_checks[label_i] = agg_checks(labels_checks[label_i])

        # merge label checks into name checks
        for label_checks in labels_checks:
            name_checks.extend(label_checks)
        name_checks = agg_checks(name_checks)

        # -- generate result --

        name_normalized = all(x.status == 'normalized' for x in labels_analysis)

        return NameGuardResult(
            name=name,
            namehash=namehash_from_name(name),
            status=NameStatus.NORMALIZED if name_normalized else NameStatus.UNNORMALIZED,
            summary=NameGuardSummary(
                rating=calculate_nameguard_rating(name_checks),
                risk_count=count_risks(name_checks),
            ),
            checks=name_checks,
            labels=[
                LabelGuardResult(
                    label=label_analysis.label,
                    status=NameStatus.NORMALIZED if label_analysis.status == 'normalized' else NameStatus.UNNORMALIZED,
                    summary=NameGuardSummary(
                        rating=calculate_nameguard_rating(label_checks),
                        risk_count=count_risks(label_checks),
                    ),
                    checks=label_checks,
                    graphemes=[
                        GraphemeGuardResult(
                            grapheme=grapheme.value,
                            summary=NameGuardSummary(
                                rating=calculate_nameguard_rating(grapheme_checks),
                                risk_count=count_risks(grapheme_checks),
                            ),
                            checks=grapheme_checks,
                        )
                        for grapheme, grapheme_checks in zip(label_analysis.graphemes, label_graphemes_checks)
                    ] if label_analysis.status == 'normalized' else [],
                )
                for label_analysis, label_checks, label_graphemes_checks in zip(
                    labels_analysis,
                    labels_checks,
                    labels_graphemes_checks,
                )
            ] if return_labels else None,
        )

    def bulk_inspect_name(self, names: list[str]) -> NameGuardBulkResult:
        return NameGuardBulkResult(
            results=[self.inspect_name(name, return_labels=False) for name in names],
        )

    def analyse_label(self, label: str) -> InspectorResult:
        result = self.inspector.analyse_label(label)
        if result['status'] == 'normalized':
            return InspectorResultNormalized(**result)
        else:
            return InspectorResultUnnormalized(**result)

    async def namehash_to_normal_name_lookup(self, namehash_hexstr: str, network='mainnet') -> Optional[str]:
        variables = {'nameHash': namehash_hexstr}

        try:
            response = await self.httpx_client.post(ENS_SUBGRAPH_URL + '?source=ens-nameguard',
                                                    json={'query': SUBGRAPH_NAME_QUERY, 'variables': variables})
            if response.status_code == 200:
                response_json = response.json()
            else:
                raise ENSSubgraphUnavailable(
                    f"Received unexpected status code from ENS Subgraph {response.status_code}: {response.text}")
        except httpx.RequestError as ex:
            raise ENSSubgraphUnavailable(f"RequestError has occurred: {ex}")

        if 'data' not in response_json or 'domain' not in response_json['data']:
            raise ValueError(f"Unexpected response body: {response_json}")  # todo: should it be ENSSubgraphUnavailable?
        elif response_json == {'data': {'domain': None}}:
            raise NamehashNotFoundInSubgraph()
        elif 'name' in response_json['data']['domain']:
            name = str(response_json['data']['domain']['name'])
            if name.startswith('['):
                print(f'Warning - unknown label: {name}')  # todo: create a logger?
                return None
            else:
                calculated_namehash = namehash_from_name(name)
                if calculated_namehash != namehash_hexstr:
                    raise NamehashMismatchError()
                return name
        else:
            raise ValueError(f"Unexpected response body: {response_json}")  # todo: should it be ENSSubgraphUnavailable?
