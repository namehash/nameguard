from typing import Optional
from nameguard.models import Rating, Check, GenericCheckResult
from label_inspector.models import InspectorResult


# TODO: rating/severity
RATING = Rating.ALERT
SEVERITY = 4
MESSAGE_PASS = 'Name can be looked up from a namehash'
MESSAGE_FAIL = 'Name cannot be looked up from a namehash'


def check_name(labels: Optional[list[InspectorResult]]) -> GenericCheckResult:
    """
    Check if a name can be looked up from a namehash.
    This is a helper function for creating the `UNKNOWN_NAME` check result.
    Pass `None` if the name is unknown or a list of label analysis results otherwise.
    """
    passed = labels is not None
    return GenericCheckResult(
        check=Check.UNKNOWN_NAME,
        rating=Rating.PASS if passed else RATING,
        severity=0 if passed else SEVERITY,
        message=MESSAGE_PASS if passed else MESSAGE_FAIL,
    )
