from pydantic import BaseModel
from enum import Enum

from nameguard.models.checks import GenericCheckResult, Rating


class Normalization(str, Enum):
    NORMALIZED = 'normalized'
    UNNORMALIZED = 'unnormalized'
    UNKNOWN = 'unknown'


class RiskSummary(BaseModel):
    rating: Rating
    risk_count: int


class GraphemeGuardResult(BaseModel):
    grapheme: str
    summary: RiskSummary
    checks: list[GenericCheckResult]


class LabelGuardResult(BaseModel):
    label: str
    labelhash: str
    normalization: Normalization
    summary: RiskSummary
    checks: list[GenericCheckResult]
    graphemes: list[GraphemeGuardResult]


class NameGuardQuickResult(BaseModel):
    name: str
    namehash: str
    normalization: Normalization
    summary: RiskSummary


class NameGuardResult(NameGuardQuickResult):
    checks: list[GenericCheckResult]
    labels: list[LabelGuardResult]


class NameGuardBulkResult(BaseModel):
    results: list[NameGuardQuickResult]
