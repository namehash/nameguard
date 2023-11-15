"use client";

import { Highlight } from "prism-react-renderer";
import { PrismTheme } from "prism-react-renderer";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import impersonation_attack_img from "../../public/assets/vitalik_impersonation_attack.png";
import fake_NFT_filter_img from "../../public/assets/fake_NFT_filter.png";
import surface_risks_img from "../../public/assets/surface_risks.png";
import dangerous_name_config_img from "../../public/assets/dangerous_name_configuration.png";
import autorenewal_img from "../../public/assets/autorenewal.png";
import ens_webfont_img from "../../public/assets/ens_webfont.png";
import { Tooltip, Search } from "@namehash/nameguard-react";
import cc from "classcat";

export default function Home() {
  const exampleCode = `<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0
         dark:bg-slate-800"/>
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none 
         rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" 
         height="512">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-lg font-medium">`;
  return (
    <>
      <HeroSection />
      <div className="md:px-32 relative">
        <ReadySection
          sectionTargetSvg={<MessageIcon />}
          sectionTargetClientMessage="For Web3 messengers"
          sectionHeader={
            <Fragment>
              Alert from deceptive
              <br />
              impersonation attacks
            </Fragment>
          }
          sectionDescription="Inbound messages from deceptive look-alike names can exploit trusted relationships. NameGuard's homograph and canonical name algorithms help you handle higher-risk messages."
          sectionBackgroundName="bg-green_background"
          isCodeOnTheLeft={false}
          codeSnippet={exampleCode}
          integrationsPanel={
            <div className="hidden gt_mobile:inline-flex items-center gap-6 z-10">
              <p className="text-gray-500 text-lg leading-6 font-normal not-italic">
                Composable integrations include
              </p>
              <XMTPLogo />
              <FarcasterLogo />
              <LensProtocolLogo />
            </div>
          }
          imageSpecifics={{
            source: impersonation_attack_img.src,
            tagWidth: 956,
            tagHeight: 814,
          }}
        />
        <MobileSectionDivider />
        <ReadySection
          sectionTargetSvg={<ShoppingCartIcon />}
          sectionTargetClientMessage="For NFT Marketplaces"
          sectionHeader={<Fragment>Filter out fake ENS NFTs</Fragment>}
          sectionDescription={`Just because an NFT names itself "nick.eth" doesn't mean it's an ENS name. NameGuard makes it easy to stop fake ENS names from being sold on NFT marketplaces. Let's put an end to these scams !`}
          sectionBackgroundName={"bg-purple_background"}
          isCodeOnTheLeft={true}
          codeSnippet={exampleCode}
          integrationsPanel={
            <div className="inline-flex items-center gap-6 z-10">
              <p className="text-gray-500 text-lg leading-6 font-normal not-italic">
                Composable integrations include
              </p>
              <OpenSeaLogo />
              <RaribleLogo />
              <CoinbaseLogo />
            </div>
          }
          imageSpecifics={{
            source: fake_NFT_filter_img.src,
            tagWidth: 924,
            tagHeight: 680,
          }}
        />
        <MobileSectionDivider />
        <ReadySection
          sectionTargetSvg={<ShoppingCartIcon />}
          sectionTargetClientMessage="For ENS Registrars & Marketplaces"
          sectionHeader={
            <Fragment>
              Surface hidden risks or limitations
              <br />
              before final checkout
            </Fragment>
          }
          sectionDescription="NameGuard offers a detailed 10+ point-inspection on any ENS name, including NameWrapper fuses, offchain names, and DNS compatibility. Ensure no shocking disappointments after purchase."
          sectionBackgroundName="bg-green_background"
          isCodeOnTheLeft={false}
          codeSnippet={exampleCode}
          imageSpecifics={{
            source: surface_risks_img.src,
            tagWidth: 884,
            tagHeight: 682,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={
            <Fragment>
              Identify dangerous name
              <br />
              configurations
            </Fragment>
          }
          sectionDescription="Protect your community from improperly configured resolver records with ENS HealthChecks. These defend from issues ranging from considerable irreversible losses to web3 profiles that are incorrectly formatted and may not load properly."
          sectionBackgroundName={"bg-purple_background_sm"}
          isTextOnTheLeft={true}
          badgeText="Coming soon"
          imageSpecifics={{
            source: dangerous_name_config_img.src,
            tagWidth: 960,
            tagHeight: 682,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={
            <Fragment>
              Never lose a name you love with
              <br />
              ENS autorenew
            </Fragment>
          }
          sectionDescription="Life gets busy. It can be easy to forget to renew your ENS names. Give your community peace of mind (and earn recurring revenue!) with ENS AutoRenew. Help others save on gas fees too. Renewal transactions will be intelligently triggered at the optimal time when gas fees are low."
          sectionBackgroundName="bg-green_background_sm"
          isTextOnTheLeft={false}
          badgeText="Planned"
          imageSpecifics={{
            source: autorenewal_img.src,
            tagWidth: 11600,
            tagHeight: 626,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={<Fragment>ENS webfont</Fragment>}
          sectionDescription="Unicode is a complex beast. Have you prepared to handle the display of all possible ENS names in your UI? ENS Webfont provides enhanced security against homograph attacks and increases rendering support for emojis and other special graphemes."
          sectionBackgroundName="bg-purple_background_sm"
          isTextOnTheLeft={true}
          badgeText={"Planned"}
          imageSpecifics={{
            source: ens_webfont_img.src,
            tagWidth: 1440,
            tagHeight: 958,
          }}
        />
      </div>
      <MobileSectionDivider />
      <RoadMap />
      <NewExitSection />

      <div className="fixed inset-0 z-0 h-full w-[100vw] max-w-[100vw] overflow-x-hidden bg-[radial-gradient(#DDDDDD_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
    </>
  );
}

type CodeSnippetProps = {
  codeSnippet: string;
};

function CodeSnippet(props: CodeSnippetProps) {
  const figmaTheme: PrismTheme = {
    plain: {
      backgroundColor: "transparent",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    },
    styles: [
      {
        types: ["comment", "prolog", "cdata"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
      {
        types: ["doctype", "punctuation", "entity"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
      {
        types: [
          "attr-name",
          "class-name",
          "maybe-class-name",
          "boolean",
          "constant",
          "number",
          "atrule",
        ],
        style: { color: "rgba(255,255,255, 1)" },
      },
      {
        types: ["keyword"],
        style: { color: "rgba(255,255,255, 1)" },
      },
      {
        types: ["property", "tag", "symbol", "deleted", "important"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },

      {
        types: [
          "selector",
          "string",
          "char",
          "builtin",
          "inserted",
          "regex",
          "attr-value",
        ],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
      {
        types: ["variable", "operator", "function"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
      {
        types: ["url"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
      {
        types: ["deleted"],
        style: {
          textDecorationLine: "line-through",
        },
      },
      {
        types: ["inserted"],
        style: {
          textDecorationLine: "underline",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["important"],
        style: {
          color: "rgba(255,255,255, 1)",
        },
      },
    ],
  };
  return (
    <div className="hidden gt_mobile:block bg-black rounded-xl pb-4 max-w-full h-fit bg-gradient-to-b from-figma-black to-black z-10">
      <div className="flex flex-col gap-2.5 px-2.5 py-3">
        <div className="flex justify-start gap-2">
          <CodeSnippetDotSvg />
          <CodeSnippetDotSvg />
          <CodeSnippetDotSvg />
        </div>
      </div>
      <hr className="border-code-gray" />
      <div className="py-4 px-5 max-w-full">
        <Highlight
          theme={figmaTheme}
          code={`${props.codeSnippet}`}
          language="html"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="w-full overflow-x-auto pb-4" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="pr-8 text-code-gray">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

type ImageCharacteristics = {
  source: string;
  tagWidth: number;
  tagHeight: number;
};

type ReadySectionProps = {
  sectionTargetClientMessage: string;
  sectionTargetSvg: React.ReactNode;
  sectionHeader: React.ReactNode;
  sectionDescription: string;
  sectionBackgroundName: string;
  isCodeOnTheLeft: boolean;
  codeSnippet: string;
  integrationsPanel?: React.ReactNode;
  imageSpecifics: ImageCharacteristics;
};

function ReadySection(props: ReadySectionProps) {
  const mediaDiv = cc([
    "flex sm:flex-col xl:flex-row justify-center border-0 rounded-none items-center gap-12 w-full h-full xl:h-3/4 py-16 px-10 bg-center bg-no-repeat bg-cover flex-shrink-0 gt_mobile:gap-10",
    props.sectionBackgroundName,
  ]);
  return (
    <section className="z-10 relative w-full h-full py-10 px-5 flex flex-col items-center justify-center bg-white gt_mobile:bg-transparent md:py-24 gt_mobile:px-0">
      <div className="max-w-full flex flex-col items-center gt_mobile:mx-auto gt_mobile:px-6 gt_mobile:gap-3">
        <div className="w-full flex flex-col gap-5 items-center xl:w-1/2">
          <div className="inline-flex px-4 py-2 bg-black bg-opacity-5 rounded-[20px] gap-2 justify-center items-center z-10">
            {props.sectionTargetSvg}
            <span className="text-black text-center text-sm not-italic font-medium z-10 leading-5">
              {props.sectionTargetClientMessage}
            </span>
          </div>

          <h1 className="text-black text-center not-italic z-10 text-2xl leading-8 font-semibold gt_mobile:text-4xl gt_mobile:font-bold gt_mobile:leading-10">
            {props.sectionHeader}
          </h1>

          <p className="z-10 text-gray-500 text-center not-italic font-normal text-lg leading-7 gt_mobile:text-lg gt_mobile:leading-7 gt_mobile:font-light md:w-4/5">
            {props.sectionDescription}
          </p>
        </div>
        {props.isCodeOnTheLeft ? (
          <div className={mediaDiv}>
            {props.integrationsPanel ? (
              <div className="hidden md:flex flex-col w-full h-full justify-between items-center gap-7 max-w-3xl">
                <CodeSnippet codeSnippet={props.codeSnippet} />
                <div className="inline-flex items-center gap-6">
                  {props.integrationsPanel}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex flex-col w-full h-full justify-between items-center gap-7 max-w-3xl">
                <CodeSnippet codeSnippet={props.codeSnippet} />
              </div>
            )}
            <Image
              className="z-10 w-full h-full max-w-[34rem]"
              src={props.imageSpecifics.source}
              alt={"chat image"}
              width={props.imageSpecifics.tagWidth}
              height={props.imageSpecifics.tagHeight}
            />
          </div>
        ) : (
          <div className={mediaDiv}>
            <Image
              className="z-10 w-full h-full max-w-[34rem]"
              src={props.imageSpecifics.source}
              alt={"chat image"}
              width={props.imageSpecifics.tagWidth}
              height={props.imageSpecifics.tagHeight}
            />
            {props.integrationsPanel ? (
              <div className="hidden md:flex flex-col w-full h-full justify-between items-center gap-7 max-w-3xl">
                <CodeSnippet codeSnippet={props.codeSnippet} />
                {props.integrationsPanel}
              </div>
            ) : (
              <div className="hidden md:flex flex-col w-full h-full justify-between items-center gap-7 max-w-3xl">
                <CodeSnippet codeSnippet={props.codeSnippet} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

type ComingSoonSectionProps = {
  sectionTargetClientMessage: string;
  sectionTargetSvg: React.ReactNode;
  sectionHeader: React.ReactNode;
  sectionDescription: string;
  sectionBackgroundName: string;
  isTextOnTheLeft: boolean;
  badgeText: string;
  imageSpecifics: ImageCharacteristics;
};

function ComingSoonSection(props: ComingSoonSectionProps) {
  const rightImageDiv = cc([
    "hidden gt_mobile:flex flex-row justify-center items-center w-full max-w-2xl xl:w-1/2 rounded-none bg-origin-border bg-center bg-no-repeat bg-cover flex-shrink-0",
    props.sectionBackgroundName,
  ]);
  const mobileImageDiv = cc([
    "flex gt_mobile:hidden flex-row justify-center items-center w-full h-full rounded-none py-5 bg-origin-border bg-center bg-no-repeat bg-contain flex-shrink-0",
    props.sectionBackgroundName,
  ]);

  const leftImageDiv = cc([
    "hidden xl:flex flex-row justify-center items-center w-full max-w-2xl xl:w-1/2 rounded-none bg-origin-border bg-center bg-no-repeat bg-cover flex-shrink-0 box-border pr-16",
    props.sectionBackgroundName,
  ]);

  return (
    <section className="z-10 relative w-full flex flex-col xl:flex-row items-center justify-center h-full py-10 px-5 bg-white gt_mobile:bg-transparent gt_mobile:h-1/2 md:py-20 gt_mobile:px-10">
      {!props.isTextOnTheLeft && (
        <div className={leftImageDiv}>
          <Image
            className="relative z-10 w-full h-full"
            src={props.imageSpecifics.source}
            alt={"chat image"}
            width={props.imageSpecifics.tagWidth}
            height={props.imageSpecifics.tagHeight}
          />
        </div>
      )}
      <div className="flex flex-col gap-5 h-full w-full max-w-3xl items-center xl:items-start xl:w-1/2">
        <div className="inline-flex px-4 py-2 bg-black bg-opacity-5 rounded-3xl gap-2 justify-center items-center z-10">
          {props.sectionTargetSvg}
          <span className="text-black text-center text-sm leading-5 not-italic font-medium z-10">
            {props.sectionTargetClientMessage}
          </span>
        </div>
        <h1 className="hidden gt_mobile:block text-black font-bold not-italic z-10 text-center xl:text-left text-4xl leading-10">
          {props.sectionHeader}
          <span className="hidden gt_mobile:relative gt_mobile:-top-1 gt_mobile:inline-flex items-center justify-center rounded-xl bg-green-100 mx-3 px-3 py-0.5 text-center text-green-800 font-medium not-italic text-sm leading-5">
            {props.badgeText}
          </span>
        </h1>
        <div className="flex flex-col items-center gap-3 gt_mobile:hidden">
          <h1 className="gt_mobile:hidden text-black font-bold not-italic z-10 text-center text-2xl leading-8">
            {props.sectionHeader}
          </h1>
          <span className="gt_mobile:hidden inline-flex items-center justify-center rounded-xl bg-green-100 mx-3 px-3 py-0.5 text-center text-green-800 font-medium not-italic text-sm leading-5">
            {props.badgeText}
          </span>
        </div>
        <p className="text-gray-500 not-italic font-normal z-10 text-center text-lg leading-7 xl:text-left gt_mobile:text-lg gt_mobile:w-4/5 gt_mobile:leading-7 gt_mobile:font-light">
          {props.sectionDescription}
        </p>
      </div>
      {props.isTextOnTheLeft ? (
        <div className={rightImageDiv}>
          <Image
            className="relative z-10 w-full h-full"
            src={props.imageSpecifics.source}
            alt="chat image"
            width={props.imageSpecifics.tagWidth}
            height={props.imageSpecifics.tagHeight}
          />
        </div>
      ) : (
        <div className={cc([rightImageDiv, "xl:hidden pt-8"])}>
          <Image
            className="relative z-10 w-full h-full"
            src={props.imageSpecifics.source}
            alt="chat image"
            width={props.imageSpecifics.tagWidth}
            height={props.imageSpecifics.tagHeight}
          />
        </div>
      )}
      <div className={mobileImageDiv}>
        <Image
          className="relative z-10 w-full h-full"
          src={props.imageSpecifics.source}
          alt="chat image"
          width={props.imageSpecifics.tagWidth}
          height={props.imageSpecifics.tagHeight}
        />
      </div>
    </section>
  );
}

function HeroSection() {
  const heroBackgroundDiv = cc([
    "flex flex-col items-center justify-center w-full h-full min-w- max-w-[125rem] bg-no-repeat bg-center bg-contain",
    'xl:bg-[url("../../public/assets/hero_background.png")]',
  ]);
  const npmCommand = "npm install @namehash/nameguard";

  const copyDiv = (
    <div
      className="w-fit h-fit z-10 cursor-pointer"
      onClick={() => {
        setCopiedToClipboard(true);
        navigator.clipboard.writeText(npmCommand);
      }}
    >
      <CopyIcon />
    </div>
  );

  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);

  const copiedText: React.ReactNode = <>Copied!</>;
  const copyText: React.ReactNode = <>Copy to Clipboard</>;

  const displayCopiedFor = 4000;

  useEffect(() => {
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, displayCopiedFor);
  }, [copiedToClipboard]);

  return (
    <section className="box-border relative z-10 w-full h-fit xl:h-screen py-[61px] gt_mobile:pb-24 gt_mobile:pt-8 px-5 flex flex-col items-center justify-center bg-hero_background bg-no-repeat bg-center bg-contain md:px-10 md:pt-10 md:pb-32">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <WarningShieldOrangeOutline
          className={"absolute z-10 hidden lg:block top-[5%] left-[20%]"}
        />
        <WarningShieldOrangeOutline
          className={"absolute z-10 hidden lg:block top-[6%] right-[22%]"}
        />
        <CheckShieldLarge
          className={"absolute z-10 hidden xl:block top-[7%] left-[60%]"}
        />
        <WarningShieldSmall
          className={"absolute z-10 hidden lg:block top-[7%] right-[5%]"}
        />
        <ErrorShieldSmall
          className={"absolute z-10 hidden xl:block top-[11%] left-[42%]"}
        />
        <CheckShieldLarge
          className={"absolute z-10 hidden lg:block top-[12%] left-[7%]"}
        />
        <ErrorShieldLarge
          className={"absolute z-10 hidden lg:block top-[18%] right-[12%]"}
        />
        <WarningShieldSmall
          className={"absolute z-10 hidden xl:block top-[37%] left-[20%]"}
        />
        <WarningShieldRedOutline
          className={"absolute z-10 hidden lg:block top-[45%] right-[5%]"}
        />
        <CheckShieldOutline
          className={"absolute z-10 hidden lg:block top-[50%] left-[6%]"}
        />
        <WarningShieldSmall
          className={"absolute z-10 hidden lg:block bottom-[47%] right-[20%]"}
        />
        <ErrorShieldSmall
          className={"absolute z-10 hidden lg:block bottom-[40%] left-[25%]"}
        />
        <WarningShieldLarge
          className={"absolute z-10 hidden lg:block bottom-[22%] left-[6%]"}
        />
        <CheckShieldLarge
          className={"absolute z-10 hidden xl:block bottom-[25%] right-[30%]"}
        />
        <ErrorShieldSmall
          className={"absolute z-10 hidden xl:block bottom-[19%] left-[43%]"}
        />
        <WarningShieldLarge
          className={"absolute z-10 hidden lg:block bottom-[15%] right-[6%]"}
        />
        <WarningShieldRedOutline
          className={"absolute z-10 hidden lg:block bottom-[15%] left-[30%]"}
        />
        <WarningShieldOrangeOutline
          className={"absolute z-10 hidden lg:block bottom-[12%] right-[41%]"}
        />
        <div className="inline-flex flex-col items-center gap-5 w-full h-fit">
          <div className="flex flex-col gap-2 w-fit h-fit z-10">
            <p className="text-center not-italic uppercase text-gray-500 text-xs tracking-[0.3px] font-medium">
              An open source public good
            </p>
            <h1 className="text-black text-center not-italic font-bold text-4xl leading-10 gt_mobile:text-5xl gt_mobile:leading-[52px]">
              Protect your community
              <br />
              with NameGuard for ENS
            </h1>
          </div>
          <p className="text-center not-italic font-normal text-gray-500 text-lg leading-7 gt_mobile:text-base gt_mobile:leading-6 gt_mobile:font-light">
            Guard your users from heartbreak and encourage best practice usage
            of ENS
          </p>
          <div className="hidden flex search_bar_change:flex items-center gap-2 py-[9px] pl-4 pr-[14px] rounded-lg bg-black bg-opacity-5 border border-gray-300 gt_mobile:gap-3 gt_mobile:py-[13px] gt_mobile:pl-[20px] gt_mobile:pr-[16px]">
            <p className="text-black leading-6 font-normal text-sm gt_mobile:text-base">
              {npmCommand}
            </p>
            <Tooltip trigger={copyDiv}>
              {copiedToClipboard ? copiedText : copyText}
            </Tooltip>
          </div>
          <a
            href={"https://api.nameguard.io/docs"}
            className="hidden flex search_bar_change:block"
          >
            <button className="flex justify-center items-center px-[25px] py-[13px] rounded-lg bg-black z-10 shadow-sm transition hover:bg-gray-800 cursor-pointer">
              <p className="text-white not-italic font-medium text-base leading-6">
                View the docs
              </p>
            </button>
          </a>
          <div className="flex search_bar_change:hidden flex-col items-center gap-3 self-stretch">
            <Search />
            <p className="w-full h-fit text-gray-500 text-sm leading-6 font-normal text-center gt_mobile:font-light">
              or
            </p>
            <a
              href={"https://api.nameguard.io/docs"}
              className="w-full h-fit max-w-xs"
            >
              <button className="w-full h-fit box-border flex justify-center items-center self-stretch px-[17px] py-[9px] rounded-lg bg-black z-10 shadow-sm transition hover:bg-gray-800 cursor-pointer">
                <p className="text-white not-italic font-medium text-base leading-6">
                  View the docs
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExitSection() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-exit_section_background bg-no-repeat bg-bottom bg-contain pb-5 px-5 gt_mobile:h-1/2 gt_mobile:py-20">
      <div className="z-10 flex flex-col items-center pt-10 pb-5 gt_mobile:inline-flex gt_mobile:items-start gt_mobile:p-[10px] gt_mobile:gap-[10px]">
        <div className="flex flex-col items-center gap-5 w-full h-fit gt_mobile:gap-8">
          <div className="flex flex-col justify-start items-center gap-5 gt_mobile:block">
            <h1 className="text-black not-italic text-center font-bold text-2xl leading-8 gt_mobile:text-4xl gt_mobile:leading-[52px]">
              Search for any ENS name to generate a<br />
              NameGuard report
            </h1>
            <p className="text-center text-gray-500 font-normal not-italic text-lg leading-7 gt_mobile:text-lg gt_mobile:leading-7 gt_mobile:font-light">
              Share NameGuard reports with frENS. Together we can make web3
              safer.
            </p>
          </div>
          <Search />
        </div>
      </div>
    </section>
  );
}

function NewExitSection() {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center py-5 px-5 gap-5 z-10 bg-white lg:bg-transparent md:px-[112px] lg:pt-10 lg:pb-[45px] lg:flex-row lg:gap-10">
      <div className="flex flex-col justify-center items-center h-full max-h-[334px] md:max-h-[315px] w-full max-w-3xl rounded-xl border border-gray-200 bg-generate_raport_background bg-no-repeat bg-top bg-[length:180%_200%] lg:bg-[length:100%_250%]">
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 py-[63px] px-5 box-border lg:max-w-[508px] lg:w-full lg:px-10">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center text-black not-italic text-3xl leading-9 font-bold ">
              Generate a report
            </h1>
            <p className="text-center text-gray-500 not-italic text-lg leading-7 font-normal gt_mobile:font-light lg:leading-8">
              Search for any ENS name to generate a report. Share NameGuard
              reports with frENS.{" "}
            </p>
          </div>
          <Search />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full max-h-[334px] md:max-h-[315px] w-full max-w-3xl rounded-xl border border-gray-200 bg-in_touch_background bg-no-repeat bg-top bg-[length:180%_200%] lg:bg-[length:100%_250%]">
        <div className="h-full w-full box-border inline-flex flex-col justify-center items-center gap-10 py-10 px-5 box-border flex-shrink-0 lg:max-w-[508px] lg:w-full lg:px-10">
          <div className="flex flex-col h-fit w-full max-w-[295px] items-center justify-center gap-6">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-center text-black not-italic text-3xl leading-9 font-bold ">
                Get in touch
              </h1>
              <p className="text-center text-gray-500 not-italic text-lg leading-7 font-normal gt_mobile:font-light lg:leading-8">
                NameHash Labs collaborates with teams across web3, and we’re
                always look forward to meeting new frens.
              </p>
            </div>
            <button className="max-h-12 flex justify-center items-center px-[25px] py-[13px] rounded-lg border border-gray-300 bg-white z-10 shadow-sm transition hover:bg-gray-100 cursor-pointer">
              <p className="text-black not-italic font-medium text-base leading-6">
                Schedule a call
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

type RoadMapElement = {
  stageOfCompletion: "completed" | "in progress" | "planned";
  headerText: string;
  commentSentences: string[] | React.ReactNode[];
};

function RoadMap() {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const completedBadge = (
    <span className="relative inline-flex items-center justify-center rounded-[10px] gt_mobile:rounded-xl bg-black px-[10px] gt_mobile:px-3 py-0.5 text-center font-medium text-white not-italic text-xs leading-4 gt_mobile:text-sm gt_mobile:leading-5">
      Completed
    </span>
  );

  const inProgressBadge = (
    <span className="relative inline-flex w-fit h-auto items-center whitespace-nowrap justify-center rounded-[10px] gt_mobile:rounded-xl border border-black bg-white px-[10px] gt_mobile:px-3 py-0.5 text-center font-medium text-black not-italic text-xs leading-4 gt_mobile:text-sm gt_mobile:leading-5">
      In progress
    </span>
  );

  const plannedBadge = (
    <span className="relative inline-flex items-center justify-center rounded-[10px] gt_mobile:rounded-xl bg-black bg-opacity-5 px-[10px] gt_mobile:px-3 py-0.5 text-center font-medium text-black not-italic text-xs leading-4 gt_mobile:text-sm gt_mobile:leading-5">
      Planned
    </span>
  );

  const badgesMap = new Map<string, React.ReactNode>([
    ["completed", completedBadge],
    ["in progress", inProgressBadge],
    ["planned", plannedBadge],
  ]);

  const roadMapElements: RoadMapElement[] = [
    {
      stageOfCompletion: "completed",
      headerText: "Python ENS Normalize",
      commentSentences: ["ENSIP-15 ENS Normalization Approval"],
    },
    {
      stageOfCompletion: "completed",
      headerText: "ENS Font Data",
      commentSentences: ["implemented"],
    },
    {
      stageOfCompletion: "completed",
      headerText: "ENS label inspector",
      commentSentences: [
        <span key={"ENSLabelInspectorFragment"}>
          Description with{" "}
          <a
            className="text-black underline gt_mobile:underline-offset-[4px] gt_mobile:transition-all gt_mobile:duration-200 gt_mobile:hover:underline-offset-[2px]"
            href={"https://namehash.io/"}
          >
            hyperlink
          </a>
        </span>,
      ],
    },
    {
      stageOfCompletion: "completed",
      headerText: "Hidden risks or limitations checks",
      commentSentences: ["implemented"],
    },
    {
      stageOfCompletion: "completed",
      headerText: "Impersonation attack protections",
      commentSentences: ["implemented"],
    },
    {
      stageOfCompletion: "completed",
      headerText: "Fake ENS NFT filters",
      commentSentences: ["implemented"],
    },
    {
      stageOfCompletion: "in progress",
      headerText: "Expand ENS Name Risks and Limitation Checks",
      commentSentences: [
        "Full DNS name support",
        "Offchain name support",
        "NameWrapper fuse checks",
        "Enhanced support for multi-grapheme confusables",
        "Expanded impersonation checks for different networks (ex: Polygon, etc..) and for overall NFT collections, rather than just NFTs",
      ],
    },

    {
      stageOfCompletion: "planned",
      headerText: "ENS Name Auto-Renewal",
      commentSentences: [
        "Users will be able to automate renewals with credit cards and other major forms of payment ",
      ],
    },
    {
      stageOfCompletion: "planned",
      headerText: "Content Enhancements",
      commentSentences: [
        "User-friendly (non-technical) help pages for each check",
        "Information messages and help content with multiple language support (internationalization)",
      ],
    },
    {
      stageOfCompletion: "planned",
      headerText: "ENS Webfont",
      commentSentences: [
        "User-friendly (non-technical) help pages for each check",
        "Information messages and help content with multiple language support (internationalization)",
      ],
    },
    {
      stageOfCompletion: "planned",
      headerText: "Universal “Pool” for Labelhash",
      commentSentences: [
        "Universal “pool” for labelhash -> label lookups across all networks",
      ],
    },
    {
      stageOfCompletion: "planned",
      headerText: "ENS Profile Completion Score",
      commentSentences: [
        "Each ENS Profile will carry a score assessing the level to help raise awareness of opportunities for enhancement to a name’s records ",
      ],
    },
  ];

  const leftSideShields = [
    <RoadmapPositiveShield key="leftShieldSVG0" />,
    <RoadmapNegativeShield key="leftShieldSVG1" />,
    <RoadmapWarningShield key="leftShieldSVG2" />,
    <RoadmapPositiveShield key="leftShieldSVG3" />,
    <RoadmapWarningShield key="leftShieldSVG4" />,
    <RoadmapNegativeShield key="leftShieldSVG5" />,
    <RoadmapWarningShield key="leftShieldSVG6" />,
    <RoadmapPositiveShield key="leftShieldSVG7" />,
    <RoadmapNegativeShield key="leftShieldSVG8" />,
  ];
  const rightSideShields = [
    <RoadmapNegativeShield key="rightShieldSVG0" />,
    <RoadmapPositiveShield key="rightShieldSVG1" />,
    <RoadmapWarningShield key="rightShieldSVG2" />,
    <RoadmapNegativeShield key="rightShieldSVG3" />,
    <RoadmapPositiveShield key="rightShieldSVG4" />,
    <RoadmapWarningShield key="rightShieldSVG5" />,
    <RoadmapNegativeShield key="rightShieldSVG6" />,
    <RoadmapPositiveShield key="rightShieldSVG7" />,
    <RoadmapWarningShield key="rightShieldSVG8" />,
  ];

  return (
    <section className="relative bg-white w-full h-full px-5 md:pt-24 md:pb-12 md:px-10 xl:px-32 flex flex-row items-center justify-center z-10 gap-10">
      <div className="hidden w-1/6 h-full relative -top-20 md:flex flex-col justify-center items-center gap-[10.5rem]">
        {leftSideShields.map((shield, idx) => (
          <div
            key={`left-${idx}-Shield`}
            className={cc([
              "w-full h-full flex flex-row items-center",
              idx % 2 === 1 ? "justify-start" : "justify-end",
            ])}
          >
            <div className="inline-flex items-start p-5 gap-[10px] border rounded-full border-gray-200 shadow-sm">
              {shield}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full gt_mobile:w-4/6 h-full flex flex-col items-center justify-center pt-10 gt_mobile:pt-0 pb-5 gt_mobile:pb-0 gap-5 gt_mobile:gap-20">
        <div className="inline-flex h-fit w-full flex-col items-center gap-5 gt_mobile:gap-2 z-10">
          <h1 className="text-black text-center not-italic font-bold text-2xl leading-8 gt_mobile:text-4xl gt_mobile:leading-[52px]">
            NameGuard roadmap
          </h1>
          <p className="text-center text-gray-500 text-lg leading-7 font-normal not-italic gt_mobile:text-base gt_mobile:font-light">
            NameGuard has a mission to keep the ENS community safe and encourage
            optimal use of ENS names.
          </p>
        </div>
        <div className="h-fit w-full max-w-[1050px]">
          <ul role="list" className="space-y-4 w-full h-full flex-shrink-0">
            {roadMapElements.map((roadmapElement, idx) => (
              <li key={idx} className="relative flex gap-x-4">
                <div
                  className={classNames(
                    idx === roadMapElements.length - 1 ? "h-4/5" : "h-full",
                    "-bottom-6",
                    "absolute left-0 top-0 flex w-6 justify-center mt-2"
                  )}
                >
                  <div
                    className={cc([
                      "w-[2px] mt-5 mb-3",
                      roadmapElement.stageOfCompletion === "completed"
                        ? "bg-black"
                        : "bg-gray-200",
                    ])}
                  />
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  {roadmapElement.stageOfCompletion === "completed" ? (
                    <CheckCircleIcon
                      className="h-6 w-6 my-2 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <div
                      className={cc([
                        "h-2 w-2 rounded-full",
                        roadmapElement.stageOfCompletion === "in progress"
                          ? "bg-black"
                          : "bg-gray-200",
                      ])}
                    />
                  )}
                </div>
                <div className="w-full h-fit flex flex-col items-start gap-2 pb-6">
                  <div className="relative -top-2 w-full h-fit inline-flex flex-row justify-between items-start self-stretch py-1.5">
                    <h1 className="text-black text-lg leading-6 font-semibold not-italic pr-2">
                      {roadmapElement.headerText}
                    </h1>
                    {badgesMap.get(roadmapElement.stageOfCompletion)}
                  </div>
                  <div className="relative -top-2 w-full h-fit flex flex-col items-start self-stretch rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <ul
                      role="list"
                      className="list-disc list-outside ml-[15px]"
                    >
                      {roadmapElement.commentSentences.map(
                        (sentence, sentenceIdx) => (
                          <li
                            key={`${idx}${sentenceIdx}`}
                            className="box-border text-sm leading-6 text-gray-500 font-normal not-italic"
                          >
                            {sentence}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden w-1/6 h-full relative top-4 md:flex flex-col justify-center items-center gap-[10.5rem]">
        {rightSideShields.map((shield, idx) => (
          <div
            key={`left-${idx}-Shield`}
            className={cc([
              "w-full h-full flex flex-row items-center",
              idx % 2 === 0 ? "justify-start" : "justify-end",
            ])}
          >
            <div className="inline-flex items-start p-5 gap-[10px] border rounded-full border-gray-200 shadow-sm">
              {shield}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NameGuardLogoLarge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      className="hidden gt_mobile:block"
    >
      <path
        d="M27.5231 0.45459H16.932C16.8449 0.45459 16.7752 0.524273 16.7752 0.611371V7.56184C16.7752 7.64894 16.8274 7.70119 16.9145 7.71861C17.3152 7.77087 17.9597 7.80572 18.5172 7.82314C18.7959 7.82314 19.0397 7.84055 19.2488 7.84055H19.5101C19.5972 7.84055 19.6669 7.77087 19.6669 7.68377V3.50304C19.6669 3.41594 19.7365 3.34627 19.8236 3.34627H24.6315C24.7186 3.34627 24.7882 3.41594 24.7882 3.50304V26.4448C24.7882 26.5319 24.7186 26.6016 24.6315 26.6016H19.7714C19.7714 26.6016 19.7714 26.6016 19.754 26.6016C19.6843 26.6016 19.6146 26.5493 19.6146 26.4796C19.6146 26.4622 19.6146 26.4622 19.6146 26.4448C19.2139 22.3512 16.3397 18.9717 12.5596 17.7524C11.5841 17.4388 10.5563 17.282 9.51116 17.282H4.72074C4.63364 17.282 4.56397 17.3517 4.56397 17.4388V20.0169C4.56397 20.104 4.63364 20.1737 4.72074 20.1737H7.96081C7.96081 20.1737 7.99565 20.1737 8.08275 20.1737C8.55308 20.1737 10.3473 20.1911 10.9744 20.3131L11.0615 20.3305C11.288 20.3827 11.497 20.435 11.706 20.5047C13.0474 20.9228 14.2493 21.7415 15.1377 22.8389C16.2003 24.128 16.7752 25.748 16.7752 27.4203V29.3365C16.7752 29.4236 16.8449 29.4932 16.932 29.4932H27.5406C27.6277 29.4932 27.6973 29.4236 27.6973 29.3365V0.611371C27.6799 0.524273 27.6102 0.45459 27.5231 0.45459ZM23.0114 9.47801H19.6494C19.6494 9.47801 19.1268 9.478 18.4997 9.46058C17.8726 9.44316 17.1584 9.40832 16.7578 9.33864L16.7055 9.32123L16.6532 9.30381C16.0261 9.16445 15.4164 8.93799 14.8416 8.64185C13.9706 8.18894 13.1867 7.56184 12.5596 6.79537C11.5144 5.50631 10.9222 3.86886 10.9222 2.21399V0.611371C10.9222 0.524273 10.8525 0.45459 10.7654 0.45459H0.156782C0.0696831 0.45459 0 0.524273 0 0.611371V29.3365C0 29.4236 0.0696831 29.4932 0.156782 29.4932H10.7654C10.8525 29.4932 10.9222 29.4236 10.9222 29.3365V22.055C10.9222 21.9679 10.8699 21.9157 10.7828 21.8983C10.2951 21.8286 9.42407 21.7937 8.77954 21.7763H8.2221C8.13501 21.7763 8.06533 21.846 8.06533 21.9331V26.4274C8.06533 26.5145 7.99565 26.5842 7.90855 26.5842H3.10071C3.01361 26.5842 2.94393 26.5145 2.94393 26.4274V3.50304C2.94393 3.41594 3.01361 3.34627 3.10071 3.34627H7.99565C8.06533 3.34627 8.13501 3.39853 8.15243 3.46821C8.58792 6.95215 10.7828 9.89608 13.8313 11.3593C14.7197 11.7948 15.6952 12.091 16.7055 12.2477C17.1933 12.3174 17.7158 12.3697 18.221 12.3697H23.0114C23.0985 12.3697 23.1682 12.3 23.1682 12.2129V9.63478C23.1682 9.54768 23.0985 9.47801 23.0114 9.47801Z"
        fill="black"
      />
    </svg>
  );
}

function NameGuardLogoSmall() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      className="block gt_mobile:hidden"
    >
      <path
        d="M22.6419 0.196777H13.9291C13.8574 0.196777 13.8001 0.254102 13.8001 0.325754V6.04355C13.8001 6.1152 13.8431 6.15819 13.9147 6.17252C14.2443 6.21551 14.7746 6.24418 15.2331 6.25851C15.4624 6.25851 15.663 6.27283 15.835 6.27283H16.0499C16.1216 6.27283 16.1789 6.21551 16.1789 6.14386V2.70458C16.1789 2.63293 16.2362 2.57561 16.3079 2.57561H20.2631C20.3347 2.57561 20.392 2.63293 20.392 2.70458V21.5776C20.392 21.6493 20.3347 21.7066 20.2631 21.7066H16.2649C16.2649 21.7066 16.2649 21.7066 16.2506 21.7066C16.1933 21.7066 16.1359 21.6636 16.1359 21.6063C16.1359 21.5919 16.1359 21.5919 16.1359 21.5776C15.8063 18.21 13.4418 15.4299 10.3322 14.4268C9.52966 14.1688 8.68417 14.0399 7.82435 14.0399H3.88352C3.81186 14.0399 3.75454 14.0972 3.75454 14.1688V16.2897C3.75454 16.3614 3.81186 16.4187 3.88352 16.4187H6.54895C6.54895 16.4187 6.57762 16.4187 6.64927 16.4187C7.03619 16.4187 8.51221 16.433 9.0281 16.5333L9.09975 16.5477C9.28604 16.5907 9.45801 16.6337 9.62997 16.691C10.7334 17.0349 11.7222 17.7084 12.453 18.6112C13.3272 19.6717 13.8001 21.0044 13.8001 22.3801V23.9564C13.8001 24.0281 13.8574 24.0854 13.9291 24.0854H22.6562C22.7279 24.0854 22.7852 24.0281 22.7852 23.9564V0.325754C22.7709 0.254102 22.7135 0.196777 22.6419 0.196777ZM18.9303 7.61989H16.1646C16.1646 7.61989 15.7347 7.61988 15.2188 7.60555C14.7029 7.59122 14.1154 7.56256 13.7858 7.50524L13.7428 7.49091L13.6998 7.47658C13.1839 7.36194 12.6823 7.17564 12.2094 6.93203C11.4929 6.55944 10.848 6.04355 10.3322 5.41302C9.47234 4.35257 8.98511 3.00552 8.98511 1.64414V0.325754C8.98511 0.254102 8.92779 0.196777 8.85614 0.196777H0.128976C0.0573247 0.196777 0 0.254102 0 0.325754V23.9564C0 24.0281 0.0573247 24.0854 0.128976 24.0854H8.85614C8.92779 24.0854 8.98511 24.0281 8.98511 23.9564V17.9664C8.98511 17.8947 8.94212 17.8517 8.87047 17.8374C8.46922 17.7801 7.7527 17.7514 7.22248 17.7371H6.76391C6.69226 17.7371 6.63494 17.7944 6.63494 17.8661V21.5633C6.63494 21.6349 6.57762 21.6923 6.50597 21.6923H2.5508C2.47915 21.6923 2.42183 21.6349 2.42183 21.5633V2.70458C2.42183 2.63293 2.47915 2.57561 2.5508 2.57561H6.57762C6.63494 2.57561 6.69226 2.61861 6.70659 2.67593C7.06485 5.54199 8.87047 7.96381 11.3783 9.16756C12.1091 9.52582 12.9116 9.76943 13.7428 9.8984C14.144 9.95572 14.5739 9.99872 14.9895 9.99872H18.9303C19.002 9.99872 19.0593 9.94139 19.0593 9.86974V7.74886C19.0593 7.6772 19.002 7.61989 18.9303 7.61989Z"
        fill="black"
      />
    </svg>
  );
}

function MobileSectionDivider() {
  return (
    <div className="flex gt_mobile:hidden items-center justify-center w-full h-fit px-5">
      <span className="bg-gray-200 h-[1px] w-full"></span>
    </div>
  );
}

function RoadmapPositiveShield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M12 16.9998L15 19.9998L20 12.9998M16 3.61882C13.1327 6.33432 9.26084 7.99982 5 7.99982C4.9323 7.99982 4.8647 7.9994 4.79719 7.99856C4.27986 9.57204 4 11.2533 4 12.9999C4 20.4552 9.09909 26.7196 16 28.4958C22.9009 26.7196 28 20.4552 28 12.9999C28 11.2533 27.7201 9.57204 27.2028 7.99856C27.1353 7.9994 27.0677 7.99982 27 7.99982C22.7392 7.99982 18.8673 6.33432 16 3.61882Z"
        stroke="#059669"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoadmapNegativeShield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M12.6667 12.6667L19.3333 19.3333M12.6667 19.3333L19.3333 12.6667M16 3.61902C13.1327 6.33452 9.26084 8.00002 5 8.00002C4.9323 8.00002 4.8647 7.9996 4.79719 7.99876C4.27986 9.57224 4 11.2535 4 13.0001C4 20.4554 9.09909 26.7198 16 28.496C22.9009 26.7198 28 20.4554 28 13.0001C28 11.2535 27.7201 9.57224 27.2028 7.99876C27.1353 7.9996 27.0677 8.00002 27 8.00002C22.7392 8.00002 18.8673 6.33452 16 3.61902Z"
        stroke="#DC2626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoadmapWarningShield() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 12V17M16 3.61902C13.1327 6.33452 9.26084 8.00002 5 8.00002C4.9323 8.00002 4.8647 7.9996 4.79719 7.99876C4.27986 9.57224 4 11.2535 4 13.0001C4 20.4554 9.09909 26.7198 16 28.496C22.9009 26.7198 28 20.4554 28 13.0001C28 11.2535 27.7201 9.57224 27.2028 7.99876C27.1353 7.9996 27.0677 8.00002 27 8.00002C22.7392 8.00002 18.8673 6.33452 16 3.61902ZM16 21H16.01V21.01H16V21Z"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XMTPLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="36"
      viewBox="0 0 116 36"
      fill="none"
    >
      <g clipPath="url(#clip0_858_4673)">
        <path
          d="M43.9945 17.6167L50.5568 8.78833H45.4659L41.3756 14.7033L37.2263 8.78833H31.9L38.374 17.8227L31.5469 27.0631H36.6083L41.0224 20.8243L45.407 27.0631H50.7628L43.9945 17.6167Z"
          fill="#31006E"
        />
        <path
          d="M64.8579 21.5012H64.799L60.6536 8.78833H53.7051V27.0924H58.0014V13.6145H58.1192L62.6509 27.0924H66.6824L71.1847 13.6145H71.3025V27.0924H75.8931V8.78833H69.0366L64.8579 21.5012Z"
          fill="#31006E"
        />
        <path
          d="M78.9531 8.75928V12.6143H85.4136L85.3977 27.0634H90.0177L90.0268 12.6143H96.4623V8.75928H78.9531Z"
          fill="#31006E"
        />
        <path
          d="M108.585 8.75928H99.4629V27.0634H104.083V21.3545H108.497C113.185 21.3545 116.001 19.1056 116.001 14.9686C116.001 10.8817 113.18 8.7855 108.592 8.7855L108.585 8.75928ZM104.083 17.5582V12.6143H108.144C110.075 12.6143 111.351 13.2603 111.351 15.1157C111.351 16.9459 110.087 17.5288 108.056 17.5288L104.083 17.5582Z"
          fill="#31006E"
        />
        <path
          d="M0 17.7641C0 10.2555 6.08684 4.16846 13.5953 4.16846C21.099 4.16846 26.8964 10.1423 27.0729 17.7053C27.0729 20.1184 26.249 22.1488 24.1891 24.0617C22.4484 25.6781 19.4807 25.9156 17.3033 24.7091C15.7492 23.8126 14.5514 21.9032 13.5365 20.5009L11.6531 23.3849H7.5922L11.4177 17.705L7.70991 12.114H11.8885L13.566 14.9979L15.2138 12.114H19.422L15.5964 17.7053C15.5964 17.7053 17.4209 20.5009 18.4214 21.5898C19.422 22.6786 21.2464 22.708 22.4234 21.5309C23.7177 20.2367 24.0073 19.2062 24.0126 17.7053C24.0328 11.8959 19.4185 7.22895 13.5953 7.22895C7.77707 7.22895 3.06042 11.9457 3.06042 17.7641C3.06042 23.5825 7.77707 28.2994 13.5953 28.2994C14.4001 28.2994 15.1715 28.2317 15.9201 28.0638L16.5675 31.0361C15.5022 31.2749 14.6417 31.3598 13.5953 31.3598C6.08684 31.3598 0 25.2728 0 17.7641Z"
          fill="#FC4F37"
        />
      </g>
      <defs>
        <clipPath id="clip0_858_4673">
          <rect width="116" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FarcasterLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="36"
      viewBox="0 0 140 36"
      fill="none"
    >
      <path
        d="M5.22174 4.06738H24.8483V31.9767H21.9673V19.1924H21.939C21.6206 15.6591 18.6512 12.8903 15.035 12.8903C11.4188 12.8903 8.44935 15.6591 8.13095 19.1924H8.10269V31.9767H5.22174V4.06738Z"
        fill="#8465CB"
      />
      <path
        d="M0 8.0287L1.17039 11.99H2.16072V28.0153C1.6635 28.0153 1.26042 28.4184 1.26042 28.9156V29.996H1.08036C0.583137 29.996 0.18006 30.3991 0.18006 30.8963V31.9767H10.2634V30.8963C10.2634 30.3991 9.86033 29.996 9.36311 29.996H9.18305V28.9156C9.18305 28.4184 8.77997 28.0153 8.28275 28.0153H7.20239V8.0287H0Z"
        fill="#8465CB"
      />
      <path
        d="M22.1474 28.0153C21.6501 28.0153 21.2471 28.4184 21.2471 28.9156V29.996H21.067C20.5698 29.996 20.1667 30.3991 20.1667 30.8963V31.9767H30.2501V30.8963C30.2501 30.3991 29.847 29.996 29.3498 29.996H29.1697V28.9156C29.1697 28.4184 28.7666 28.0153 28.2694 28.0153V11.99H29.2597L30.4301 8.0287H23.2277V28.0153H22.1474Z"
        fill="#8465CB"
      />
      <path
        d="M132.898 26.4427V13.994H135.743V16.0688H135.873C136.1 15.3501 136.489 14.7963 137.04 14.4073C137.596 14.0129 138.231 13.8157 138.944 13.8157C139.107 13.8157 139.288 13.8238 139.487 13.84C139.693 13.8508 139.863 13.8697 139.998 13.8967V16.5956C139.874 16.5523 139.677 16.5145 139.406 16.4821C139.142 16.4443 138.885 16.4254 138.636 16.4254C138.102 16.4254 137.621 16.5415 137.194 16.7739C136.772 17.0008 136.44 17.3169 136.197 17.7221C135.954 18.1273 135.832 18.5947 135.832 19.1242V26.4427H132.898Z"
        fill="black"
      />
      <path
        d="M124.882 26.6862C123.634 26.6862 122.556 26.4268 121.648 25.9081C120.746 25.384 120.052 24.6438 119.565 23.6875C119.079 22.7257 118.836 21.5938 118.836 20.2917C118.836 19.0111 119.079 17.8873 119.565 16.9201C120.057 15.9476 120.743 15.1911 121.624 14.6508C122.505 14.1051 123.539 13.8323 124.728 13.8323C125.495 13.8323 126.219 13.9565 126.9 14.2051C127.586 14.4482 128.191 14.8264 128.715 15.3397C129.245 15.853 129.661 16.5068 129.964 17.301C130.266 18.0899 130.417 19.03 130.417 20.1215V21.0211H120.214V19.0435H127.605C127.6 18.4816 127.478 17.9818 127.24 17.5442C127.003 17.1011 126.67 16.7526 126.244 16.4987C125.822 16.2447 125.33 16.1178 124.769 16.1178C124.169 16.1178 123.642 16.2637 123.188 16.5554C122.734 16.8418 122.38 17.22 122.126 17.6901C121.878 18.1547 121.751 18.6653 121.745 19.2218V20.9481C121.745 21.6721 121.878 22.2935 122.143 22.8122C122.407 23.3255 122.777 23.7199 123.253 23.9955C123.728 24.2656 124.285 24.4007 124.922 24.4007C125.349 24.4007 125.736 24.3413 126.081 24.2224C126.427 24.0981 126.727 23.9171 126.981 23.6794C127.235 23.4416 127.427 23.1472 127.557 22.796L130.296 23.104C130.123 23.828 129.793 24.4601 129.307 25.0004C128.826 25.5353 128.21 25.9514 127.459 26.2485C126.708 26.5403 125.849 26.6862 124.882 26.6862Z"
        fill="black"
      />
      <path
        d="M117.051 13.994V16.2633H109.895V13.994H117.051ZM111.661 11.0115H114.595V22.6983C114.595 23.0927 114.655 23.3953 114.774 23.606C114.898 23.8114 115.06 23.9518 115.26 24.0275C115.46 24.1031 115.681 24.1409 115.924 24.1409C116.108 24.1409 116.276 24.1274 116.427 24.1004C116.584 24.0734 116.702 24.0491 116.783 24.0275L117.278 26.3211C117.121 26.3751 116.897 26.4346 116.605 26.4994C116.319 26.5642 115.968 26.602 115.552 26.6129C114.817 26.6345 114.155 26.5237 113.566 26.2806C112.977 26.032 112.51 25.6484 112.164 25.1297C111.823 24.611 111.656 23.9626 111.661 23.1846V11.0115Z"
        fill="black"
      />
      <path
        d="M108.148 17.2848L105.473 17.5766C105.398 17.3065 105.265 17.0525 105.076 16.8148C104.893 16.577 104.644 16.3852 104.331 16.2393C104.017 16.0935 103.634 16.0205 103.18 16.0205C102.569 16.0205 102.056 16.1529 101.64 16.4176C101.229 16.6824 101.027 17.0255 101.032 17.4469C101.027 17.8089 101.159 18.1034 101.429 18.3303C101.705 18.5573 102.159 18.7437 102.791 18.8896L104.914 19.3434C106.092 19.5974 106.967 19.9999 107.54 20.551C108.118 21.1021 108.41 21.8234 108.415 22.7149C108.41 23.4984 108.18 24.19 107.726 24.7897C107.278 25.384 106.654 25.8487 105.854 26.1837C105.055 26.5187 104.136 26.6862 103.099 26.6862C101.575 26.6862 100.349 26.3674 99.4193 25.7298C98.4899 25.0869 97.9361 24.1927 97.7578 23.0472L100.619 22.7717C100.748 23.3336 101.024 23.7577 101.445 24.0441C101.867 24.3304 102.415 24.4736 103.091 24.4736C103.788 24.4736 104.347 24.3304 104.768 24.0441C105.195 23.7577 105.409 23.4038 105.409 22.9824C105.409 22.6258 105.271 22.3313 104.995 22.099C104.725 21.8666 104.304 21.6883 103.731 21.5641L101.608 21.1183C100.413 20.8698 99.53 20.451 98.9573 19.8621C98.3846 19.2678 98.1009 18.5167 98.1063 17.609C98.1009 16.8418 98.3089 16.1772 98.7304 15.6153C99.1572 15.048 99.7488 14.6103 100.505 14.3023C101.267 13.989 102.145 13.8323 103.139 13.8323C104.598 13.8323 105.746 14.143 106.584 14.7643C107.427 15.3857 107.948 16.2258 108.148 17.2848Z"
        fill="black"
      />
      <path
        d="M88.7849 26.6943C87.9961 26.6943 87.2856 26.5538 86.6534 26.2729C86.0266 25.9865 85.5296 25.5651 85.1621 25.0085C84.8001 24.452 84.6191 23.7658 84.6191 22.95C84.6191 22.2476 84.7488 21.6667 85.0082 21.2075C85.2675 20.7482 85.6214 20.3808 86.0699 20.1052C86.5183 19.8297 87.0235 19.6217 87.5854 19.4812C88.1527 19.3353 88.739 19.2299 89.3441 19.1651C90.0735 19.0895 90.6652 19.0219 91.119 18.9625C91.5729 18.8977 91.9025 18.8004 92.1078 18.6707C92.3185 18.5357 92.4239 18.3276 92.4239 18.0467V17.998C92.4239 17.3875 92.2429 16.9147 91.8809 16.5797C91.5189 16.2447 90.9975 16.0773 90.3167 16.0773C89.5981 16.0773 89.028 16.2339 88.6066 16.5473C88.1906 16.8607 87.9096 17.2308 87.7637 17.6577L85.0244 17.2686C85.2405 16.5122 85.5971 15.88 86.0942 15.3722C86.5913 14.8589 87.1991 14.4752 87.9177 14.2213C88.6363 13.9619 89.4306 13.8323 90.3005 13.8323C90.9002 13.8323 91.4973 13.9025 92.0916 14.043C92.6859 14.1835 93.2289 14.4158 93.7206 14.74C94.2123 15.0588 94.6067 15.4937 94.9039 16.0448C95.2065 16.5959 95.3578 17.2848 95.3578 18.1115V26.4431H92.5373V24.733H92.4401C92.2618 25.0788 92.0105 25.403 91.6864 25.7055C91.3676 26.0027 90.9651 26.2431 90.4788 26.4268C89.9979 26.6051 89.4333 26.6943 88.7849 26.6943ZM89.5467 24.5385C90.1357 24.5385 90.6463 24.4223 91.0785 24.19C91.5108 23.9522 91.8431 23.6389 92.0754 23.2498C92.3131 22.8608 92.432 22.4367 92.432 21.9774V20.5105C92.3401 20.5861 92.1834 20.6564 91.9619 20.7212C91.7458 20.786 91.5027 20.8428 91.2325 20.8914C90.9623 20.94 90.6949 20.9832 90.4301 21.0211C90.1654 21.0589 89.9358 21.0913 89.7413 21.1183C89.3036 21.1778 88.9119 21.275 88.5661 21.4101C88.2203 21.5452 87.9474 21.7343 87.7475 21.9774C87.5476 22.2151 87.4476 22.5231 87.4476 22.9013C87.4476 23.4416 87.6449 23.8496 88.0393 24.1251C88.4337 24.4007 88.9362 24.5385 89.5467 24.5385Z"
        fill="black"
      />
      <path
        d="M77.4611 26.6862C76.2184 26.6862 75.1513 26.4133 74.2598 25.8676C73.3737 25.3219 72.6902 24.5682 72.2093 23.6064C71.7338 22.6393 71.4961 21.5263 71.4961 20.2673C71.4961 19.003 71.7392 17.8873 72.2255 16.9201C72.7118 15.9476 73.398 15.1911 74.2841 14.6508C75.1756 14.1051 76.2292 13.8323 77.4449 13.8323C78.4553 13.8323 79.3495 14.0187 80.1275 14.3915C80.911 14.7589 81.535 15.2803 81.9997 15.9557C82.4643 16.6257 82.7291 17.4091 82.7939 18.306H79.9897C79.8763 17.7063 79.6061 17.2065 79.1793 16.8067C78.7578 16.4014 78.1932 16.1988 77.4854 16.1988C76.8857 16.1988 76.3589 16.3609 75.905 16.6851C75.4511 17.0039 75.0972 17.4631 74.8433 18.0629C74.5948 18.6626 74.4705 19.3812 74.4705 20.2187C74.4705 21.067 74.5948 21.7964 74.8433 22.407C75.0918 23.0121 75.4403 23.4795 75.8888 23.8091C76.3426 24.1332 76.8749 24.2953 77.4854 24.2953C77.9176 24.2953 78.304 24.2143 78.6444 24.0522C78.9902 23.8847 79.2792 23.6443 79.5116 23.3309C79.7439 23.0175 79.9033 22.6366 79.9897 22.1881H82.7939C82.7237 23.0688 82.4643 23.8496 82.0159 24.5304C81.5674 25.2057 80.9569 25.7352 80.1842 26.1189C79.4116 26.4971 78.5039 26.6862 77.4611 26.6862Z"
        fill="black"
      />
      <path
        d="M63.4941 26.4427V13.994H66.3389V16.0688H66.4685C66.6955 15.3501 67.0845 14.7963 67.6356 14.4073C68.1921 14.0129 68.827 13.8157 69.5402 13.8157C69.7023 13.8157 69.8833 13.8238 70.0832 13.84C70.2885 13.8508 70.4587 13.8697 70.5938 13.8967V16.5956C70.4695 16.5523 70.2723 16.5145 70.0021 16.4821C69.7374 16.4443 69.4807 16.4254 69.2322 16.4254C68.6973 16.4254 68.2164 16.5415 67.7896 16.7739C67.3681 17.0008 67.0359 17.3169 66.7927 17.7221C66.5496 18.1273 66.428 18.5947 66.428 19.1242V26.4427H63.4941Z"
        fill="black"
      />
      <path
        d="M53.9705 26.6943C53.1816 26.6943 52.4711 26.5538 51.8389 26.2729C51.2122 25.9865 50.7151 25.5651 50.3477 25.0085C49.9857 24.452 49.8047 23.7658 49.8047 22.95C49.8047 22.2476 49.9344 21.6667 50.1937 21.2075C50.4531 20.7482 50.807 20.3808 51.2554 20.1052C51.7039 19.8297 52.2091 19.6217 52.771 19.4812C53.3383 19.3353 53.9245 19.2299 54.5297 19.1651C55.2591 19.0895 55.8507 19.0219 56.3046 18.9625C56.7584 18.8977 57.088 18.8004 57.2933 18.6707C57.5041 18.5357 57.6094 18.3276 57.6094 18.0467V17.998C57.6094 17.3875 57.4284 16.9147 57.0664 16.5797C56.7044 16.2447 56.183 16.0773 55.5022 16.0773C54.7836 16.0773 54.2136 16.2339 53.7922 16.5473C53.3761 16.8607 53.0952 17.2308 52.9493 17.6577L50.2099 17.2686C50.426 16.5122 50.7826 15.88 51.2797 15.3722C51.7768 14.8589 52.3847 14.4752 53.1033 14.2213C53.8219 13.9619 54.6161 13.8323 55.486 13.8323C56.0858 13.8323 56.6828 13.9025 57.2771 14.043C57.8715 14.1835 58.4145 14.4158 58.9062 14.74C59.3978 15.0588 59.7923 15.4937 60.0894 16.0448C60.392 16.5959 60.5433 17.2848 60.5433 18.1115V26.4431H57.7229V24.733H57.6256C57.4473 25.0788 57.1961 25.403 56.8719 25.7055C56.5531 26.0027 56.1506 26.2431 55.6643 26.4268C55.1834 26.6051 54.6188 26.6943 53.9705 26.6943ZM54.7323 24.5385C55.3212 24.5385 55.8318 24.4223 56.2641 24.19C56.6963 23.9522 57.0286 23.6389 57.2609 23.2498C57.4987 22.8608 57.6175 22.4367 57.6175 21.9774V20.5105C57.5257 20.5861 57.369 20.6564 57.1475 20.7212C56.9313 20.786 56.6882 20.8428 56.4181 20.8914C56.1479 20.94 55.8804 20.9832 55.6157 21.0211C55.3509 21.0589 55.1213 21.0913 54.9268 21.1183C54.4892 21.1778 54.0974 21.275 53.7516 21.4101C53.4058 21.5452 53.133 21.7343 52.9331 21.9774C52.7332 22.2151 52.6332 22.5231 52.6332 22.9013C52.6332 23.4416 52.8304 23.8496 53.2248 24.1251C53.6193 24.4007 54.1217 24.5385 54.7323 24.5385Z"
        fill="black"
      />
      <path
        d="M48.5152 13.994V16.2633H41.1562V13.994H48.5152ZM42.996 26.4427V12.8188C42.996 11.9814 43.1689 11.2844 43.5147 10.7279C43.8659 10.1713 44.336 9.7553 44.9249 9.47974C45.5138 9.20418 46.1676 9.06641 46.8862 9.06641C47.3941 9.06641 47.8453 9.10693 48.2397 9.18798C48.6341 9.26902 48.9259 9.34196 49.115 9.4068L48.5314 11.6761C48.4072 11.6383 48.2505 11.6004 48.0614 11.5626C47.8723 11.5194 47.6616 11.4978 47.4292 11.4978C46.8835 11.4978 46.4972 11.6302 46.2703 11.8949C46.0487 12.1543 45.938 12.5271 45.938 13.0134V26.4427H42.996Z"
        fill="black"
      />
    </svg>
  );
}

function LensProtocolLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="146"
      height="36"
      viewBox="0 0 146 36"
      fill="none"
    >
      <g clipPath="url(#clip0_858_4623)">
        <path
          d="M59.7885 13.3665V16.1986H50.8652V6.48267H54.3343V13.3665H59.7885Z"
          fill="#272E29"
        />
        <path
          d="M69.9534 13.7256V16.1986H60.9082V6.48267H69.9127V8.95568H64.3772V10.1481H69.6349V12.4248H64.3772V13.7256H69.9534Z"
          fill="#272E29"
        />
        <path
          d="M82.4806 6.48267V16.1986H78.0562L74.6415 10.0669V16.1986H71.5586V6.48267H76.1252L79.4113 12.506V6.48267H82.4806Z"
          fill="#272E29"
        />
        <path
          d="M88.7355 16.4897C87.8178 16.4897 86.9571 16.3813 86.1534 16.1646C85.3541 15.9432 84.6562 15.6496 84.0599 15.2837V12.7701C84.6743 13.154 85.3518 13.4589 86.0931 13.6847C86.8331 13.9061 87.5853 14.0167 88.3488 14.0167C88.8999 14.0167 89.309 13.9671 89.575 13.8677C89.8422 13.7684 89.9752 13.6102 89.9752 13.3934C89.9752 13.2036 89.8824 13.0524 89.6969 12.9394C89.5124 12.8265 89.1827 12.7294 88.7076 12.6481L87.326 12.3974C86.1736 12.1896 85.3292 11.835 84.7917 11.3337C84.2587 10.8322 83.9922 10.1683 83.9922 9.34166C83.9922 8.7138 84.1752 8.16507 84.541 7.69526C84.9115 7.22098 85.467 6.85289 86.2082 6.59088C86.9527 6.3244 87.8704 6.19116 88.9591 6.19116C89.8891 6.19116 90.6906 6.28595 91.3635 6.47564C92.0409 6.66544 92.5998 6.89581 93.0379 7.16677V9.57886C92.6266 9.34849 92.1023 9.14974 91.4652 8.98263C90.8336 8.81552 90.1462 8.7319 89.4062 8.7319C88.2135 8.7319 87.6166 8.92618 87.6166 9.31461C87.6166 9.42304 87.6491 9.51336 87.7116 9.58557C87.7798 9.65342 87.895 9.7121 88.057 9.76173C88.2202 9.81147 88.4527 9.85663 88.7557 9.89732L90.3072 10.1479C91.0706 10.2745 91.6932 10.4619 92.1772 10.7103C92.6601 10.9542 93.0212 11.2772 93.2615 11.6792C93.5007 12.0767 93.6203 12.5691 93.6203 13.1562C93.6203 13.8248 93.4169 14.412 93.01 14.9179C92.6087 15.4192 92.0364 15.8077 91.2964 16.0832C90.5598 16.3543 89.7058 16.4897 88.7355 16.4897Z"
          fill="#272E29"
        />
        <path
          d="M57.5797 19.4202C58.4198 19.4202 59.1267 19.5692 59.7004 19.8673C60.2786 20.1609 60.7122 20.5765 61.0013 21.114C61.2949 21.6515 61.4417 22.2816 61.4417 23.0044C61.4417 23.7181 61.2746 24.3482 60.9404 24.8947C60.6106 25.4367 60.116 25.8613 59.4565 26.1685C58.797 26.4711 57.993 26.6224 57.0444 26.6224H54.3343V29.1497H50.8652V19.4202H57.5797ZM56.1365 24.4204C56.7011 24.4204 57.1325 24.3053 57.4306 24.0749C57.7333 23.84 57.8846 23.5148 57.8846 23.0992C57.8846 22.6972 57.7491 22.3856 57.4781 22.1642C57.2116 21.9383 56.8299 21.8254 56.333 21.8254H54.3343V24.4204H56.1365Z"
          fill="#272E29"
        />
        <path
          d="M69.2213 29.1496L66.0843 25.1656V29.1496H62.6152V19.4336H69.4585C70.2172 19.4336 70.879 19.5691 71.4437 19.8401C72.0083 20.1112 72.4419 20.4951 72.7446 20.9919C73.0516 21.4843 73.2052 22.058 73.2052 22.7129C73.2052 23.282 73.0901 23.7924 72.8597 24.2441C72.6293 24.6914 72.3042 25.0504 71.8841 25.3215C71.4639 25.5879 70.9761 25.7438 70.4206 25.7889L73.3001 29.1496H69.2213ZM68.0424 24.1425C68.5528 24.1425 68.9413 24.0432 69.2078 23.8444C69.4742 23.6457 69.6075 23.3566 69.6075 22.9771C69.6075 22.6158 69.4833 22.3425 69.2348 22.1573C68.9909 21.9721 68.6251 21.8796 68.1373 21.8796H66.0843V24.1425H68.0424Z"
          fill="#272E29"
        />
        <path
          d="M80.4621 29.4674C79.2019 29.4674 78.0929 29.2348 77.1354 28.7696C76.1778 28.3042 75.4393 27.6741 74.9198 26.8792C74.4004 26.0842 74.1406 25.2034 74.1406 24.2368C74.1406 23.252 74.3981 22.3735 74.913 21.6011C75.4325 20.8242 76.171 20.2166 77.1286 19.7785C78.0862 19.3358 79.2019 19.1145 80.4756 19.1145C81.7404 19.1145 82.8494 19.3358 83.8024 19.7785C84.76 20.2166 85.4963 20.8242 86.0112 21.6011C86.5312 22.3735 86.7905 23.252 86.7905 24.2368C86.7905 25.2079 86.5289 26.091 86.0045 26.886C85.485 27.6809 84.7465 28.311 83.7889 28.7763C82.8313 29.237 81.7223 29.4674 80.4621 29.4674ZM80.4621 26.6488C80.9815 26.6488 81.4378 26.5494 81.8307 26.3507C82.2237 26.1474 82.5263 25.8651 82.7387 25.5037C82.951 25.1424 83.057 24.7291 83.057 24.2638C83.057 23.8031 82.951 23.3966 82.7387 23.0443C82.5263 22.692 82.2237 22.4187 81.8307 22.2244C81.4378 22.0303 80.9815 21.9331 80.4621 21.9331C79.9382 21.9331 79.4797 22.0303 79.0866 22.2244C78.6937 22.4187 78.3888 22.692 78.1721 23.0443C77.9597 23.3966 77.8536 23.8031 77.8536 24.2638C77.8536 24.7291 77.9597 25.1424 78.1721 25.5037C78.3888 25.8651 78.6937 26.1474 79.0866 26.3507C79.4797 26.5494 79.9382 26.6488 80.4621 26.6488Z"
          fill="#272E29"
        />
        <path
          d="M97.3538 22.1709H94.0474V29.1496H90.5777V22.1709H87.2109V19.4336H97.3538V22.1709Z"
          fill="#272E29"
        />
        <path
          d="M104.082 29.4674C102.821 29.4674 101.712 29.2348 100.754 28.7696C99.7975 28.3042 99.0586 27.6741 98.5389 26.8792C98.0202 26.0842 97.7598 25.2034 97.7598 24.2368C97.7598 23.252 98.018 22.3735 98.5322 21.6011C99.0519 20.8242 99.7908 20.2166 100.748 19.7785C101.706 19.3358 102.821 19.1145 104.095 19.1145C105.36 19.1145 106.468 19.3358 107.422 19.7785C108.38 20.2166 109.115 20.8242 109.631 21.6011C110.151 22.3735 110.41 23.252 110.41 24.2368C110.41 25.2079 110.148 26.091 109.624 26.886C109.104 27.6809 108.365 28.311 107.409 28.7763C106.451 29.237 105.342 29.4674 104.082 29.4674ZM104.082 26.6488C104.601 26.6488 105.057 26.5494 105.45 26.3507C105.844 26.1474 106.145 25.8651 106.358 25.5037C106.57 25.1424 106.676 24.7291 106.676 24.2638C106.676 23.8031 106.57 23.3966 106.358 23.0443C106.145 22.692 105.844 22.4187 105.45 22.2244C105.057 22.0303 104.601 21.9331 104.082 21.9331C103.558 21.9331 103.099 22.0303 102.706 22.2244C102.314 22.4187 102.009 22.692 101.792 23.0443C101.579 23.3966 101.473 23.8031 101.473 24.2638C101.473 24.7291 101.579 25.1424 101.792 25.5037C102.009 25.8651 102.314 26.1474 102.706 26.3507C103.099 26.5494 103.558 26.6488 104.082 26.6488Z"
          fill="#272E29"
        />
        <path
          d="M117.646 29.4674C116.327 29.4674 115.188 29.2461 114.231 28.8034C113.278 28.3562 112.552 27.7465 112.056 26.9741C111.559 26.1971 111.311 25.3208 111.311 24.3451C111.311 23.356 111.563 22.4661 112.07 21.6756C112.576 20.8806 113.314 20.2551 114.285 19.7988C115.256 19.3426 116.41 19.1145 117.748 19.1145C118.565 19.1145 119.313 19.1959 119.99 19.3584C120.672 19.521 121.32 19.7559 121.934 20.0631V22.9291C121.542 22.6535 121.049 22.43 120.457 22.2583C119.871 22.0867 119.245 22.0009 118.581 22.0009C117.853 22.0009 117.228 22.0958 116.704 22.2855C116.18 22.4752 115.781 22.7416 115.505 23.0849C115.234 23.4237 115.099 23.8167 115.099 24.2638C115.099 24.7155 115.236 25.1153 115.511 25.4631C115.792 25.8064 116.193 26.0751 116.717 26.2694C117.242 26.4591 117.863 26.554 118.581 26.554C119.267 26.554 119.906 26.4636 120.498 26.2829C121.09 26.0977 121.577 25.8516 121.962 25.5444V28.3427C121.298 28.7311 120.627 29.0157 119.949 29.1963C119.276 29.3771 118.508 29.4674 117.646 29.4674Z"
          fill="#272E29"
        />
        <path
          d="M129.38 29.4674C128.12 29.4674 127.011 29.2348 126.053 28.7696C125.095 28.3042 124.356 27.6741 123.838 26.8792C123.318 26.0842 123.059 25.2034 123.059 24.2368C123.059 23.252 123.316 22.3735 123.831 21.6011C124.35 20.8242 125.089 20.2166 126.046 19.7785C127.003 19.3358 128.12 19.1145 129.393 19.1145C130.658 19.1145 131.767 19.3358 132.72 19.7785C133.678 20.2166 134.414 20.8242 134.928 21.6011C135.448 22.3735 135.708 23.252 135.708 24.2368C135.708 25.2079 135.446 26.091 134.922 26.886C134.403 27.6809 133.664 28.311 132.706 28.7763C131.748 29.237 130.639 29.4674 129.38 29.4674ZM129.38 26.6488C129.899 26.6488 130.356 26.5494 130.748 26.3507C131.141 26.1474 131.444 25.8651 131.657 25.5037C131.869 25.1424 131.975 24.7291 131.975 24.2638C131.975 23.8031 131.869 23.3966 131.657 23.0443C131.444 22.692 131.141 22.4187 130.748 22.2244C130.356 22.0303 129.899 21.9331 129.38 21.9331C128.855 21.9331 128.397 22.0303 128.005 22.2244C127.611 22.4187 127.306 22.692 127.089 23.0443C126.877 23.3966 126.771 23.8031 126.771 24.2638C126.771 24.7291 126.877 25.1424 127.089 25.5037C127.306 25.8651 127.611 26.1474 128.005 26.3507C128.397 26.5494 128.855 26.6488 129.38 26.6488Z"
          fill="#272E29"
        />
        <path
          d="M146.001 26.3174V29.1496H137.078V19.4336H140.547V26.3174H146.001Z"
          fill="#272E29"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.2945 11.2358C31.0385 9.7872 32.9846 9.23601 34.8508 9.37529C36.8416 9.52395 38.6839 10.4528 40.0596 11.802C41.4355 13.1513 42.3807 14.9561 42.532 16.9037C42.6847 18.8693 42.0236 20.9278 40.2805 22.7346C40.1211 22.9008 39.9581 23.0651 39.7918 23.2273C31.886 30.9795 21.3842 30.9999 21.2768 30.9999C21.2231 30.9999 10.6875 30.9995 2.76108 23.2262L2.75929 23.2245C2.59565 23.063 2.43457 22.9006 2.27584 22.7371L2.2745 22.7357C0.530632 20.9306 -0.131102 18.8725 0.0211419 16.907C0.171932 14.9597 1.11647 13.1547 2.49191 11.8049C3.86736 10.4552 5.70937 9.52563 7.7005 9.37641C9.56666 9.23646 11.5131 9.78698 13.2582 11.2349C13.4457 9.00161 14.4235 7.26355 15.8425 6.06874C17.3561 4.79434 19.3286 4.17285 21.2762 4.17285C23.224 4.17285 25.1964 4.79434 26.7099 6.06874C28.1293 7.26378 29.107 9.00217 29.2945 11.2358ZM27.2157 19.4494C26.9996 19.4494 26.9247 19.7558 27.0626 19.918C27.307 20.2055 27.4538 20.5753 27.4538 20.9787C27.4538 21.8941 26.6972 22.6362 25.7637 22.6362C24.8302 22.6362 24.0735 21.8941 24.0735 20.9787C24.0735 20.9297 24.0083 20.9053 23.9789 20.945C23.7123 21.3041 23.5324 21.7071 23.4584 22.1304C23.4168 22.3688 23.2193 22.5662 22.971 22.5662H22.834C22.5099 22.5662 22.2427 22.3086 22.2905 21.9965C22.6183 19.8579 24.7677 18.3068 27.2157 18.3068C29.6639 18.3068 31.8132 19.8579 32.1411 21.9965C32.1888 22.3086 31.9215 22.5662 31.5976 22.5662C31.2737 22.5662 31.0171 22.3074 30.9467 21.9993C30.6262 20.5975 29.1408 19.4494 27.2157 19.4494ZM12.2069 20.9787C12.2069 20.9141 12.1215 20.8794 12.0814 20.9308C11.7963 21.2954 11.6022 21.7085 11.52 22.1437C11.4715 22.4008 11.2582 22.6144 10.9898 22.6144H10.8892C10.5653 22.6144 10.298 22.3569 10.3458 22.0448C10.6734 19.905 12.823 18.355 15.2711 18.355C17.7192 18.355 19.8688 19.905 20.1963 22.0448C20.2442 22.3569 19.9769 22.6144 19.653 22.6144C19.329 22.6144 19.0725 22.3556 19.0021 22.0476C18.6818 20.6449 17.1964 19.4977 15.2711 19.4977C15.0961 19.4977 15.032 19.7387 15.1491 19.8652C15.4214 20.1595 15.5872 20.5501 15.5872 20.9787C15.5872 21.8941 14.8306 22.6362 13.8971 22.6362C12.9636 22.6362 12.2069 21.8941 12.2069 20.9787ZM23.1565 24.9759C23.3855 24.7527 23.7393 24.6441 24.0235 24.7955C24.3079 24.9467 24.4158 25.298 24.2109 25.5424C23.5436 26.3385 22.4632 26.8428 21.2718 26.8428C20.0809 26.8428 18.9982 26.3437 18.3299 25.5417C18.1258 25.2967 18.235 24.9457 18.5199 24.7955C18.8047 24.6451 19.158 24.755 19.3866 24.9786C19.827 25.4092 20.4953 25.7002 21.2718 25.7002C22.0461 25.7002 22.7152 25.4063 23.1565 24.9759Z"
          fill="#272E29"
        />
      </g>
      <defs>
        <clipPath id="clip0_858_4623">
          <rect width="146" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function OpenSeaLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="36"
      viewBox="0 0 140 36"
      fill="none"
    >
      <path
        d="M32 18C32 26.8361 24.8361 34 16 34C7.16394 34 0 26.8361 0 18C0 9.16394 7.16394 2 16 2C24.8379 2 32 9.16394 32 18Z"
        fill="#2081E2"
      />
      <path
        d="M7.89396 18.5375L7.96298 18.429L12.1252 11.9177C12.1861 11.8224 12.3291 11.8322 12.3751 11.9358C13.0704 13.4942 13.6704 15.4323 13.3893 16.6389C13.2693 17.1353 12.9406 17.8076 12.5707 18.429C12.523 18.5194 12.4704 18.6082 12.4145 18.6937C12.3882 18.7331 12.3438 18.7561 12.2962 18.7561H8.01559C7.90052 18.7561 7.83312 18.6312 7.89396 18.5375Z"
        fill="white"
      />
      <path
        d="M26.4469 19.7474V20.7781C26.4469 20.8373 26.4107 20.8899 26.3581 20.9129C26.036 21.051 24.9329 21.5573 24.4743 22.1951C23.3039 23.8242 22.4096 26.1535 20.4107 26.1535H12.0714C9.11581 26.1535 6.7207 23.7502 6.7207 20.7847V20.6893C6.7207 20.6104 6.7848 20.5463 6.86371 20.5463H11.5125C11.6046 20.5463 11.672 20.6318 11.6638 20.7222C11.6309 21.0247 11.6868 21.3337 11.8298 21.6148C12.106 22.1754 12.678 22.5255 13.2961 22.5255H15.5975V20.7288H13.3224C13.2057 20.7288 13.1367 20.594 13.2041 20.4987C13.2287 20.4608 13.2567 20.4214 13.2862 20.377C13.5016 20.0713 13.809 19.5962 14.1148 19.0554C14.3235 18.6904 14.5257 18.3008 14.6884 17.9096C14.7213 17.8389 14.7476 17.7666 14.7739 17.6959C14.8183 17.5709 14.8644 17.4542 14.8972 17.3375C14.9301 17.2389 14.9564 17.1353 14.9827 17.0383C15.06 16.7063 15.0928 16.3545 15.0928 15.9896C15.0928 15.8466 15.0863 15.697 15.0731 15.5539C15.0665 15.3978 15.0468 15.2416 15.0271 15.0854C15.0139 14.9474 14.9893 14.8109 14.963 14.6679C14.9301 14.4591 14.8841 14.252 14.8315 14.0432L14.8134 13.9644C14.7739 13.8213 14.7411 13.6849 14.695 13.5419C14.5652 13.0931 14.4156 12.6558 14.2578 12.2465C14.2002 12.0838 14.1345 11.9276 14.0687 11.7715C13.9717 11.5364 13.8731 11.3227 13.7827 11.1205C13.7367 11.0284 13.6972 10.9446 13.6578 10.8591C13.6134 10.7621 13.5674 10.6651 13.5213 10.5731C13.4884 10.5024 13.4506 10.4366 13.4243 10.3709L13.1432 9.85142C13.1038 9.78073 13.1695 9.69689 13.2468 9.71827L15.0057 10.195H15.0107C15.0139 10.195 15.0156 10.1966 15.0172 10.1966L15.249 10.2607L15.5038 10.3331L15.5975 10.3594V9.31389C15.5975 8.80921 16.0019 8.3999 16.5016 8.3999C16.7515 8.3999 16.9783 8.50182 17.1411 8.66784C17.3038 8.83389 17.4057 9.06073 17.4057 9.31389V10.8657L17.5932 10.9183C17.6079 10.9232 17.6227 10.9298 17.6359 10.9396C17.6819 10.9742 17.7476 11.0251 17.8315 11.0876C17.8972 11.1402 17.9679 11.2043 18.0534 11.2701C18.2227 11.4065 18.4249 11.5824 18.6468 11.7846C18.706 11.8356 18.7636 11.8882 18.8162 11.9408C19.1022 12.2071 19.4228 12.5194 19.7285 12.8646C19.814 12.9616 19.8978 13.0602 19.9833 13.1638C20.0688 13.269 20.1592 13.3725 20.2381 13.4761C20.3417 13.6142 20.4534 13.7572 20.5504 13.9068C20.5964 13.9775 20.6491 14.0498 20.6934 14.1205C20.8184 14.3095 20.9285 14.5052 21.0337 14.7008C21.0781 14.7912 21.1241 14.8898 21.1636 14.9868C21.2803 15.2482 21.3724 15.5145 21.4315 15.7808C21.4496 15.8383 21.4628 15.9008 21.4693 15.9567V15.9699C21.4891 16.0487 21.4956 16.1326 21.5022 16.218C21.5285 16.4909 21.5154 16.7638 21.4562 17.0383C21.4315 17.1551 21.3987 17.2652 21.3592 17.3819C21.3197 17.4937 21.2803 17.6104 21.2293 17.7205C21.1307 17.949 21.014 18.1775 20.8759 18.3912C20.8315 18.4701 20.7789 18.554 20.7263 18.6329C20.6688 18.7167 20.6096 18.7956 20.557 18.8729C20.4847 18.9715 20.4074 19.0751 20.3285 19.1671C20.2578 19.2641 20.1855 19.3611 20.1066 19.4466C19.9964 19.5764 19.8912 19.6997 19.7811 19.8181C19.7154 19.8954 19.6447 19.9743 19.5723 20.045C19.5017 20.1238 19.4293 20.1945 19.3636 20.2603C19.2534 20.3704 19.1614 20.4559 19.0841 20.5266L18.9033 20.6926C18.877 20.7156 18.8425 20.7288 18.8063 20.7288H17.4057V22.5255H19.1679C19.5625 22.5255 19.9373 22.3858 20.2397 22.1293C20.3433 22.0389 20.7954 21.6477 21.3296 21.0576C21.3477 21.0378 21.3707 21.023 21.397 21.0165L26.2644 19.6093C26.3549 19.583 26.4469 19.6521 26.4469 19.7474Z"
        fill="white"
      />
      <path
        d="M47.591 25.6789C46.1446 25.6789 44.815 25.3548 43.6026 24.7065C42.4045 24.0582 41.4474 23.1563 40.7315 22.0007C40.0304 20.831 39.6797 19.5204 39.6797 18.0689C39.6797 16.6173 40.0304 15.3137 40.7315 14.1582C41.4474 13.0026 42.4045 12.1006 43.6026 11.4524C44.815 10.8041 46.1446 10.48 47.591 10.48C49.0374 10.48 50.3597 10.8041 51.5578 11.4524C52.7706 12.1006 53.72 13.0026 54.4067 14.1582C55.1082 15.3137 55.4586 16.6173 55.4586 18.0689C55.4586 19.5204 55.1082 20.831 54.4067 22.0007C53.7056 23.1563 52.7558 24.0582 51.5578 24.7065C50.3597 25.3548 49.0374 25.6789 47.591 25.6789ZM47.591 22.3812C48.8182 22.3812 49.7971 21.9866 50.5277 21.1974C51.273 20.4082 51.6454 19.3654 51.6454 18.0689C51.6454 16.7583 51.273 15.7154 50.5277 14.9403C49.7971 14.1511 48.8182 13.7565 47.591 13.7565C46.3491 13.7565 45.3558 14.1441 44.6106 14.9191C43.88 15.6943 43.5149 16.7441 43.5149 18.0689C43.5149 19.3795 43.88 20.4294 44.6106 21.2186C45.3558 21.9937 46.3491 22.3812 47.591 22.3812Z"
        fill="#04111D"
      />
      <path
        d="M61.2924 15.4053C61.6576 14.8557 62.1616 14.4117 62.8044 14.0735C63.4473 13.7353 64.1996 13.5662 65.0617 13.5662C66.0697 13.5662 66.983 13.8128 67.8012 14.306C68.6192 14.7993 69.262 15.5039 69.7296 16.4199C70.2118 17.336 70.4528 18.4 70.4528 19.6119C70.4528 20.8239 70.2118 21.8949 69.7296 22.825C69.262 23.7411 68.6192 24.4527 67.8012 24.9601C66.983 25.4533 66.0697 25.6999 65.0617 25.6999C64.2144 25.6999 63.462 25.5308 62.8044 25.1926C62.1616 24.8544 61.6576 24.4175 61.2924 23.882V29.0399H57.5449V13.7353H61.2924V15.4053ZM66.6396 19.6119C66.6396 18.71 66.3766 18.0054 65.8505 17.498C65.3392 16.9766 64.7036 16.7159 63.944 16.7159C63.199 16.7159 62.5635 16.9766 62.0374 17.498C61.526 18.0194 61.2704 18.7311 61.2704 19.633C61.2704 20.535 61.526 21.2467 62.0374 21.7681C62.5635 22.2895 63.199 22.5502 63.944 22.5502C64.6892 22.5502 65.3248 22.2895 65.8505 21.7681C66.3766 21.2326 66.6396 20.5138 66.6396 19.6119Z"
        fill="#04111D"
      />
      <path
        d="M83.9462 19.4428C83.9462 19.781 83.9244 20.1333 83.8805 20.4998H75.3993C75.4578 21.2326 75.6988 21.7963 76.1225 22.1909C76.5609 22.5714 77.094 22.7616 77.7225 22.7616C78.6575 22.7616 79.3074 22.3811 79.6729 21.6201H83.6613C83.4569 22.3952 83.0844 23.0928 82.5436 23.7129C82.0178 24.3329 81.3529 24.8192 80.5494 25.1715C79.7458 25.5238 78.8473 25.6999 77.854 25.6999C76.6559 25.6999 75.5894 25.4533 74.6543 24.9601C73.7193 24.4668 72.9887 23.7622 72.4626 22.8462C71.9369 21.9302 71.6738 20.8591 71.6738 19.633C71.6738 18.407 71.9295 17.336 72.4409 16.4199C72.9666 15.5039 73.6972 14.7993 74.6322 14.306C75.5673 13.8128 76.6412 13.5662 77.854 13.5662C79.0373 13.5662 80.0892 13.8057 81.0095 14.2849C81.9301 14.7641 82.646 15.4475 83.1574 16.3354C83.6834 17.2232 83.9462 18.259 83.9462 19.4428ZM80.1113 18.4915C80.1113 17.8715 79.8921 17.3782 79.4537 17.0118C79.0153 16.6454 78.4674 16.4622 77.8102 16.4622C77.1817 16.4622 76.6486 16.6384 76.2102 16.9907C75.7865 17.343 75.5234 17.8433 75.4213 18.4915H80.1113Z"
        fill="#04111D"
      />
      <path
        d="M93.3731 13.6086C94.8048 13.6086 95.9443 14.0596 96.7916 14.9615C97.6537 15.8493 98.0848 17.0754 98.0848 18.6397V25.531H94.359V19.1259C94.359 18.3367 94.1472 17.7237 93.7235 17.2868C93.2998 16.8499 92.7302 16.6315 92.0144 16.6315C91.2982 16.6315 90.7286 16.8499 90.3049 17.2868C89.8812 17.7237 89.6694 18.3367 89.6694 19.1259V25.531H85.9219V13.7355H89.6694V15.2997C90.0492 14.7783 90.5606 14.3696 91.2035 14.0737C91.846 13.7637 92.5692 13.6086 93.3731 13.6086Z"
        fill="#04111D"
      />
      <path
        d="M106.257 25.6789C105.132 25.6789 104.124 25.5027 103.232 25.1504C102.341 24.7981 101.625 24.2767 101.085 23.5861C100.559 22.8956 100.281 22.0641 100.252 21.0917H104.24C104.299 21.6414 104.496 22.0641 104.832 22.3601C105.168 22.6419 105.607 22.7829 106.147 22.7829C106.703 22.7829 107.141 22.6631 107.462 22.4235C107.783 22.1698 107.944 21.8246 107.944 21.3877C107.944 21.0213 107.813 20.7183 107.55 20.4787C107.302 20.2391 106.987 20.0418 106.607 19.8868C106.242 19.7318 105.716 19.5556 105.03 19.3583C104.036 19.0624 103.225 18.7664 102.597 18.4705C101.969 18.1746 101.428 17.7377 100.975 17.1599C100.522 16.5821 100.296 15.8281 100.296 14.898C100.296 13.5169 100.815 12.4389 101.852 11.6638C102.889 10.8746 104.24 10.48 105.906 10.48C107.601 10.48 108.967 10.8746 110.004 11.6638C111.042 12.4389 111.597 13.524 111.67 14.9191H107.615C107.586 14.44 107.404 14.0665 107.068 13.7988C106.732 13.5169 106.301 13.376 105.775 13.376C105.322 13.376 104.957 13.4958 104.679 13.7354C104.401 13.9608 104.263 14.292 104.263 14.7289C104.263 15.208 104.496 15.5815 104.964 15.8493C105.431 16.117 106.162 16.4059 107.155 16.716C108.149 17.0401 108.952 17.3501 109.566 17.6461C110.194 17.942 110.735 18.3719 111.188 18.9356C111.641 19.4993 111.867 20.225 111.867 21.1129C111.867 21.9584 111.641 22.7265 111.188 23.417C110.75 24.1076 110.107 24.6572 109.259 25.0659C108.412 25.4745 107.411 25.6789 106.257 25.6789Z"
        fill="#04111D"
      />
      <path
        d="M125.7 19.4428C125.7 19.781 125.678 20.1333 125.634 20.4998H117.153C117.212 21.2326 117.453 21.7963 117.876 22.1909C118.315 22.5714 118.848 22.7616 119.476 22.7616C120.411 22.7616 121.062 22.3811 121.427 21.6201H125.415C125.211 22.3952 124.838 23.0928 124.298 23.7129C123.772 24.3329 123.107 24.8192 122.303 25.1715C121.5 25.5238 120.601 25.6999 119.608 25.6999C118.41 25.6999 117.343 25.4533 116.408 24.9601C115.473 24.4668 114.743 23.7622 114.217 22.8462C113.691 21.9302 113.428 20.8591 113.428 19.633C113.428 18.407 113.683 17.336 114.195 16.4199C114.721 15.5039 115.451 14.7993 116.386 14.306C117.321 13.8128 118.395 13.5662 119.608 13.5662C120.791 13.5662 121.843 13.8057 122.764 14.2849C123.684 14.7641 124.4 15.4475 124.911 16.3354C125.437 17.2232 125.7 18.259 125.7 19.4428ZM121.865 18.4915C121.865 17.8715 121.646 17.3782 121.208 17.0118C120.769 16.6454 120.221 16.4622 119.564 16.4622C118.936 16.4622 118.402 16.6384 117.964 16.9907C117.54 17.343 117.277 17.8433 117.175 18.4915H121.865Z"
        fill="#04111D"
      />
      <path
        d="M126.932 19.6119C126.932 18.4 127.166 17.336 127.633 16.4199C128.115 15.5039 128.765 14.7993 129.583 14.306C130.402 13.8128 131.315 13.5662 132.323 13.5662C133.185 13.5662 133.937 13.7353 134.58 14.0735C135.238 14.4117 135.742 14.8557 136.092 15.4053V13.7353H139.84V25.5308H136.092V23.8608C135.727 24.4104 135.216 24.8544 134.558 25.1926C133.915 25.5308 133.163 25.6999 132.301 25.6999C131.307 25.6999 130.402 25.4533 129.583 24.9601C128.765 24.4527 128.115 23.7411 127.633 22.825C127.166 21.8949 126.932 20.8239 126.932 19.6119ZM136.092 19.633C136.092 18.7311 135.829 18.0194 135.303 17.498C134.792 16.9766 134.164 16.7159 133.419 16.7159C132.673 16.7159 132.038 16.9766 131.512 17.498C131.001 18.0054 130.745 18.71 130.745 19.6119C130.745 20.5138 131.001 21.2326 131.512 21.7681C132.038 22.2895 132.673 22.5502 133.419 22.5502C134.164 22.5502 134.792 22.2895 135.303 21.7681C135.829 21.2467 136.092 20.535 136.092 19.633Z"
        fill="#04111D"
      />
    </svg>
  );
}

function RaribleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="114"
      height="32"
      viewBox="0 0 114 32"
      fill="none"
    >
      <g clipPath="url(#clip0_858_4579)">
        <path
          d="M0 7.01754C0 3.14187 3.14187 0 7.01754 0H24.9825C28.8581 0 32 3.14187 32 7.01754V24.9825C32 28.8581 28.8581 32 24.9825 32H7.01754C3.14187 32 0 28.8581 0 24.9825V7.01754Z"
          fill="#FEDA03"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.1086 13.396C24.1086 14.9311 23.2118 15.6946 22.2039 15.9599C23.4102 16.3214 24.2832 17.31 24.2832 18.8772V21.7544H19.68V19.0219C19.68 18.186 19.1879 17.8484 18.3466 17.8484H12.8864V21.7544H8.2832V10.2456H19.2198C21.9657 10.2456 24.1086 10.8403 24.1086 13.396ZM12.8884 13.461H19.1114V13.4615C19.1207 13.4612 19.1301 13.461 19.1393 13.461C19.5673 13.461 19.9142 13.8123 19.9142 14.2456C19.9142 14.6789 19.5673 15.0302 19.1393 15.0302C19.1301 15.0302 19.1207 15.03 19.1114 15.0297V15.0302H12.8884V13.461Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M95.5839 18.4329C95.5839 21.7905 93.6378 24.1017 90.3358 24.1017C88.9801 24.1017 87.7337 23.5348 87.187 22.6627V23.9272H84.4316V8.49072H87.187V14.1595C87.8211 13.331 89.0019 12.7641 90.3796 12.7641C93.6378 12.7641 95.5839 15.0753 95.5839 18.4329ZM87.012 18.4329C87.012 20.4169 88.171 21.7251 89.9422 21.7251C91.6916 21.7251 92.8506 20.4169 92.8506 18.4329C92.8506 16.4488 91.6916 15.1407 89.9422 15.1407C88.171 15.1407 87.012 16.4488 87.012 18.4329Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5769 23.9271L53.2114 17.1029C54.7203 16.3615 55.6167 14.9008 55.6167 13.1783C55.6167 10.4311 53.6706 8.66504 50.6748 8.66504H43.3672L43.3891 23.9271H46.363V17.6697H50.1718L53.122 23.9271H56.5769ZM46.363 11.216H50.2156C51.7463 11.216 52.6209 11.9573 52.6209 13.1783C52.6209 14.3993 51.7463 15.1187 50.2156 15.1187H46.363V11.216Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.4869 12.9386H68.2421V23.9273H65.4869V22.6627C64.9402 23.5349 63.7157 24.1017 62.338 24.1017C59.0361 24.1017 57.0898 21.7906 57.0898 18.433C57.0898 15.0753 59.0361 12.7642 62.2942 12.7642C63.6719 12.7642 64.8526 13.331 65.4869 14.1596V12.9386ZM59.8233 18.433C59.8233 20.417 60.9822 21.7252 62.7315 21.7252C64.5029 21.7252 65.6618 20.417 65.6618 18.433C65.6618 16.4488 64.5029 15.1407 62.7315 15.1407C60.9822 15.1407 59.8233 16.4488 59.8233 18.433Z"
          fill="black"
        />
        <path
          d="M77.8442 12.9386L77.6693 15.5986C77.2758 15.4241 76.7509 15.337 76.2699 15.337C74.7173 15.337 73.3177 16.6233 73.3177 19.8937V23.9273H70.5625V12.9386H73.3177V14.9444C73.8644 13.7017 75.3076 12.7642 76.6415 12.7642C77.0352 12.7642 77.5162 12.8296 77.8442 12.9386Z"
          fill="black"
        />
        <path
          d="M82.1224 23.9272H79.3672V12.9385H82.1224V23.9272Z"
          fill="black"
        />
        <path
          d="M97.5957 23.9272H100.351V8.49072H97.5957V23.9272Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M113.327 18.0623C113.327 15.5113 111.512 12.7642 107.795 12.7642C104.143 12.7642 102.35 15.5768 102.35 18.433C102.35 21.2891 104.296 24.1017 107.948 24.1017C110.528 24.1017 112.452 22.8808 113.065 20.8095L110.484 20.1118C110.2 21.1802 109.282 21.7906 107.991 21.7906C106.417 21.7906 105.345 20.8095 105.105 19.1524H113.283C113.305 18.9344 113.327 18.4547 113.327 18.0623ZM105.171 17.1465C105.477 15.664 106.439 14.8572 107.795 14.8572C109.391 14.8572 110.244 15.8384 110.375 17.1465H105.171Z"
          fill="black"
        />
        <path
          d="M80.3516 8C79.6688 8 79.1152 8.5422 79.1152 9.21103V10.017C79.1152 10.6859 79.6688 11.2281 80.3516 11.2281H81.1503C81.8331 11.2281 82.3867 10.6859 82.3867 10.017V9.21103C82.3867 8.5422 81.8331 8 81.1503 8H80.3516Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_858_4579">
          <rect width="113.404" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CoinbaseLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="36"
      viewBox="0 0 112 36"
      fill="none"
    >
      <g clipPath="url(#clip0_858_4565)">
        <path
          d="M22.3975 12.132C18.3302 12.132 15.1522 15.2195 15.1522 19.3528C15.1522 23.4862 18.2499 26.5473 22.3975 26.5473C26.545 26.5473 29.6966 23.4333 29.6966 19.3264C29.6966 15.2459 26.5989 12.132 22.3975 12.132ZM22.4249 23.5685C20.1087 23.5685 18.4115 21.7697 18.4115 19.3539C18.4115 16.9107 20.0813 15.1128 22.3975 15.1128C24.7411 15.1128 26.4373 16.9381 26.4373 19.3539C26.4373 21.7697 24.7411 23.5685 22.4249 23.5685ZM30.5849 15.2734H32.6052V26.28H35.837V12.4003H30.5849V15.2734ZM7.01863 15.1118C8.71588 15.1118 10.0625 16.1586 10.5737 17.7156H13.9946C13.3747 14.3872 10.6276 12.132 7.04606 12.132C2.97878 12.132 -0.199219 15.2195 -0.199219 19.3539C-0.199219 23.4882 2.8985 26.5483 7.04606 26.5483C10.5473 26.5483 13.3482 24.2932 13.9682 20.9373H10.5737C10.0889 22.4943 8.74228 23.5685 7.04506 23.5685C4.70144 23.5685 3.05906 21.7697 3.05906 19.3539C3.06009 16.9107 4.67603 15.1118 7.01863 15.1118ZM91.9924 18.0113L89.6224 17.6627C88.4914 17.5022 87.6833 17.1261 87.6833 16.2399C87.6833 15.2734 88.7342 14.7906 90.1611 14.7906C91.7233 14.7906 92.7202 15.4614 92.9355 16.5621H96.0599C95.7092 13.7702 93.5546 12.133 90.2424 12.133C86.8214 12.133 84.5592 13.878 84.5592 16.3476C84.5592 18.7095 86.0408 20.0795 89.0299 20.5084L91.3999 20.857C92.5586 21.0176 93.2049 21.4749 93.2049 22.3337C93.2049 23.4344 92.0739 23.8907 90.5117 23.8907C88.5989 23.8907 87.5217 23.1122 87.3602 21.9312H84.182C84.4789 24.6427 86.6061 26.5483 90.4842 26.5483C94.013 26.5483 96.3555 24.9375 96.3555 22.1721C96.3555 19.7025 94.6592 18.4138 91.9924 18.0113ZM34.2211 6.68249C33.0361 6.68249 32.147 7.54128 32.147 8.72223C32.147 9.90318 33.0352 10.762 34.2211 10.762C35.4061 10.762 36.2955 9.90318 36.2955 8.72223C36.2955 7.54128 35.4061 6.68249 34.2211 6.68249ZM81.6505 17.1525C81.6505 14.1463 79.8192 12.133 75.9408 12.133C72.278 12.133 70.2311 13.9857 69.8267 16.8314H73.032C73.1936 15.7307 74.0555 14.8181 75.887 14.8181C77.5305 14.8181 78.3383 15.5427 78.3383 16.4289C78.3383 17.5835 76.8564 17.8782 75.0252 18.0662C72.5474 18.3345 69.477 19.1933 69.477 22.415C69.477 24.9121 71.3358 26.5219 74.2986 26.5219C76.6145 26.5219 78.0689 25.5554 78.7967 24.0248C78.9045 25.3938 79.928 26.28 81.3558 26.28H83.2411V23.4079H81.6514V17.1525H81.6505ZM78.4724 20.6426C78.4724 22.4953 76.8564 23.8642 74.8899 23.8642C73.6777 23.8642 72.6542 23.3541 72.6542 22.2808C72.6542 20.9119 74.2974 20.5358 75.8058 20.3753C77.2602 20.2411 78.068 19.9189 78.4724 19.301V20.6426ZM61.3161 12.132C59.5111 12.132 58.003 12.884 56.9258 14.1453V6.54834H53.6939V26.28H56.8717V24.4547C57.9489 25.7698 59.4849 26.5483 61.3161 26.5483C65.1942 26.5483 68.1305 23.4882 68.1305 19.3539C68.1305 15.2195 65.1405 12.132 61.3161 12.132ZM60.8314 23.5685C58.5152 23.5685 56.818 21.7697 56.818 19.3539C56.818 16.9381 58.5417 15.1128 60.8577 15.1128C63.2014 15.1128 64.8436 16.9117 64.8436 19.3539C64.8436 21.7697 63.1474 23.5685 60.8314 23.5685ZM45.9636 12.132C43.863 12.132 42.4889 12.9907 41.6811 14.1991V12.4003H38.4755V26.279H41.7074V18.736C41.7074 16.6149 43.0539 15.1118 45.047 15.1118C46.9058 15.1118 48.0633 16.4269 48.0633 18.3335V26.28H51.2952V18.0926C51.2964 14.6016 49.4924 12.132 45.9636 12.132ZM111.762 18.8976C111.762 14.9248 108.853 12.133 104.947 12.133C100.8 12.133 97.7561 15.247 97.7561 19.3539C97.7561 23.6762 101.015 26.5483 105.001 26.5483C108.368 26.5483 111.008 24.5615 111.68 21.7432H108.313C107.829 22.978 106.644 23.6762 105.054 23.6762C102.98 23.6762 101.418 22.3876 101.068 20.1324H111.761V18.8976H111.762ZM101.257 17.8233C101.77 15.8903 103.224 14.9512 104.894 14.9512C106.725 14.9512 108.125 15.998 108.449 17.8233H101.257Z"
          fill="#0052FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_858_4565">
          <rect width="112" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CodeSnippetDotSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <circle cx="5" cy="5" r="5" fill="#434446" />
      <circle cx="5" cy="5" r="5" fill="#434446" />
      <circle cx="5" cy="5" r="5" fill="#434446" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          "M7.1875 10C7.1875 10.1726 7.04759 10.3125 6.875 10.3125C6.70241 10.3125 6.5625 10.1726 6.5625 10C6.5625 9.82741 6.70241 9.6875 6.875 9.6875C7.04759 9.6875 7.1875 9.82741 7.1875 10ZM7.1875 10H6.875M10.3125 10C10.3125 10.1726 10.1726 10.3125 10 10.3125C9.82741 10.3125 9.6875 10.1726 9.6875 10C9.6875 9.82741 9.82741 9.6875 10 9.6875C10.1726 9.6875 10.3125 9.82741 10.3125 10ZM10.3125 10H10M13.4375 10C13.4375 10.1726 13.2976 10.3125 13.125 10.3125C12.9524 10.3125 12.8125 10.1726 12.8125 10C12.8125 9.82741 12.9524 9.6875 13.125 9.6875C13.2976 9.6875 13.4375 9.82741 13.4375 10ZM13.4375 10H13.125M17.5 10C17.5 13.797 14.1421 16.875 10 16.875C9.26044 16.875 8.54588 16.7769 7.87098 16.5941C7.05847 17.1649 6.06834 17.5 5 17.5C4.83398 17.5 4.6698 17.4919 4.50806 17.4761C4.375 17.4631 4.24316 17.4449 4.11316 17.4216C4.5161 16.9461 4.80231 16.3689 4.92824 15.734C5.00378 15.3531 4.81725 14.9832 4.53903 14.7124C3.27475 13.4818 2.5 11.8238 2.5 10C2.5 6.20304 5.85786 3.125 10 3.125C14.1421 3.125 17.5 6.20304 17.5 10Z"
        }
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          "M2.5 2.5H4.21296L4.55556 4.21296M5.92593 11.0648H14.4907L17.9167 4.21296H4.55556M5.92593 11.0648L4.55556 4.21296M5.92593 11.0648L3.96211 13.0286C3.42255 13.5682 3.80469 14.4907 4.56773 14.4907H14.4907M14.4907 14.4907C13.5447 14.4907 12.7778 15.2577 12.7778 16.2037C12.7778 17.1497 13.5447 17.9167 14.4907 17.9167C15.4368 17.9167 16.2037 17.1497 16.2037 16.2037C16.2037 15.2577 15.4368 14.4907 14.4907 14.4907ZM7.63889 16.2037C7.63889 17.1497 6.87197 17.9167 5.92593 17.9167C4.97988 17.9167 4.21296 17.1497 4.21296 16.2037C4.21296 15.2577 4.97988 14.4907 5.92593 14.4907C6.87197 14.4907 7.63889 15.2577 7.63889 16.2037Z"
        }
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          "M17.5 10C17.5 8.96447 16.6605 8.125 15.625 8.125H12.5C12.5 9.50571 11.3807 10.625 10 10.625C8.61929 10.625 7.5 9.50571 7.5 8.125H4.375C3.33947 8.125 2.5 8.96447 2.5 10M17.5 10V15C17.5 16.0355 16.6605 16.875 15.625 16.875H4.375C3.33947 16.875 2.5 16.0355 2.5 15V10M17.5 10V7.5M2.5 10V7.5M17.5 7.5C17.5 6.46447 16.6605 5.625 15.625 5.625H4.375C3.33947 5.625 2.5 6.46447 2.5 7.5M17.5 7.5V5C17.5 3.96447 16.6605 3.125 15.625 3.125H4.375C3.33947 3.125 2.5 3.96447 2.5 5V7.5"
        }
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MagnifyingGlassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.5C5.96243 3.5 3.5 5.96243 3.5 9C3.5 12.0376 5.96243 14.5 9 14.5C10.519 14.5 11.893 13.8852 12.8891 12.8891C13.8852 11.893 14.5 10.519 14.5 9C14.5 5.96243 12.0376 3.5 9 3.5ZM2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.6625 15.4197 12.1906 14.4517 13.3911L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L13.3911 14.4517C12.1906 15.4197 10.6625 16 9 16C5.13401 16 2 12.866 2 9Z"
        fill="#0F172A"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        className="block w-5 h-5 gt_mobile:hidden"
      >
        <path
          d="M14.25 6.875V5C14.25 3.96447 13.4105 3.125 12.375 3.125H5.5C4.46447 3.125 3.625 3.96447 3.625 5V11.875C3.625 12.9105 4.46447 13.75 5.5 13.75H7.375M14.25 6.875H15.5C16.5355 6.875 17.375 7.71447 17.375 8.75V15C17.375 16.0355 16.5355 16.875 15.5 16.875H9.25C8.21447 16.875 7.375 16.0355 7.375 15V13.75M14.25 6.875H9.25C8.21447 6.875 7.375 7.71447 7.375 8.75V13.75"
          stroke="#808080"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#808080"
        className="hidden w-6 h-6 transition hover:stroke-black gt_mobile:block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
        />
      </svg>
    </>
  );
}

type ShieldPositionAndAnimation = {
  className: string;
};

const WarningShieldOrangeOutline = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={props.className}
  >
    <path
      d="M12 9.00009V12.7501M12 2.71436C9.8495 4.75098 6.94563 6.00011 3.75 6.00011C3.69922 6.00011 3.64852 5.99979 3.59789 5.99916C3.2099 7.17927 3 8.4402 3 9.75015C3 15.3417 6.82432 20.04 12 21.3721C17.1757 20.04 21 15.3417 21 9.75015C21 8.4402 20.7901 7.17927 20.4021 5.99916C20.3515 5.99979 20.3008 6.00011 20.25 6.00011C17.0544 6.00011 14.1505 4.75098 12 2.71436ZM12 15.7501H12.0075V15.7576H12V15.7501Z"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningShieldRedOutline = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={props.className}
  >
    <path
      d="M12 9.00009V12.7501M12 2.71436C9.8495 4.75098 6.94563 6.00011 3.75 6.00011C3.69922 6.00011 3.64852 5.99979 3.59789 5.99916C3.2099 7.17927 3 8.4402 3 9.75015C3 15.3417 6.82432 20.04 12 21.3721C17.1757 20.04 21 15.3417 21 9.75015C21 8.4402 20.7901 7.17927 20.4021 5.99916C20.3515 5.99979 20.3008 6.00011 20.25 6.00011C17.0544 6.00011 14.1505 4.75098 12 2.71436ZM12 15.7501H12.0075V15.7576H12V15.7501Z"
      stroke="#DC2626"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckShieldOutline = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={props.className}
  >
    <path
      d="M9 12.7496L11.25 14.9996L15 9.7496M12 2.71387C9.8495 4.75049 6.94563 5.99962 3.75 5.99962C3.69922 5.99962 3.64852 5.9993 3.59789 5.99867C3.2099 7.17878 3 8.43971 3 9.74966C3 15.3412 6.82432 20.0395 12 21.3716C17.1757 20.0395 21 15.3412 21 9.74966C21 8.43971 20.7901 7.17878 20.4021 5.99867C20.3515 5.9993 20.3008 5.99962 20.25 5.99962C17.0544 5.99962 14.1505 4.75049 12 2.71387Z"
      stroke="#059669"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckShieldLarge = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="98"
    viewBox="0 0 98 98"
    fill="none"
    className={props.className}
  >
    <g clipPath="url(#clip0_1464_6717)">
      <g filter="url(#filter0_dd_1464_6717)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.9027 12.2567C49.8669 11.2758 48.245 11.2758 47.2092 12.2567C39.987 19.0964 30.242 23.2875 19.5122 23.2875C19.3415 23.2875 19.1711 23.2864 19.0008 23.2843C17.8285 23.2698 16.7823 24.0172 16.4161 25.131C14.9387 29.6244 14.1406 34.4229 14.1406 39.4024C14.1406 60.6811 28.6943 78.5539 48.3865 83.6223C48.8256 83.7353 49.2863 83.7353 49.7254 83.6223C69.4176 78.5539 83.9713 60.6811 83.9713 39.4024C83.9713 34.4229 83.1732 29.6244 81.6959 25.131C81.3297 24.0172 80.2834 23.2698 79.1111 23.2843C78.9409 23.2864 78.7704 23.2875 78.5997 23.2875C67.8699 23.2875 58.1249 19.0964 50.9027 12.2567Z"
          fill="#059669"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0523 19.2557C19.2058 19.2577 19.3595 19.2587 19.5136 19.2587C29.1725 19.2587 37.9366 15.4908 44.4403 9.3315C47.0298 6.87908 51.0848 6.87908 53.6743 9.3315C60.178 15.4908 68.9421 19.2587 78.601 19.2587C78.7551 19.2587 78.9088 19.2577 79.0623 19.2557L79.1124 23.2841C78.9423 23.2863 78.7717 23.2874 78.601 23.2874C67.8713 23.2874 58.1263 19.0963 50.904 12.2566C49.8683 11.2756 48.2463 11.2756 47.2105 12.2566C39.9883 19.0963 30.2433 23.2874 19.5136 23.2874C19.3429 23.2874 19.1725 23.2863 19.0022 23.2841C17.8298 23.2696 16.7836 24.0171 16.4174 25.1309C14.9401 29.6242 14.142 34.4228 14.142 39.4023C14.142 60.681 28.6956 78.5538 48.3879 83.6221C48.827 83.7352 49.2876 83.7352 49.7267 83.6221C69.419 78.5538 83.9726 60.681 83.9726 39.4023C83.9726 34.4228 83.1745 29.6242 81.6972 25.1309C81.331 24.0171 80.2848 23.2696 79.1124 23.2841L79.0623 19.2557C81.9931 19.2193 84.6089 21.0882 85.5243 23.8726C87.1335 28.7671 88.0013 33.99 88.0013 39.4023C88.0013 62.5642 72.1594 82.0084 50.731 87.5237C49.6331 87.8063 48.4815 87.8063 47.3836 87.5237C25.9552 82.0084 10.1133 62.5642 10.1133 39.4023C10.1133 33.99 10.9811 28.7671 12.5903 23.8726C13.5057 21.0882 16.1215 19.2193 19.0523 19.2557ZM46.0288 54.0613L57.6149 37.8406C58.4771 36.6336 60.1545 36.354 61.3616 37.2162C62.5686 38.0784 62.8482 39.7559 61.986 40.9628L48.5571 59.7634C48.0982 60.4058 47.3799 60.8138 46.5931 60.879C45.8063 60.9441 45.0306 60.6597 44.4724 60.1014L36.415 52.044C35.3661 50.9952 35.3661 49.2946 36.415 48.2458C37.4638 47.1968 39.1644 47.1968 40.2132 48.2458L46.0288 54.0613Z"
          fill="white"
        />
        <path
          d="M61.9847 40.963C62.8468 39.756 62.5672 38.0786 61.3603 37.2163C60.1531 36.3541 58.4757 36.6337 57.6136 37.8407L46.0275 54.0614L40.2119 48.2459C39.1631 47.197 37.4625 47.197 36.4137 48.2459C35.3647 49.2947 35.3647 50.9953 36.4137 52.0441L44.471 60.1015C45.0293 60.6598 45.8049 60.9442 46.5917 60.8791C47.3785 60.8139 48.0969 60.406 48.5557 59.7635L61.9847 40.963Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_1464_6717"
        x="3.89508"
        y="5.41945"
        width="90.3251"
        height="92.68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.07273" />
        <feGaussianBlur stdDeviation="2.07273" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1464_6717"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.14547" />
        <feGaussianBlur stdDeviation="3.1091" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1464_6717"
          result="effect2_dropShadow_1464_6717"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1464_6717"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1464_6717">
        <rect width="98" height="98" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WarningShieldLarge = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="98"
    viewBox="0 0 98 98"
    fill="none"
    className={props.className}
  >
    <g clipPath="url(#clip0_1464_6732)">
      <g filter="url(#filter0_dd_1464_6732)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.9027 12.2567C49.8669 11.2758 48.245 11.2758 47.2092 12.2567C39.987 19.0964 30.242 23.2875 19.5122 23.2875C19.3415 23.2875 19.1711 23.2864 19.0008 23.2843C17.8285 23.2698 16.7823 24.0172 16.4161 25.131C14.9387 29.6244 14.1406 34.4229 14.1406 39.4024C14.1406 60.6811 28.6943 78.5539 48.3865 83.6223C48.8256 83.7353 49.2863 83.7353 49.7254 83.6223C69.4176 78.5539 83.9713 60.6811 83.9713 39.4024C83.9713 34.4229 83.1732 29.6244 81.6959 25.131C81.3297 24.0172 80.2834 23.2698 79.1111 23.2843C78.9409 23.2864 78.7704 23.2875 78.5997 23.2875C67.8699 23.2875 58.1249 19.0964 50.9027 12.2567Z"
          fill="#F59E0B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.9734 34.2446C50.4592 34.2446 51.6635 35.449 51.6635 36.9348V50.3856C51.6635 51.8713 50.4592 53.0758 48.9734 53.0758C47.4876 53.0758 46.2832 51.8713 46.2832 50.3856V36.9348C46.2832 35.449 47.4876 34.2446 48.9734 34.2446ZM48.9734 58.4561C47.4876 58.4561 46.2832 59.6605 46.2832 61.1463V61.1732C46.2832 62.6589 47.4876 63.8634 48.9734 63.8634H49.0003C50.4861 63.8634 51.6904 62.6589 51.6904 61.1732V61.1463C51.6904 59.6605 50.4861 58.4561 49.0003 58.4561H48.9734Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0523 19.2557C19.2058 19.2577 19.3595 19.2587 19.5136 19.2587C29.1725 19.2587 37.9366 15.4908 44.4403 9.3315C47.0298 6.87908 51.0848 6.87908 53.6743 9.3315C60.178 15.4908 68.9421 19.2587 78.601 19.2587C78.7551 19.2587 78.9088 19.2577 79.0623 19.2557L79.1124 23.2841C78.9423 23.2863 78.7717 23.2874 78.601 23.2874C67.8713 23.2874 58.1263 19.0963 50.904 12.2566C49.8683 11.2756 48.2463 11.2756 47.2105 12.2566C39.9883 19.0963 30.2433 23.2874 19.5136 23.2874C19.3429 23.2874 19.1725 23.2863 19.0022 23.2841C17.8298 23.2696 16.7836 24.0171 16.4174 25.1309C14.9401 29.6242 14.142 34.4228 14.142 39.4023C14.142 60.681 28.6956 78.5538 48.3879 83.6221C48.827 83.7352 49.2876 83.7352 49.7267 83.6221C69.419 78.5538 83.9726 60.681 83.9726 39.4023C83.9726 34.4228 83.1745 29.6242 81.6972 25.1309C81.331 24.0171 80.2848 23.2696 79.1124 23.2841L79.0623 19.2557C81.9931 19.2193 84.6089 21.0882 85.5243 23.8726C87.1335 28.7671 88.0013 33.99 88.0013 39.4023C88.0013 62.5642 72.1594 82.0084 50.731 87.5237C49.6331 87.8063 48.4815 87.8063 47.3836 87.5237C25.9552 82.0084 10.1133 62.5642 10.1133 39.4023C10.1133 33.99 10.9811 28.7671 12.5903 23.8726C13.5057 21.0882 16.1215 19.2193 19.0523 19.2557Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_1464_6732"
        x="3.89508"
        y="5.41945"
        width="90.3251"
        height="92.68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.07273" />
        <feGaussianBlur stdDeviation="2.07273" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1464_6732"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.14547" />
        <feGaussianBlur stdDeviation="3.1091" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1464_6732"
          result="effect2_dropShadow_1464_6732"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1464_6732"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1464_6732">
        <rect width="98" height="98" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ErrorShieldLarge = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="98"
    viewBox="0 0 98 98"
    fill="none"
    className={props.className}
  >
    <g clipPath="url(#clip0_1464_6794)">
      <g filter="url(#filter0_dd_1464_6794)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.9008 12.2567C49.865 11.2758 48.243 11.2758 47.2073 12.2567C39.985 19.0964 30.24 23.2875 19.5103 23.2875C19.3396 23.2875 19.1692 23.2864 18.9989 23.2843C17.8265 23.2698 16.7803 24.0172 16.4141 25.131C14.9368 29.6244 14.1387 34.4229 14.1387 39.4024C14.1387 60.6811 28.6923 78.5539 48.3846 83.6223C48.8237 83.7353 49.2843 83.7353 49.7234 83.6223C69.4157 78.5539 83.9693 60.6811 83.9693 39.4024C83.9693 34.4229 83.1712 29.6244 81.6939 25.131C81.3277 24.0172 80.2815 23.2698 79.1091 23.2843C78.939 23.2864 78.7684 23.2875 78.5977 23.2875C67.868 23.2875 58.123 19.0964 50.9008 12.2567Z"
          fill="#DC2626"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.6365 37.4592C41.6902 36.513 40.156 36.513 39.2097 37.4592C38.2634 38.4054 38.2634 39.9397 39.2097 40.8859L45.5732 47.2495L39.2097 53.613C38.2634 54.5593 38.2634 56.0935 39.2097 57.0399C40.156 57.9861 41.6902 57.9861 42.6365 57.0399L49 50.6762L55.3635 57.0399C56.3098 57.9861 57.844 57.9861 58.7903 57.0399C59.7366 56.0935 59.7366 54.5593 58.7903 53.613L52.4267 47.2495L58.7903 40.8859C59.7366 39.9397 59.7366 38.4054 58.7903 37.4592C57.844 36.513 56.3098 36.513 55.3635 37.4592L49 43.8228L42.6365 37.4592Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0523 19.2552C19.2058 19.2572 19.3595 19.2582 19.5136 19.2582C29.1725 19.2582 37.9366 15.4903 44.4403 9.33101C47.0298 6.8786 51.0848 6.8786 53.6743 9.33101C60.178 15.4903 68.9421 19.2582 78.601 19.2582C78.7551 19.2582 78.9088 19.2572 79.0623 19.2552L79.1124 23.2837C78.9423 23.2858 78.7717 23.2869 78.601 23.2869C67.8713 23.2869 58.1263 19.0958 50.904 12.2561C49.8683 11.2751 48.2463 11.2751 47.2105 12.2561C39.9883 19.0958 30.2433 23.2869 19.5136 23.2869C19.3429 23.2869 19.1725 23.2858 19.0022 23.2837C17.8298 23.2692 16.7836 24.0166 16.4174 25.1304C14.9401 29.6237 14.142 34.4223 14.142 39.4018C14.142 60.6805 28.6956 78.5533 48.3879 83.6216C48.827 83.7347 49.2876 83.7347 49.7267 83.6216C69.419 78.5533 83.9726 60.6805 83.9726 39.4018C83.9726 34.4223 83.1745 29.6237 81.6972 25.1304C81.331 24.0166 80.2848 23.2692 79.1124 23.2837L79.0623 19.2552C81.9931 19.2188 84.6089 21.0878 85.5243 23.8721C87.1335 28.7666 88.0013 33.9895 88.0013 39.4018C88.0013 62.5637 72.1594 82.0079 50.731 87.5232C49.6331 87.8058 48.4815 87.8058 47.3836 87.5232C25.9552 82.0079 10.1133 62.5637 10.1133 39.4018C10.1133 33.9895 10.9811 28.7666 12.5903 23.8721C13.5057 21.0878 16.1215 19.2188 19.0523 19.2552Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_1464_6794"
        x="3.89508"
        y="5.41897"
        width="90.3251"
        height="92.68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.07273" />
        <feGaussianBlur stdDeviation="2.07273" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1464_6794"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4.14546" />
        <feGaussianBlur stdDeviation="3.1091" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1464_6794"
          result="effect2_dropShadow_1464_6794"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1464_6794"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1464_6794">
        <rect width="98" height="98" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WarningShieldSmall = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    className={props.className}
  >
    <g clipPath="url(#clip0_1464_6765)">
      <g filter="url(#filter0_dd_1464_6765)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.087 7.00391C28.4951 6.44336 27.5683 6.44336 26.9764 7.00391C22.8494 10.9123 17.2808 13.3072 11.1496 13.3072C11.052 13.3072 10.9546 13.3066 10.8573 13.3054C10.1874 13.2971 9.58959 13.7242 9.38034 14.3607C8.53615 16.9283 8.08008 19.6703 8.08008 22.5157C8.08008 34.675 16.3964 44.888 27.6492 47.7842C27.9001 47.8488 28.1633 47.8488 28.4142 47.7842C39.6669 44.888 47.9833 34.675 47.9833 22.5157C47.9833 19.6703 47.5273 16.9283 46.6831 14.3607C46.4738 13.7242 45.876 13.2971 45.206 13.3054C45.1088 13.3066 45.0114 13.3072 44.9138 13.3072C38.7825 13.3072 33.214 10.9123 29.087 7.00391Z"
          fill="#F59E0B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.9845 19.5684C28.8335 19.5684 29.5217 20.2566 29.5217 21.1056V28.7918C29.5217 29.6407 28.8335 30.329 27.9845 30.329C27.1355 30.329 26.4473 29.6407 26.4473 28.7918V21.1056C26.4473 20.2566 27.1355 19.5684 27.9845 19.5684ZM27.9845 33.4035C27.1355 33.4035 26.4473 34.0917 26.4473 34.9408V34.9561C26.4473 35.8051 27.1355 36.4934 27.9845 36.4934H27.9999C28.8489 36.4934 29.5371 35.8051 29.5371 34.9561V34.9408C29.5371 34.0917 28.8489 33.4035 27.9999 33.4035H27.9845Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8873 11.0033C10.975 11.0044 11.0629 11.005 11.1509 11.005C16.6703 11.005 21.6784 8.85186 25.3947 5.33228C26.8744 3.93091 29.1916 3.93091 30.6713 5.33228C34.3877 8.85186 39.3958 11.005 44.9152 11.005C45.0032 11.005 45.091 11.0044 45.1787 11.0033L45.2074 13.3052C45.1101 13.3065 45.0127 13.3071 44.9152 13.3071C38.7839 13.3071 33.2153 10.9122 29.0883 7.00377C28.4964 6.44322 27.5696 6.44322 26.9777 7.00377C22.8507 10.9122 17.2822 13.3071 11.1509 13.3071C11.0534 13.3071 10.956 13.3065 10.8587 13.3052C10.1888 13.2969 9.59091 13.7241 9.38167 14.3605C8.53748 16.9281 8.08141 19.6702 8.08141 22.5156C8.08141 34.6749 16.3978 44.8879 27.6505 47.7841C27.9014 47.8487 28.1646 47.8487 28.4156 47.7841C39.6683 44.8879 47.9846 34.6749 47.9846 22.5156C47.9846 19.6702 47.5286 16.9281 46.6844 14.3605C46.4751 13.7241 45.8773 13.2969 45.2074 13.3052L45.1787 11.0033C46.8535 10.9825 48.3482 12.0504 48.8713 13.6415C49.7909 16.4383 50.2867 19.4229 50.2867 22.5156C50.2867 35.7509 41.2342 46.8619 28.9894 50.0135C28.3621 50.175 27.704 50.175 27.0766 50.0135C14.8318 46.8619 5.7793 35.7509 5.7793 22.5156C5.7793 19.4229 6.27519 16.4383 7.19473 13.6415C7.71784 12.0504 9.21255 10.9825 10.8873 11.0033Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_1464_6765"
        x="2.22604"
        y="3.09683"
        width="51.6143"
        height="52.96"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.18442" />
        <feGaussianBlur stdDeviation="1.18442" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1464_6765"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.36884" />
        <feGaussianBlur stdDeviation="1.77663" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1464_6765"
          result="effect2_dropShadow_1464_6765"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1464_6765"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1464_6765">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ErrorShieldSmall = (props: ShieldPositionAndAnimation) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    className={props.className}
  >
    <g clipPath="url(#clip0_1464_6782)">
      <g filter="url(#filter0_dd_1464_6782)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.087 7.00391C28.4951 6.44336 27.5683 6.44336 26.9764 7.00391C22.8494 10.9123 17.2808 13.3072 11.1496 13.3072C11.052 13.3072 10.9546 13.3066 10.8573 13.3054C10.1874 13.2971 9.58959 13.7242 9.38034 14.3607C8.53615 16.9283 8.08008 19.6703 8.08008 22.5157C8.08008 34.675 16.3964 44.888 27.6492 47.7842C27.9001 47.8488 28.1633 47.8488 28.4142 47.7842C39.6669 44.888 47.9833 34.675 47.9833 22.5157C47.9833 19.6703 47.5273 16.9283 46.6831 14.3607C46.4738 13.7242 45.876 13.2971 45.206 13.3054C45.1088 13.3066 45.0114 13.3072 44.9138 13.3072C38.7825 13.3072 33.214 10.9123 29.087 7.00391Z"
          fill="#DC2626"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.3637 21.4055C23.823 20.8648 22.9463 20.8648 22.4056 21.4055C21.8648 21.9462 21.8648 22.823 22.4056 23.3636L26.0418 27L22.4056 30.6363C21.8648 31.177 21.8648 32.0537 22.4056 32.5945C22.9463 33.1352 23.823 33.1352 24.3637 32.5945L28 28.9581L31.6363 32.5945C32.1771 33.1352 33.0537 33.1352 33.5945 32.5945C34.1352 32.0537 34.1352 31.177 33.5945 30.6363L29.9581 27L33.5945 23.3636C34.1352 22.823 34.1352 21.9462 33.5945 21.4055C33.0537 20.8648 32.1771 20.8648 31.6363 21.4055L28 25.0419L24.3637 21.4055Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8873 11.0033C10.975 11.0044 11.0629 11.005 11.1509 11.005C16.6703 11.005 21.6784 8.85186 25.3947 5.33228C26.8744 3.93091 29.1916 3.93091 30.6713 5.33228C34.3877 8.85186 39.3958 11.005 44.9152 11.005C45.0032 11.005 45.091 11.0044 45.1787 11.0033L45.2074 13.3052C45.1101 13.3065 45.0127 13.3071 44.9152 13.3071C38.7839 13.3071 33.2153 10.9122 29.0883 7.00377C28.4964 6.44322 27.5696 6.44322 26.9777 7.00377C22.8507 10.9122 17.2822 13.3071 11.1509 13.3071C11.0534 13.3071 10.956 13.3065 10.8587 13.3052C10.1888 13.2969 9.59091 13.7241 9.38167 14.3605C8.53748 16.9281 8.08141 19.6702 8.08141 22.5156C8.08141 34.6749 16.3978 44.8879 27.6505 47.7841C27.9014 47.8487 28.1646 47.8487 28.4156 47.7841C39.6683 44.8879 47.9846 34.6749 47.9846 22.5156C47.9846 19.6702 47.5286 16.9281 46.6844 14.3605C46.4751 13.7241 45.8773 13.2969 45.2074 13.3052L45.1787 11.0033C46.8535 10.9825 48.3482 12.0504 48.8713 13.6415C49.7909 16.4383 50.2867 19.4229 50.2867 22.5156C50.2867 35.7509 41.2342 46.8619 28.9894 50.0135C28.3621 50.175 27.704 50.175 27.0766 50.0135C14.8318 46.8619 5.7793 35.7509 5.7793 22.5156C5.7793 19.4229 6.27519 16.4383 7.19473 13.6415C7.71784 12.0504 9.21255 10.9825 10.8873 11.0033Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_1464_6782"
        x="2.22604"
        y="3.09683"
        width="51.6143"
        height="52.96"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.18442" />
        <feGaussianBlur stdDeviation="1.18442" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1464_6782"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2.36884" />
        <feGaussianBlur stdDeviation="1.77663" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1464_6782"
          result="effect2_dropShadow_1464_6782"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_1464_6782"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1464_6782">
        <rect width="56" height="56" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
