import httpx

from nameguard.logging import logger
from nameguard.exceptions import ENSSubgraphUnavailable, NamehashNotFoundInSubgraph, NamehashMismatchError
from nameguard.utils import namehash_from_name, label_is_labelhash


# The label limit for using the multi-label lookup query.
# Longer names will be resolved by querying the namehash of the full name.
MAX_MULTI_LABEL_LOOKUP = 256

ENS_SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens'

RESOLVE_NAMEHASH_QUERY = """
query resolveNamehash($nameHash: String) {
  domain(id: $nameHash) {
    name
  }
}
"""


async def call_subgraph(query: str, variables: dict) -> dict:
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                ENS_SUBGRAPH_URL + '?source=ens-nameguard',
                json={'query': query, 'variables': variables},
            )

        if response.status_code == 200:
            response_json = response.json()
            logger.debug(f"Subgraph response json:\n{response_json}")
        else:
            raise ENSSubgraphUnavailable(
                f"Received unexpected status code from ENS Subgraph {response.status_code}: {response.text}")
    except Exception as ex:
        logger.exception(f'Communication error with subgraph occurred')
        if not str(ex):
            raise ENSSubgraphUnavailable(f"Communication error with subgraph occurred.")
        raise ENSSubgraphUnavailable(f"Communication error with subgraph occurred: {ex}")

    if 'data' not in response_json:
        logger.error(f"Unexpected response body: {response_json}")
        raise ENSSubgraphUnavailable(f"Unexpected response body: {response_json}")
    else:
        return response_json['data']


async def namehash_to_name_lookup(namehash_hexstr: str) -> str:
    logger.debug(f"Trying namehash lookup for: {namehash_hexstr}")

    variables = {'nameHash': namehash_hexstr}

    data = await call_subgraph(RESOLVE_NAMEHASH_QUERY, variables)

    if 'domain' not in data:
        logger.error(f"Unexpected response data: {data}")
        raise ENSSubgraphUnavailable(f"Unexpected response data: {data}")
    elif data['domain'] is None:
        raise NamehashNotFoundInSubgraph()
    elif 'name' in data['domain']:
        # TODO: could name be None?
        name = str(data['domain']['name'])
        calculated_namehash = namehash_from_name(name)
        if calculated_namehash != namehash_hexstr:
            logger.error(
                f"NamehashMismatchError occurred:\ninput: {namehash_hexstr}\tcalculated: {calculated_namehash}")
            raise NamehashMismatchError()
        return name
    else:
        logger.error(f"Unexpected response data: {data}")
        raise ENSSubgraphUnavailable(f"Unexpected response data: {data}")


def build_multi_label_query(labels: list[str]) -> tuple[str, dict]:
    '''
    Builds a query that resolves all labelhashes in a name.

    ```
    query resolveLabelhashes($l0: String, $l1: String) {
        l0: domain(id: $l0) {
            labelName
        }
        l1: domain(id: $l1) {
            labelName
        }
    }
    ```
    '''
    labelhash_idx = [i for i, label in enumerate(labels) if label_is_labelhash(label)]
    args = ' '.join(f'$l{i}:String' for i in labelhash_idx)
    query = f'query resolveLabelhashes({args}){{'
    variables = {}
    for i in labelhash_idx:
        partial_name = '.'.join(labels[i:])
        partial_namehash = namehash_from_name(partial_name)
        query += f'l{i}:domain(id:$l{i}){{labelName}}'
        variables[f'l{i}'] = partial_namehash
    query += '}'
    return query, variables


async def resolve_all_labelhashes_in_name(name: str) -> str:
    logger.debug(f"Trying to resolve full name: {name}")

    namehash = namehash_from_name(name)
    labels =  name.split('.')

    if len(labels) < MAX_MULTI_LABEL_LOOKUP:
        logger.debug(f"Trying multi-label lookup for: {name}")
        query, variables = build_multi_label_query(labels)
        data = await call_subgraph(query, variables)
        resolved_labels = []
        for i, label in enumerate(labels):
            if label_is_labelhash(label):
                # domain could be unknown or just the label could be unknown
                if data[f'l{i}'] is not None:
                    label = data[f'l{i}']['labelName'] or label
            resolved_labels.append(label)
        resolved_name = '.'.join(resolved_labels)
        resolved_namehash = namehash_from_name(resolved_name)
        if resolved_namehash != namehash:
            logger.error(
                f"NamehashMismatchError occurred:\ninput: {name}\tcalculated: {resolved_name}")
            raise NamehashMismatchError()
    else:
        logger.debug(f"Trying namehash lookup for: {name}")
        try:
            resolved_name = await namehash_to_name_lookup(namehash)
        except NamehashNotFoundInSubgraph:
            resolved_name = name

    logger.debug(f"Resolved name: {resolved_name}")

    return resolved_name
