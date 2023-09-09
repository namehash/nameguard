import time
from urllib.parse import quote

import pytest
from fastapi.testclient import TestClient
from pprint import pprint


@pytest.fixture(scope="module")
def test_client():
    from nameguard.web_api import app
    client = TestClient(app)
    return client


@pytest.fixture(scope="module")
def httpx_client():
    import httpx
    return httpx.Client()


@pytest.fixture(scope="module")
def api_version():
    from nameguard.web_api import ApiVersion
    return ApiVersion.V1_beta.value


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
    "encoded_input_name, decoded_name",
    [
        ('iam%2Falice%3F.eth', 'iam/alice?.eth'), 
        ('%C5%BC%C3%B3%20%C5%82%C4%87', 'żó łć'),
        ('%3F%3F%2F%3F%2F%3F%3F', '??/?/??'), 
        ('%2511%25.%3F.eth', '%11%.?.eth'),
     ]
)  # the last name ('%2511%25.%3F.eth') is incorrectly decoded using fastapi's TestClient, so httpx is used here
# todo: only works if api is running
def test_inspect_name_get_special_characters(test_client, api_version, encoded_input_name: str, decoded_name: str):
    encoded_input_name=quote(encoded_input_name.encode('utf-8')) #because TestClient is doing additional unquote before sending request
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
    response = test_client.post(f'/{api_version}/bulk-inspect-names', json={'names': names*126})
    assert response.status_code == 422


# -- inspect-namehash --

@pytest.mark.parametrize(
    "namehash, expected_status_code",
    [
        ('0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835', 200),
        ('107841754600925073349285697024366035838042340511934381588201623605284409137205', 200),
    ]
)
def test_inspect_namehash_get(test_client, api_version, namehash: str, expected_status_code: int):
    network_name = 'mainnet'
    response = test_client.get(f'/{api_version}/inspect-namehash/{network_name}/{namehash}')
    # fixme: if there are 2 requests one after another, it breaks (even with sleep)
    assert response.status_code == 200
    res_json = response.json()
    pprint(res_json)

    assert res_json['namehash'] == '0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'


def test_inspect_namehash_post(test_client, api_version):
    pass  # todo


# -- inspect-labelhash --

def test_inspect_labelhash_get(test_client, api_version):
    pass  # todo

def test_inspect_labelhash_post(test_client, api_version):
    pass  # todo
