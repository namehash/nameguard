import React, { type MouseEventHandler } from "react";
import type { ConsolidatedNameGuardReport } from "@namehash/nameguard";
import cc from "classcat";

import { NameShield } from "../NameShield";
import { Shield } from "../Report/Shield";
import { ShieldError } from "../Shield/Error";

type NameBadgeProps = {
  placeholder?: string;
  data?: ConsolidatedNameGuardReport;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  forceError?: boolean;
};

export const NameBadge = ({
  placeholder,
  onClick,
  data,
  forceError,
}: NameBadgeProps) => {
  const buttonClass =
    "flex-shrink-0 appearance-none bg-white transition-colors hover:bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 space-x-1.5 inline-flex items-center";
  const cursorClass = cc([
    {
      "cursor-pointer": onClick,
      "cursor-default": !onClick,
    },
  ]);
  const buttonAndCursorClass = cc([buttonClass, cursorClass]);

  if (forceError)
    return (
      <button className={buttonAndCursorClass}>
        {placeholder ? (
          <span className="text-black text-sm leading-5 ens-webfont">
            {placeholder}
          </span>
        ) : (
          <span className="rounded-full h-2 w-16 bg-gray-200 animate-pulse"></span>
        )}
        <ShieldError size="micro" className={cursorClass}>
          {onClick && (
            <div className="text-sm text-white">
              <button
                className="appearance-none underline font-medium"
                onClick={onClick}
              >
                Inspect name for details
              </button>
            </div>
          )}
        </ShieldError>
      </button>
    );

  if (!data)
    return (
      <button className={buttonAndCursorClass}>
        {placeholder ? (
          <span className="text-black text-sm leading-5 ens-webfont">
            {placeholder}
          </span>
        ) : (
          <span className="rounded-full h-2 w-16 bg-gray-200 animate-pulse"></span>
        )}
        <Shield status="info" size="micro" className={cursorClass} />
      </button>
    );

  return (
    <button className={buttonAndCursorClass}>
      <span className="text-black text-sm leading-5 ens-webfont">
        {data.beautiful_name || data.name}
      </span>
      <NameShield data={data} size="micro" className={cursorClass}>
        {onClick && (
          <div className="text-sm text-white">
            <button
              className="appearance-none underline font-medium"
              onClick={onClick}
            >
              Inspect name for details
            </button>
          </div>
        )}
      </NameShield>
    </button>
  );
};
