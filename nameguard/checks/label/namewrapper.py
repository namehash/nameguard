from label_inspector.models import InspectorResult
from nameguard.models import Rating, Check, GenericCheckResult


# TODO: rating/severity
RATING = Rating.YELLOW
SEVERITY = 4
MESSAGE_PASS = 'Label is NameWrapper compatible'
MESSAGE_FAIL = 'Label is not NameWrapper compatible'


WRAPPED_MAX_BYTES = 255


def check_label(label: InspectorResult) -> GenericCheckResult:
    wrapped = label.label.encode('utf-8')
    passed = len(wrapped) <= WRAPPED_MAX_BYTES
    return GenericCheckResult(
        check=Check.NAMEWRAPPER_COMPATIBLE,
        rating=Rating.GREEN if passed else RATING,
        severity=0 if passed else SEVERITY,
        message=MESSAGE_PASS if passed else MESSAGE_FAIL,
    )
