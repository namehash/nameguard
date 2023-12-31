"use client";

import type { SecurePrimaryNameResult, Rating } from "@namehash/nameguard";
import cc from "classcat";

import { Tooltip } from "./Tooltip";
import { AlertIcon } from "./icons/Alert";
import { WarnIcon } from "./icons/Warn";

function textColor(rating?: Rating) {
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

type ImpersonationShieldProps = {
  data?: SecurePrimaryNameResult;
};

export function ImpersonationShield({ data }: ImpersonationShieldProps) {
  if (
    !data ||
    data?.impersonation_status === null ||
    data?.impersonation_status === "unlikely"
  )
    return null;

  const { display_name, nameguard_result } = data;

  const textClass = cc(["font-semibold", textColor(nameguard_result?.rating)]);

  const Icon = nameguard_result?.rating === "warn" ? WarnIcon : AlertIcon;

  return (
    <Tooltip trigger={<Icon />}>
      <div className="hidden md:flex items-start space-x-3 py-2.5 min-w-[300px]">
        <div className="mt-0.5">
          <Icon />
        </div>

        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <span className={textClass}>
              {nameguard_result?.highest_risk?.check_name}
            </span>
            <span className="text-sm font-normal text-gray-400">
              {nameguard_result?.risk_count} risk
              {(nameguard_result?.risk_count || 0) >= 0 && "s"} detected
            </span>
          </div>
          <div className="space-y-0.5">
            <div className="text-sm text-white">
              {nameguard_result?.highest_risk?.message}
            </div>
            <div className="text-sm text-white">
              <a
                href={`https://nameguard.io/inspect/${display_name}`}
                className="underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Inspect name for details
              </a>
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
}
