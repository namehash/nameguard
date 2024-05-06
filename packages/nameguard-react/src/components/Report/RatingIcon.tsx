import React from "react";
import { Rating } from "@namehash/nameguard";

import { RatingPassLargeIcon } from "../icons/RatingPassLargeIcon";
import { RatingWarnLargeIcon } from "../icons/RatingWarnLargeIcon";
import { RatingAlertLargeIcon } from "../icons/RatingAlertLargeIcon";
import { RatingPassMediumIcon } from "../icons/RatingPassMediumIcon";
import { RatingWarnMediumIcon } from "../icons/RatingWarnMediumIcon";
import { RatingAlertMediumIcon } from "../icons/RatingAlertMediumIcon";
import { RatingPassSmallIcon } from "../icons/RatingPassSmallIcon";
import { RatingWarnSmallIcon } from "../icons/RatingWarnSmallIcon";
import { RatingAlertSmallIcon } from "../icons/RatingAlertSmallIcon";
import { RatingAlertMicroIcon } from "../icons/RatingAlertMicroIcon";
import { RatingWarnMicroIcon } from "../icons/RatingWarnMicroIcon";
import { RatingPassMicroIcon } from "../icons/RatingPassMicroIcon";

export enum RatingIconSize {
  micro = "micro",
  small = "small",
  medium = "medium",
  large = "large",
}

type Props = {
  rating: Rating;
  size?: RatingIconSize;
  className?: string;
};

const STATUS_TO_BASE_NAME: { [key in Rating]: string } = {
  [Rating.alert]: "RatingAlert",
  [Rating.pass]: "RatingPass",
  [Rating.warn]: "RatingWarn",
};

const getComponent = (rating: Rating, size: RatingIconSize): React.Node => {
  const baseName = STATUS_TO_BASE_NAME[rating];
  const componentName = `${baseName}${capitalizeFirstLetter(size)}Icon`;

  const components: { [key: string]: React.ComponentType } = {
    PassShieldLargeIcon: RatingPassLargeIcon,
    PassShieldMediumIcon: RatingPassMediumIcon,
    PassShieldSmallIcon: RatingPassSmallIcon,
    PassShieldMicroIcon: RatingPassMicroIcon,
    WarnShieldLargeIcon: RatingWarnLargeIcon,
    WarnShieldMediumIcon: RatingWarnMediumIcon,
    WarnShieldSmallIcon: RatingWarnSmallIcon,
    WarnShieldMicroIcon: RatingWarnMicroIcon,
    AlertShieldLargeIcon: RatingAlertLargeIcon,
    AlertShieldMediumIcon: RatingAlertMediumIcon,
    AlertShieldSmallIcon: RatingAlertSmallIcon,
    AlertShieldMicroIcon: RatingAlertMicroIcon,
  };

  if (!components[componentName]) {
    throw new Error(
      `RatingIcon could not be built with params: \n\n rating: ${rating}\n size: ${size}`
    );
  }

  return components[componentName];
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const RatingIcon = ({
  rating,
  size = RatingIconSize.small,
  ...props
}: Props) => {
  const Component = getComponent(rating, size);

  return <Component {...props} />;
};
