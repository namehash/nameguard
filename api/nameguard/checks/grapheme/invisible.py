from label_inspector.models import InspectorGraphemeWithConfusablesResult as Grapheme
from nameguard.models import CheckStatus, Check, GenericCheckResult, GraphemeCheckResult


STATUS = CheckStatus.ALERT

#title: No Hidden Characters
TITLE_PASS = 'No Hidden Characters'
TITLE_FAIL = 'Hidden Characters'

G_MESSAGE_PASS = 'Visible'
L_MESSAGE_PASS = 'All characters are visible'
N_MESSAGE_PASS = 'All characters are visible'

G_MESSAGE_FAIL = 'Invisible'
L_MESSAGE_FAIL = 'Contains invisible characters'
N_MESSAGE_FAIL = 'Contains invisible characters'


def check_grapheme(grapheme: Grapheme) -> GenericCheckResult:
    passed = grapheme.type != 'invisible'
    return GraphemeCheckResult(
        check=Check.INVISIBLE,
        status=CheckStatus.PASS if passed else STATUS,
        _grapheme_message=G_MESSAGE_PASS if passed else G_MESSAGE_FAIL,
        _label_message=L_MESSAGE_PASS if passed else L_MESSAGE_FAIL,
        _name_message=N_MESSAGE_PASS if passed else N_MESSAGE_FAIL,
    )
