import React from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import { CheckResultCode } from "@namehash/nameguard";
import { CheckResultCodePassIcon } from "../icons/CheckResultCodePassIcon";
import { CheckResultCodeWarnIcon } from "../icons/CheckResultCodeWarnIcon";
import { CheckResultCodeAlertIcon } from "../icons/CheckResultCodeAlertIcon";
import { CheckResultCodeInfoIcon } from "../icons/CheckResultCodeInfoIcon";
import { CheckResultCodeSkipIcon } from "../icons/CheckResultCodeSkipIcon";

function text(code: CheckResultCode) {
  switch (code) {
    case CheckResultCode.pass:
      return "All Checks Passed";
    case CheckResultCode.warn:
      return "Warning";
    case CheckResultCode.alert:
      return "Alert";
    case CheckResultCode.info:
      return "Informational Notice";
    case CheckResultCode.skip:
      return "Check Not Applicable";
  }
}

function icon(
  code: CheckResultCode,
  isNotInteractive = false,
): React.ReactNode {
  switch (code) {
    case CheckResultCode.pass:
      return <CheckResultCodePassIcon isNotInteractive={isNotInteractive} />;
    case CheckResultCode.warn:
      return <CheckResultCodeWarnIcon isNotInteractive={isNotInteractive} />;
    case CheckResultCode.alert:
      return <CheckResultCodeAlertIcon isNotInteractive={isNotInteractive} />;
    case CheckResultCode.info:
      return <CheckResultCodeInfoIcon isNotInteractive={isNotInteractive} />;
    case CheckResultCode.skip:
      return <CheckResultCodeSkipIcon isNotInteractive={isNotInteractive} />;
  }
}

/**
 * A component that displays a check result code as an icon with a tooltip.
 * @param {CheckResultCode} code - The CheckResultCode status to display.
 * @param {boolean} isNotInteractive - Wether to display a Tooltip and a color effect on icon hover or not.
 */
export function CheckIcon({
  code,
  isNotInteractive = true,
}: {
  code: CheckResultCode;
  isNotInteractive?: boolean;
}) {
  const tooltipText = text(code);
  const Icon = icon(code, isNotInteractive);

  if (isNotInteractive) {
    return Icon;
  }

  return <Tooltip trigger={Icon} children={tooltipText} />;
}
