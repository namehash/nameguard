import pytest
from fastapi.testclient import TestClient
from urllib.parse import quote
from pprint import pprint

from nameguard.nameguard import labelhash_from_label


@pytest.fixture(scope="module")
def test_client():
    from nameguard.web_api import app
    client = TestClient(app)
    return client


@pytest.fixture(scope="module")
def api_version():
    from nameguard.web_api import ApiVersion
    return ApiVersion.V1_BETA.value


# -- inspect-name --

def test_inspect_name_get(test_client, api_version):
    name = 'byczong.eth'
    response = test_client.get(f'/{api_version}/inspect-name/{name}')
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['name'] == name
    assert res_json['namehash'] == '0xf8c2c01d386a4807b3ceb131e4975ff37b44824ac9307121b18223f3d77d0c2e'
    assert res_json['normalization'] == 'normalized'
    assert res_json['summary'] == {'highest_risk': None, 'rating': 'PASS', 'risk_count': 0}
    assert res_json['checks']
    assert res_json['labels']


@pytest.mark.parametrize(
    "encoded_input_name, decoded_name, do_quote",
    [
        ('iam%2Falice%3F.eth', 'iam/alice?.eth', True),
        pytest.param('iam/alice?.eth', 'iam/alice?.eth', False, marks=pytest.mark.xfail(reason="not urlencoded")),
        ('%C5%BC%C3%B3%20%C5%82%C4%87', 'żó łć', True),
        ('%3F%3F%2F%3F%2F%3F%3F', '??/?/??', True),
        ('%2511%25.%3F.eth', '%11%.?.eth', True),
    ]
)
def test_inspect_name_get_special_characters(test_client, api_version, encoded_input_name: str, decoded_name: str, do_quote: bool):
    if do_quote:
        encoded_input_name = quote(
            encoded_input_name.encode('utf-8'))  # because TestClient is doing additional unquote before sending request
    response = test_client.get(f'/{api_version}/inspect-name/{encoded_input_name}')
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['name'] == decoded_name


def test_inspect_name_post(test_client, api_version):
    name = 'vitalik.eth'
    response = test_client.post(f'/{api_version}/inspect-name', json={'name': name})
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['name'] == name
    assert res_json['namehash'] == '0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'
    assert res_json['normalization'] == 'normalized'
    assert res_json['summary'] == {'highest_risk': None, 'rating': 'PASS', 'risk_count': 0}
    assert res_json['checks']  # todo: thorough tests for global checks
    assert res_json['labels']  # todo: thorough tests for label- and grapheme-level checks


# -- bulk-inspect-name --

def test_bulk_inspect_name_post(test_client, api_version):
    names = ['vitalik.eth', 'byczong.mydomain.eth']
    response = test_client.post(f'/{api_version}/bulk-inspect-names', json={'names': names})
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert all([all([key in r for key in ('name', 'namehash', 'normalization', 'summary')])
                for r in res_json['results']])

    # more than 250 names
    response = test_client.post(f'/{api_version}/bulk-inspect-names', json={'names': names * 126})
    assert response.status_code == 422


# -- inspect-namehash --

# todo: test different errors and status codes

@pytest.mark.parametrize(
    "namehash, expected_status_code, expected_name",
    [
        ('0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835', 200, 'vitalik.eth'),
        ('107841754600925073349285697024366035838042340511934381588201623605284409137205', 200, 'vitalik.eth'),
    ]
)
def test_inspect_namehash_get(test_client, api_version, namehash: str, expected_status_code: int, expected_name: str):
    network_name = 'mainnet'
    response = test_client.get(f'/{api_version}/inspect-namehash/{network_name}/{namehash}')
    assert response.status_code == expected_status_code
    res_json = response.json()
    pprint(res_json)

    assert res_json['namehash'] == '0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'
    assert res_json['name'] == expected_name

@pytest.mark.parametrize(
    "namehash, normalization, expected_name",
    [
        ('0xe0fe380f4d877f643e88ceabbed4e5ee0efe66f079aabba23e8902336f7948da', 'unknown', '[af498306bb191650e8614d574b3687c104bc1cd7e07c522954326752c6882770].eth'),
        ('0x0462571d34d206146958c44e473730b1b2630321072c7fbb92deeea946416dab', 'unknown', '[5bc926fc40cc7c49e0df6dddf26e4dc7b9d6d32f4a55d4f0670320dbf414afd2].byongdok.eth'),
        ('0x5f57b185ab56ca42b5506f96694c767ebcc8c6e2854a79636b565e4ebe700fb0', 'unknown', '[2af8fae91ee5ef94f17f2c2f23532cc2d1ccaee78cae52efed0df04bc2463b13].[3fddf465ed81d79ae943b35800b1d187dc0b5d69614bf7e8ebddbae19d72cae8].genevaswis.eth'),
        ('0xb2636b6e3b1abdd3fbec454d4f4b1a904e7b15e3609cb208bcfc5a5487293308', 'unknown', '[3fddf465ed81d79ae943b35800b1d187dc0b5d69614bf7e8ebddbae19d72cae8].genevaswis.eth'),
        ('0x1bc53f6413409d078ec18a29b17f981eafab341598a4e970ac9efab7d29258af', 'unnormalized', '[zzz].eth'),
    ]
)
def test_inspect_namehash_get_unknown(test_client, api_version, namehash: str, normalization: str, expected_name: str):
    network_name = 'mainnet'
    response = test_client.get(f'/{api_version}/inspect-namehash/{network_name}/{namehash}')
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['normalization'] == normalization

@pytest.mark.parametrize(
    "namehash, expected_status_code, expected_name",
    [
        ('0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835', 200, 'vitalik.eth'),
        ('107841754600925073349285697024366035838042340511934381588201623605284409137205', 200, 'vitalik.eth'),
    ]
)
def test_inspect_namehash_post(test_client, api_version, namehash: str, expected_status_code: int, expected_name: str):
    network_name = 'mainnet'
    response = test_client.post(f'/{api_version}/inspect-namehash',
                                json={'namehash': namehash, 'network_name': network_name})
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['namehash'] == '0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'
    assert res_json['name'] == expected_name


def test_inspect_namehash_invalid_namehash(test_client, api_version):
    network_name = 'mainnet'
    namehash = '0x123'
    response = test_client.post(f'/{api_version}/inspect-namehash',
                                json={'namehash': namehash, 'network_name': network_name})
    assert response.status_code == 422
    res_json = response.json()
    assert res_json['detail'].startswith('Provided namehash is not valid')


# -- inspect-labelhash --

# todo: test different errors and status codes

def test_inspect_labelhash_get(test_client, api_version):
    labelhash = labelhash_from_label('vitalik')
    network_name = 'mainnet'
    response = test_client.get(f'/{api_version}/inspect-labelhash/{network_name}/{labelhash}/eth')
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['name'] == 'vitalik.eth'


def test_inspect_labelhash_post(test_client, api_version):
    labelhash = labelhash_from_label('vitalik')
    network_name = 'mainnet'
    response = test_client.post(f'/{api_version}/inspect-labelhash',
                                json={'labelhash': labelhash, 'network_name': network_name, 'parent_name': 'eth'})
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['name'] == 'vitalik.eth'
