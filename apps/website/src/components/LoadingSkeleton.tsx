"use client";

import { ParsedName } from "@namehash/nameparser";
import { Shield, ChangesApplied } from "@namehash/nameguard-react";

type LoadingProps = {
  parsedName: ParsedName;
};

export function LoadingSkeleton({ parsedName }: LoadingProps) {
  const { transformations, outputName } = parsedName;
  const { name, displayName, normalization } = outputName;
  const normalized = normalization === "normalized";
  const displayNameDifferent = normalized && name !== displayName;

  return (
    <div className="rounded-xl border shadow-xl space-y-4 md:space-y-0 border-gray-200 shadow-gray-50">
      <div className="p-5 md:py-7 md:px-10 flex flex-col md:flex-row md:items-start justify-between">
        <div className="md:w-4/6">
          <p className="uppercase text-[12px] text-gray-500 font-medium">
            Rating for
          </p>
          {name ? (
            <>
              <h1 className="mt-1 text-2xl md:text-4xl text-black font-semibold md:font-bold overflow-hidden overflow-ellipsis">
                {name}
              </h1>
              {displayNameDifferent && (
                <div className="text-sm text-gray-500 mt-4 overflow-hidden overflow-ellipsis">
                  <span className="mr-2.5 mb-1 md:mb-0">
                    Generally displays as:
                  </span>
                  <span className="text-black">{displayName}</span>
                </div>
              )}
            </>
          ) : (
            <div className="mt-5 w-40 h-3 rounded bg-gradient-to-r from-gray-300 to-gray-100 animate-pulse"></div>
          )}
        </div>
        <div className="flex items-start space-x-4 pt-5 md:pt-0 md:w-2/6">
          <Shield status="info" size="large" />
          <div className="space-y-1">
            <p className="font-semibold text-sm md:text-2xl text-gray-500">
              Inspecting...
            </p>
            <p className="text-gray-500 text-sm font-normal leading-6">
              Analyzing name details
            </p>
          </div>
        </div>
      </div>
      <ChangesApplied transformations={transformations} />
    </div>
  );
}
