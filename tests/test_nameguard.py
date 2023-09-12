import pytest

from nameguard.models import Rating, Check, CheckStatus
from nameguard.nameguard import NameGuard


@pytest.fixture(scope='module')
def nameguard():
    return NameGuard()


def test_basic_green(nameguard: NameGuard):
    result = nameguard.inspect_name('nick.eth')
    assert result.summary.rating is Rating.PASS
    assert all(check.rating is Rating.PASS
               for check in result.checks)


def test_basic_yellow(nameguard: NameGuard):
    result = nameguard.inspect_name('nićk.eth')
    assert result.summary.rating is Rating.WARN
    for check in result.checks:
        if check.check in (Check.CONFUSABLES, Check.TYPING_DIFFICULTY):
            assert check.rating is Rating.WARN
        else:
            assert check.rating is Rating.PASS


def test_basic_red(nameguard: NameGuard):
    result = nameguard.inspect_name('ni_ck.eth')
    assert result.summary.rating is Rating.ALERT
    for check in result.checks:
        if check.check is Check.NORMALIZED:
            assert check.rating is Rating.ALERT
        elif check.check in (Check.PUNYCODE_COMPATIBLE_LABEL, Check.PUNYCODE_COMPATIBLE_NAME):
            assert check.status is CheckStatus.WARN
        else:
            assert check.rating is Rating.PASS, check


def test_bulk(nameguard: NameGuard):
    result = nameguard.bulk_inspect_names(['nick.eth', 'nićk.eth', 'ni_ck.eth'])
    assert len(result.results) == 3
    assert result.results[0].summary.rating is Rating.PASS
    assert result.results[1].summary.rating is Rating.WARN
    assert result.results[2].summary.rating is Rating.ALERT


def test_highest_risk(nameguard: NameGuard):
    result = nameguard.inspect_name('nić_k.eth')
    assert result.summary.highest_risk.check is Check.NORMALIZED
    assert result.summary.highest_risk.rating is Rating.ALERT


def test_check_skip(nameguard: NameGuard):
    sup = 'a'
    unsup = chr(2045)
    unk = '\u0378'

    result = nameguard.inspect_name(sup)
    c = [c for c in result.checks if c.check is Check.FONT_SUPPORT][0]
    assert c.rating is Rating.PASS
    assert c.status is CheckStatus.PASS

    result = nameguard.inspect_name(unsup)
    c = [c for c in result.checks if c.check is Check.FONT_SUPPORT][0]
    assert c.rating is Rating.WARN
    assert c.status is CheckStatus.WARN

    result = nameguard.inspect_name(unk)
    c = [c for c in result.checks if c.check is Check.FONT_SUPPORT][0]
    assert c.rating is Rating.PASS
    assert c.status is CheckStatus.SKIP
