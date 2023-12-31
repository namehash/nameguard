import React, { Fragment, useMemo } from "react";
import useSWR from "swr";
import { type NameGuardReport, nameguard } from "@namehash/nameguard";
import { parseName } from "@namehash/nameparser";
import { Toaster } from "sonner";

import { type Settings } from "../../stores/settings";
import {
  type ChatModalState,
  useChatModalStore as defaultUseChatModalStore,
} from "../../stores/chat";
import { FeedbackNotice } from "./FeedbackNotice";
import { ReportFooter } from "./ReportFooter";
import { ChatModal } from "../ChatModal/ChatModal";
import { GraphemeModal } from "../GraphemeModal/GraphemeModal";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { SearchEmptyState } from "../Search/SearchEmptyState";
import { ReportHeader } from "./ReportHeader";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { Banner } from "./Banner";
import { CheckResultCard } from "./CheckResultCard";
import { LabelList } from "./LabelList";
import { useGraphemeModalStore } from "../../stores/grapheme";
import { ReportError } from "./ReportError";
import { ExternalLinks } from "../ExternalLinks/ExternalLinks";
import { Share } from "../Share/Share";

type ReportProps = {
  name?: string;
  settings?: Settings;
  useChatModalStore?: () => ChatModalState;
};

export const Report = ({ name, settings, useChatModalStore }: ReportProps) => {
  const store = useChatModalStore
    ? useChatModalStore()
    : defaultUseChatModalStore();

  const { isChatModalOpen, openChatModal, closeChatModal } = store;
  const { isGraphemeModalOpen, closeAllGraphemeModals } =
    useGraphemeModalStore();

  const outsideChatClickRef = useOutsideClick(
    store.closeChatModal,
    store.isChatModalOpen
  );
  const outsideGraphemeClickRef = useOutsideClick(
    closeAllGraphemeModals,
    isGraphemeModalOpen
  );

  const parsedName = useMemo(() => {
    return parseName(name, settings);
  }, [name, settings]);

  const normalizationUnknown =
    parsedName.outputName.normalization === "unknown" ?? true;

  const showEmptyState = parsedName.outputName.name.length === 0 ?? true;

  const { data, error, isLoading } = useSWR<NameGuardReport>(
    parsedName.outputName.name,
    (n: string) => nameguard.inspectName(n)
  );

  const externalLinks = [
    {
      text: "ENS.domains",
      href: `https://app.ens.domains/${parsedName.outputName.name}`,
    },
    {
      text: "raffy.eth's resolver",
      href: `https://adraffy.github.io/ens-normalize.js/test/resolver.html#${parsedName.outputName.name}`,
    },
    {
      text: "ENS tools",
      href: `https://tools.ens.domains/check/${parsedName.outputName.name}`,
    },
    {
      text: "Etherscan",
      href: `https://etherscan.io/name-lookup-search?id=${parsedName.outputName.name}`,
    },
  ];

  if (showEmptyState)
    return (
      <Fragment>
        <ChatModal
          open={isChatModalOpen}
          onClose={closeChatModal}
          ref={outsideChatClickRef}
        />
        <SearchEmptyState />
      </Fragment>
    );

  return (
    <Fragment>
      <div className="space-y-8 w-full z-30">
        <div className="flex justify-between">
          <ReportHeader />
          <div className="flex-shrink-0 flex items-start space-x-1">
            <Share name={data?.name} />
            <ExternalLinks title="View name in" links={externalLinks} />
          </div>
        </div>

        {isLoading && !error && normalizationUnknown && (
          <LoadingSkeleton parsedName={parsedName} />
        )}
        {isLoading && !error && !normalizationUnknown && (
          <LoadingSkeleton parsedName={parsedName} />
        )}

        {error && <ReportError />}

        {data && (
          <Fragment>
            <Banner parsedName={parsedName} report={data} />
            <div className="space-y-4 md:space-y-5">
              <p className="text-black font-semibold text-lg leading-6">
                {data?.risk_count} of {data?.checks.length} risks found
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {data?.checks.map((check, index) => (
                  <CheckResultCard key={index} {...check} />
                ))}
              </div>
            </div>
            <div className="space-y-4 md:space-y-5">
              <p className="text-black font-semibold text-lg leading-6">
                Name inspection
              </p>

              <LabelList items={data.labels} />
            </div>

            <FeedbackNotice onChatClick={openChatModal} />
            <ReportFooter />
          </Fragment>
        )}
      </div>

      <ChatModal
        open={isChatModalOpen}
        onClose={closeChatModal}
        ref={outsideChatClickRef}
      />
      <GraphemeModal ref={outsideGraphemeClickRef} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          classNames: {
            toast: "!bg-black !text-white !border-black",
          },
        }}
      />
    </Fragment>
  );
};
