import React from "react";
import cc from "classcat";
import type { NameGuardReport, Rating } from "@namehash/nameguard";

import { Shield } from "./Shield";
import { ChangesApplied } from "./ChangesApplied";
import { FormattedDisplayName } from "./FormattedDisplayName";

function borderColor(rating: Rating) {
  switch (rating) {
    case "alert": {
      return "border-red-200";
    }
    case "pass": {
      return "border-green-200";
    }
    case "warn": {
      return "border-yellow-200";
    }
    default: {
      return "border-gray-200";
    }
  }
}

function shadowColor(rating: Rating) {
  switch (rating) {
    case "alert": {
      return "shadow-red-50";
    }
    case "pass": {
      return "shadow-green-50";
    }
    case "warn": {
      return "shadow-yellow-50";
    }
    default: {
      return "shadow-gray-50";
    }
  }
}

function textColor(rating: Rating) {
  switch (rating) {
    case "alert": {
      return "text-red-700";
    }
    case "pass": {
      return "text-green-700";
    }
    case "warn": {
      return "text-yellow-600";
    }
    default: {
      return "text-gray-500";
    }
  }
}

type Props = {
  report?: NameGuardReport;
  parsedName: any;
};

export function Banner({ report, parsedName }: Props) {
  const { name, title, subtitle, rating, beautiful_name, normalization } =
    report;
  const { outputName, transformations } = parsedName;

  const border = borderColor(rating);
  const shadow = shadowColor(rating);
  const text = cc(["font-semibold text-sm md:text-2xl", textColor(rating)]);

  const wrapperClass = cc(["rounded-xl border shadow-xl", border, shadow]);

  return (
    <div className={wrapperClass}>
      <div className="p-5 md:py-7 md:px-10 flex flex-col md:flex-row md:items-start justify-between">
        <div className="md:w-4/6 overflow-hidden overflow-ellipsis">
          <p className="uppercase text-[12px] text-gray-500 font-medium">
            Rating for
          </p>
          <h1 className="mt-1 text-2xl md:text-4xl text-black font-semibold md:font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">
            {name || outputName.displayName}
          </h1>
          <FormattedDisplayName
            normalization={normalization}
            name={name}
            displayName={beautiful_name || outputName.displayName}
          />
        </div>
        <div className="flex items-start space-x-4 pt-5 md:pt-0 md:w-2/6 flex-shrink-0">
          <div className="flex-shrink-0">
            <Shield status={rating} size="large" />
          </div>
          <div className="space-y-1">
            <p className={text}>{title}</p>
            <p className="text-black text-sm font-normal leading-6 break-all">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <ChangesApplied transformations={transformations} />
    </div>
  );
}
