import React, { forwardRef, type Ref } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

import { AvatarIcons } from "./Avatars";
import { Slideover } from "../Slideover/Slideover";

const xmtpChatUrl =
  "https://xmtp.chat/dm/0x91b40c01b12E7f1383E028fA91722fb53C871969";
const converseUrl = "https://getconverse.app/";
const coinbaseWalletUrl = "https://www.coinbase.com/wallet";

type ChatModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ChatModal = forwardRef(
  (props: ChatModalProps, ref: Ref<HTMLDivElement>) => {
    const { open, onClose } = props;

    return (
      <Slideover title="Chat with us" isOpen={open} onClose={onClose} ref={ref}>
        <div className="flex items-center justify-center h-full py-12">
          <div className="space-y-5 text-center">
            <AvatarIcons className="h-[49px] w-[80px] w-auto mx-auto" />
            <div className="space-y-2">
              <p className="text-black font-semibold text-lg leading-6">
                Contact nameguard.eth using XMTP
              </p>
              <p className="text-gray-400 leading-5 text-sm">
                We&apos;re happy to hear your feedback
              </p>
            </div>
            <a
              href={xmtpChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black border border-black text-white px-5 py-2 font-medium leading-6 inline-flex items-center space-x-3 transition hover:border-gray-900 hover:bg-gray-900"
            >
              <span>Open XMTP.chat</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 fill-current" />
            </a>
            <p className="text-gray-400 leading-5 text-sm">OR</p>
            <p className="text-gray-400 leading-6 text-sm">
              You can contact us using any XMTP chat app, including: <br />
              <a
                href={coinbaseWalletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline sm:underline-offset-[4px] sm:transition-all sm:duration-200 sm:hover:underline-offset-[2px] text-black"
              >
                Coinbase Wallet
              </a>
              <span className="text-black">&nbsp;and&nbsp;</span>
              <a
                href={converseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline sm:underline-offset-[4px] sm:transition-all sm:duration-200 sm:hover:underline-offset-[2px] text-black"
              >
                Converse
              </a>
            </p>
          </div>
        </div>
      </Slideover>
    );
  },
);
