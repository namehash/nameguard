/*
  <IMPORTANT>

    This file was moved to namekit-react package and
    it is kept here for migration code integrity only.

    Once the migration is done, this file should be deleted.

  </IMPORTANT>
*/

import { TruncatedText } from "../TruncatedText/TruncatedText";
import { Normalization } from "@namehash/nameguard";
import { ENSName } from "@namehash/ens-utils";
import React from "react";
import cc from "classcat";

interface DisplayedNameProps {
  name: ENSName;
  maxDisplayWidth?: number;
  maxTooltipWidth?: number;
  textStylingClasses?: string;
  displayRawName?: boolean;
  displayUnnormalizedNames?: boolean;
  tooltipTextStylingClasses?: string;
  displayTooltipWhenNameOverflows?: boolean;
}

const DEFAULT_MAX_DISPLAY_WIDTH = 200;

export function DisplayedName({
  name,
  maxTooltipWidth,
  textStylingClasses,
  displayRawName = false,
  tooltipTextStylingClasses,
  displayUnnormalizedNames = false,
  displayTooltipWhenNameOverflows = true,
  maxDisplayWidth = DEFAULT_MAX_DISPLAY_WIDTH,
}: DisplayedNameProps) {
  const showUnnormalizedName =
    displayRawName ||
    (displayUnnormalizedNames &&
      name.normalization === Normalization.unnormalized);
  const displayName = showUnnormalizedName ? name.name : name.displayName;

  return (
    <TruncatedText
      text={displayName}
      maxTooltipWidth={maxTooltipWidth}
      maxDisplayWidth={maxDisplayWidth}
      textStylingClasses={cc([textStylingClasses, "nk-ens-webfont"])}
      displayTooltipWhenTextOverflows={displayTooltipWhenNameOverflows}
      tooltipTextStylingClasses={cc([
        tooltipTextStylingClasses,
        "nk-ens-webfont",
      ])}
    />
  );
}
