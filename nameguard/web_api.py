from enum import Enum
from typing import Literal
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

from nameguard.nameguard import NameGuard, validate_namehash, namehash_from_labelhash
from nameguard.models import NameGuardResult, NameGuardBulkResult


class ApiVersion(str, Enum):
    V1 = 'v1'


app = FastAPI()
nameguard = NameGuard()


# -- inspect-name --


class InspectNameRequest(BaseModel):
    name: str


@app.post('/{api_version}/inspect-name')
async def inspect_name(api_version: ApiVersion, request: InspectNameRequest) -> NameGuardResult:
    return nameguard.inspect_name(request.name)


@app.get('/{api_version}/inspect-name/{name}')
async def inspect_name_get(api_version: ApiVersion, name: str) -> NameGuardResult:
    return await inspect_name(api_version, InspectNameRequest(name=name))


@app.get('/{api_version}/inspect-name')
async def inspect_name_get_empty(api_version: ApiVersion) -> NameGuardResult:
    return await inspect_name(api_version, InspectNameRequest(name=''))


# -- bulk-inspect-name --


class BulkInspectNameRequest(BaseModel):
    # max elements: 250
    names: list[str] = Field(..., max_items=250)


@app.post('/{api_version}/bulk-inspect-names')
async def bulk_inspect_names(api_version: ApiVersion, request: BulkInspectNameRequest) -> NameGuardBulkResult:
    return nameguard.bulk_inspect_names(request.names)


# -- inspect-namehash --

class InspectNamehashRequest(BaseModel):
    namehash: str = Field(title='namehash (decimal or hex representation)',
                          examples=['0xee6c4522aab0003e8d14cd40a6af439055fd2577951148c14b6cea9a53475835'])
    network_name: Literal['mainnet']


@app.post('/{api_version}/inspect-namehash')
async def inspect_namehash(api_version: ApiVersion, request: InspectNamehashRequest) -> NameGuardResult:
    valid_namehash = validate_namehash(namehash=request.namehash)
    name = await nameguard.namehash_to_normal_name_lookup(valid_namehash, network=request.network_name)
    if name is None:
        raise NotImplementedError()
    return nameguard.inspect_name(name)


@app.get('/{api_version}/inspect-namehash/{network_name}/{namehash}')
async def inspect_namehash_get(
        api_version: ApiVersion,
        network_name: Literal['mainnet'],
        namehash: str
) -> NameGuardResult:
    valid_namehash = validate_namehash(namehash=namehash)
    name = await nameguard.namehash_to_normal_name_lookup(valid_namehash, network=network_name)

    # todo: For now, an unknown label should trigger a red NameGuard check result.
    #  It also means that no grapheme level analysis for such a label will be possible.
    #  This also means the “normalization” in the result should be “Unknown”.
    # for now, name is None if its an unknown label
    if name is None:
        raise NotImplementedError()
    return nameguard.inspect_name(name)


# -- inspect-labelhash --

class InspectLabelhashRequest(BaseModel):
    labelhash: str = Field(title='labelhash (decimal or hex representation)',
                           examples=['0xaf2caa1c2ca1d027f1ac823b529d0a67cd144264b2789fa2ea4d63a67c7103cc'])
    network_name: Literal['mainnet']
    # todo: add ens-normalization check for parent name + add UnnormalizedParentName error
    parent_name: str = Field('eth', title='parent name (must be normalized)')


@app.post('/{api_version}/inspect-labelhash')
async def inspect_labelhash(api_version: ApiVersion, request: InspectLabelhashRequest) -> NameGuardResult:

    # todo: can it raise InvalidNamehash or should it be InvalidLabelhash (apart from the name its the same error)

    valid_labelhash = validate_namehash(namehash=request.labelhash)
    namehash = namehash_from_labelhash(valid_labelhash, parent_name=request.parent_name)
    name = await nameguard.namehash_to_normal_name_lookup(namehash, network=request.network_name)
    if name is None:
        raise NotImplementedError()
    return nameguard.inspect_name(name)


@app.get('/{api_version}/inspect-namehash/{network_name}/{namehash}')
async def inspect_labelhash_get(
        api_version: ApiVersion,
        network_name: Literal['mainnet'],
        labelhash: str,
        parent_name='.eth'
) -> NameGuardResult:
    valid_labelhash = validate_namehash(namehash=labelhash)
    namehash = namehash_from_labelhash(valid_labelhash, parent_name=parent_name)
    name = await nameguard.namehash_to_normal_name_lookup(namehash, network=network_name)
    if name is None:
        raise NotImplementedError()
    return nameguard.inspect_name(name)
