import React from "react";
import useSWR from "swr";
import {
  nameguard,
  type Rating,
  type BulkConsolidatedNameGuardReport,
} from "@namehash/nameguard";
import { parseName } from "@namehash/nameparser";
import cc from "classcat";

import { Shield as ShieldIcon } from "../Report/Shield";
import { Tooltip } from "../Tooltip/Tooltip";

function textColor(rating: Rating) {
  switch (rating) {
    case "alert": {
      return "text-red-600";
    }
    case "pass": {
      return "text-emerald-600";
    }
    case "warn": {
      return "text-amber-500";
    }
    default: {
      return "text-gray-500";
    }
  }
}

type ShieldProps = {
  name?: string;
};

export const Shield = ({ name }: ShieldProps) => {
  if (!name) return null;

  const { data, error, isLoading } = useSWR<BulkConsolidatedNameGuardReport>(
    name,
    (n: string) => nameguard.bulkInspectNames([parseName(n).outputName.name])
  );

  const result = data?.results[0];

  if (isLoading || !data) {
    return (
      <ShieldIcon
        status={isLoading ? "info" : result.rating}
        className={isLoading && "animate-pulse"}
        size="small"
      />
    );
  }

  const textClass = cc(["font-semibold mb-1", textColor(result.rating)]);

  return (
    <Tooltip
      trigger={
        <ShieldIcon status={isLoading ? "info" : result.rating} size="small" />
      }
    >
      <div className="hidden md:flex items-start space-x-3 py-2.5 min-w-[300px]">
        <ShieldIcon status={isLoading ? "info" : result.rating} size="small" />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className={textClass}>{result.title}</span>
            {result.risk_count >= 1 && (
              <span className="text-sm font-normal text-gray-400">
                {result.risk_count} risk{result.risk_count === 1 ? "" : "s"}{" "}
                detected
              </span>
            )}
          </div>
          <div className="text-sm text-white">{result.subtitle}</div>
        </div>
      </div>
    </Tooltip>
  );
};
