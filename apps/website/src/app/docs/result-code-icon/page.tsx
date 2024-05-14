"use client";

import { CheckResultCode } from "@namehash/nameguard";
import { ResultCodeIcon } from "@namehash/nameguard-react";

export default function ResultCodeIconsDocsPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-12">
      <div className="divide-y divide-gray-100">
        <h1 className="justify-center flex font-bold text-2xl mb-4">
          {"<"}ResultCodeIcon {"/>"} documentation
        </h1>

        <div className="grid grid-cols-6 gap-x-6 py-5 text-center font-medium mt-12">
          <div></div>
          <div>Pass</div>
          <div>Warn</div>
          <div>Alert</div>
          <div>Info</div>
          <div>Skip</div>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="grid grid-cols-6 gap-x-6 py-5 mt-8">
            <div className="flex items-center font-mono">
              <pre>{"<ResultCodeIcon />"}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ResultCodeIcon code={CheckResultCode.pass} />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon code={CheckResultCode.warn} />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon code={CheckResultCode.alert} />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon code={CheckResultCode.info} />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon code={CheckResultCode.skip} />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-6 py-5">
            <div className="flex items-center font-mono">
              <pre>{"<ResultCodeIcon \n isInteractive={true} />"}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.pass}
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.warn}
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.alert}
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.info}
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.skip}
                isInteractive={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-6 py-5">
            <div className="flex items-center font-mono">
              <pre>{`<ResultCodeIcon \n isInteractive={true} \n className="cursor-pointer" \n />`}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.pass}
                className="cursor-pointer"
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.warn}
                className="cursor-pointer"
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.alert}
                className="cursor-pointer"
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.info}
                className="cursor-pointer"
                isInteractive={true}
              />
            </div>
            <div className="flex items-center justify-center">
              <ResultCodeIcon
                code={CheckResultCode.skip}
                className="cursor-pointer"
                isInteractive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
