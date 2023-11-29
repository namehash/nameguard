from typing import Optional
from nameguard.models import CheckStatus, Check, GenericCheckResult, NameCheckResult
from label_inspector.common.punycode import puny_analysis, PunycodeCompatibility
from label_inspector.models import InspectorResult


STATUS = CheckStatus.WARN

#title: DNS Compatible Name
TITLE_PASS = 'DNS Compatible Name'
TITLE_FAIL = 'DNS Incompatible Name'
TITLE_SKIP = 'Unknown DNS Name Compatibility'

MESSAGE_PASS = 'Compatible for use with DNS'
MESSAGE_FAIL = 'Incompatible for use with DNS'
MESSAGE_SKIP = 'This name contains unknown labels'


def check_name(labels: list[Optional[InspectorResult]]) -> GenericCheckResult:
    if any(label is None for label in labels):
        return NameCheckResult(
            check=Check.PUNYCODE_COMPATIBLE_NAME,
            status=CheckStatus.SKIP,
            _name_message=MESSAGE_SKIP,
            _title=TITLE_SKIP,
        )
    result = puny_analysis('.'.join(label.label for label in labels))
    passed = result.compatibility == PunycodeCompatibility.COMPATIBLE
    return NameCheckResult(
        check=Check.PUNYCODE_COMPATIBLE_NAME,
        status=CheckStatus.PASS if passed else STATUS,
        _name_message=MESSAGE_PASS if passed else MESSAGE_FAIL,
        _title=TITLE_PASS if passed else TITLE_FAIL,
    )
