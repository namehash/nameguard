import React from "react";
import { API_VERSION } from "@namehash/nameguard";

export function ReportFooter() {
  return (
    <div className="space-y-5">
      <div className="rounded-md overflow-hidden border border-gray-200 relative bg-gradient-to-r from-[#FBD84D]/5 via-[#F965D9]/5 to-[#503BFE]/5 bg-opacity-5 p-6 md:p-10">
        <div className="z-0 absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-between items-center">
          <div>
            <p className="text-black font-semibold text-lg leading-8">
              Have feedback or suggestions?
            </p>
            <p className="text-gray-500 font-normal leading-6 text-sm">
              If you think any inspection result could be improved please
              contact us. The NameHash team is happy to help.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <a
              href="https://xmtp.chat/dm/0x4dC96AAd2Daa3f84066F3A00EC41Fd1e88c8865A"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md block md:inline-block text-center bg-black text-white px-5 py-3 font-medium leading-6 transition hover:bg-gray-900"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>

      <div className="text-center px-6">
        <p className="text-sm leading-6 text-gray-500">
          Report generated by NameGuard ({API_VERSION})
        </p>
      </div>
    </div>
  );
}
