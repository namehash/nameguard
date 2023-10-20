from typing import Optional
from nameguard.models import CheckStatus, Check, GenericCheckResult, NameCheckResult
from nameguard.context import endpoint_name
from label_inspector.models import InspectorResult


STATUS = CheckStatus.WARN

MESSAGE_PASS = 'Name shows no signs of impersonation'

MESSAGE_FAIL = 'Name might be an impersonation of `{}`'
MESSAGE_FAIL_OTHER = 'Name may receive potential impersonation warnings'

MESSAGE_SKIP_UNK = 'Name contains unknown labels and cannot be checked for impersonation risk'
MESSAGE_SKIP_CANON = 'Name contains labels with unknown canonical forms and cannot be checked for impersonation risk'


def check_name(labels: list[Optional[InspectorResult]]) -> GenericCheckResult:
    if None in labels:
        return NameCheckResult(
            check=Check.IMPERSONATION_RISK,
            status=CheckStatus.SKIP,
            _name_message=MESSAGE_SKIP_UNK,
        )
    canonicals = [label.normalized_canonical_label for label in labels]
    if None in canonicals:
        return NameCheckResult(
            check=Check.IMPERSONATION_RISK,
            status=CheckStatus.SKIP,
            _name_message=MESSAGE_SKIP_CANON,
        )
    name = '.'.join(label.label for label in labels)
    canonical = '.'.join(canonicals)
    passed = name == canonical

    if passed:
        message = MESSAGE_PASS
    elif endpoint_name.get() == 'primary-name':
        message = MESSAGE_FAIL.format('.'.join(label.beautiful_canonical_label for label in labels))
    else:
        message = MESSAGE_FAIL_OTHER

    return NameCheckResult(
        check=Check.IMPERSONATION_RISK,
        status=CheckStatus.PASS if passed else STATUS,
        _name_message=message,
    )
