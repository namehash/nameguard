"use client";

import { Highlight, themes } from "prism-react-renderer";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import impersonation_attack_img from "../../public/assets/vitalik_impersonation_attack.png";
import fake_NFT_filter_img from "../../public/assets/fake_NFT_filter.png";
import surface_risks_img from "../../public/assets/surface_risks.png";
import dangerous_name_config_img from "../../public/assets/dangerous_name_configuration.png";
import autorenew_img from "../../public/assets/autorenew.png";
import ens_webfont_img from "../../public/assets/ens_webfont.png";
import ens_completion_score_img from "../../public/assets/completion_score.png";
import the_unknown_img from "../../public/assets/making_the_unknown.png";
import explore_ecosystem_img from "../../public/assets/ecosystem_scheme.png";
import { Tooltip, Search } from "@namehash/nameguard-react";
import cc from "classcat";
import { CalButton } from "@/app/atoms/CalButton";
import { PushLogo } from "@/app/atoms/icons/PushLogo";
import { WalletConnectLogo } from "@/app/atoms/icons/WalletConnectLogo";
import { IntegrationIcon } from "@/app/atoms/icons/IntegrationIcon";
import { QuestionmarkCircle } from "@/app/atoms/icons/QuestionmarkCircle";
import { CheckShieldGrayOutline } from "@/app/atoms/icons/CheckShieldGrayOutline";
import { CheckCircleGreen } from "@/app/atoms/icons/CheckCircleGreen";
import { RoadmapPositiveShield } from "@/app/atoms/icons/RoadmapPositiveShield";
import { RoadmapWarningShield } from "@/app/atoms/icons/RoadmapWarningShield";
import { RoadmapNegativeShield } from "@/app/atoms/icons/RoadmapNegativeShield";
import { MessageIcon } from "@/app/atoms/icons/MessageIcon";
import { XMTPLogo } from "@/app/atoms/icons/XMTPLogo";
import { LensProtocolLogo } from "@/app/atoms/icons/LensProtocolLogo";
import { ShoppingCartIcon } from "@/app/atoms/icons/ShoppingCartIcon";
import { FarcasterLogo } from "@/app/atoms/icons/FarcasterLogo";
import { OpenSeaLogo } from "@/app/atoms/icons/OpenSeaLogo";
import { RaribleLogo } from "@/app/atoms/icons/RaribleLogo";
import { CoinbaseLogo } from "@/app/atoms/icons/CoinbaseLogo";
import { WalletIcon } from "@/app/atoms/icons/WalletIcon";
import { CopyIcon } from "@/app/atoms/icons/CopyIcon";
import { GithubIconSmall } from "@/app/atoms/icons/GithubIconSmall";
import { GithubIconDevelopers } from "@/app/atoms/icons/GithubIconDevelopers";
import { RedirectIcon } from "@/app/atoms/icons/RedirectIcon";
import { FigmaIcon } from "@/app/atoms/icons/FigmaIcon";
import { CloudOutlineIcon } from "@/app/atoms/icons/CloudOutlineIcon";
import { GearWheelIcon } from "@/app/atoms/icons/GearWheelIcon";
import { FileIcon } from "@/app/atoms/icons/FileIcon";
import { FontIcon } from "@/app/atoms/icons/FontIcon";

const getSecurePrimaryName = `import { nameguard } from "@namehash/nameguard";

const address = "0x8Ae0e6dd8eACe27045d9e017C8Cf6dAa9D08C776";
const result = await nameguard.getSecurePrimaryName(address);`;

const fakeEthNameCheck = `import { nameguard } from "@namehash/nameguard";

const contract = "0x8Ae0e6dd8eACe27045d9e017C8Cf6dAa9D08C776";
const tokenId = "619959211285214429591066501314626337448852696
                 24153038309795231243542768648193";

const result = await nameguard.fakeEthNameCheck(contract, tokenId);`;

const bulkInspectNames = `import { nameguard } from "@namehash/nameguard";

const name = "abc123🚀.eth";
const result = await nameguard.inspectName(name);

const names = ["abc.eth", "123.eth", "xyz.eth"];
const results = await nameguard.bulkInspectNames(names);`;

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative">
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
          sectionDescription={
            <Fragment>
              Inbound messages from deceptive look-alike names can exploit
              trusted relationships. NameGuard&apos;s homograph and canonical
              name algorithms help you handle higher-risk messages.
            </Fragment>
          }
          sectionBackgroundName="bg-green_background"
          isCodeOnTheLeft={false}
          codeSnippet={getSecurePrimaryName}
          integrationsPanel={
            <div className="hidden gt_mobile:inline-flex flex-col items-start justify-center gap-4 z-10">
              <p className="text-gray-500 text-lg leading-6 font-normal not-italic whitespace-nowrap">
                Composable integrations include
              </p>
              <div className="w-full h-fit flex flex-row justify-start items-center gap-6">
                <XMTPLogo />
                <LensProtocolLogo />
                <FarcasterLogo />
                <PushLogo />
                <WalletConnectLogo />
              </div>
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
          sectionDescription={
            <Fragment>
              Just because a NFT names itself &quot;nick.eth&quot; doesn&apos;t
              mean it&apos;s an ENS name. NameGuard makes it easy to stop{" "}
              <a
                className="text-black underline gt_mobile:underline-offset-[4px] gt_mobile:transition-all gt_mobile:duration-200 gt_mobile:hover:underline-offset-[2px]"
                href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/61995921128521442959106650131462633744885269624153038309795231243542768648193"
                target="_blank"
                rel="noopener noreferrer"
              >
                fake ENS NFTs
              </a>{" "}
              from being sold on NFT marketplaces. Let&apos;s put an end to
              these scams !
            </Fragment>
          }
          sectionBackgroundName={"bg-purple_background"}
          isCodeOnTheLeft={true}
          codeSnippet={fakeEthNameCheck}
          integrationsPanel={
            <div className="inline-flex items-center gap-6 z-10">
              <p className="text-gray-500 text-lg leading-6 font-normal not-italic whitespace-nowrap">
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
          sectionDescription={
            <Fragment>
              NameGuard offers a detailed 12 point-inspection on any ENS name,
              including NameWrapper fuses, offchain names, and DNS
              compatibility. Ensure no shocking disappointments after purchase.
            </Fragment>
          }
          sectionBackgroundName="bg-green_background"
          isCodeOnTheLeft={false}
          codeSnippet={bulkInspectNames}
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
          sectionDescription="Safeguard your community from improperly configured resolver records with ENS HealthChecks. These checks shield against major issues, spanning significant irreversible losses to web3 profiles that are incorrectly formatted and may not load properly."
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
              ENS AutoRenew
            </Fragment>
          }
          sectionDescription="In the hustle and bustle of life, ENS name renewals can slip through the cracks. Give your community peace of mind (and earn recurring revenue!) with ENS AutoRenew. What’s more, it also helps everyone save on gas fees, intelligently initiating renewal transactions at the most cost-effective moments. "
          sectionBackgroundName="bg-green_background_sm"
          isTextOnTheLeft={false}
          badgeText="Planned"
          imageSpecifics={{
            source: autorenew_img.src,
            tagWidth: 11600,
            tagHeight: 626,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={<Fragment>ENS webfont</Fragment>}
          sectionDescription="Unicode is a complex beast. Are you certain you are prepared to handle the display of all possible ENS names in your UI? ENS Webfont not only enhances security against homograph attacks but also expands rendering support for emojis and other unique graphemes."
          sectionBackgroundName="bg-purple_background_sm"
          isTextOnTheLeft={true}
          badgeText={"Planned"}
          imageSpecifics={{
            source: ens_webfont_img.src,
            tagWidth: 1440,
            tagHeight: 958,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={<Fragment>ENS profile completion score</Fragment>}
          sectionDescription="Boost social engagement and retention by encouraging your community to make the most of their ENS identity. Build gamified user journeys tailored to your app that incentivize users to boost their ENS profile completion score and join the ‘100% Club’."
          sectionBackgroundName="bg-green_background_sm"
          isTextOnTheLeft={false}
          badgeText={"Planned"}
          imageSpecifics={{
            source: ens_completion_score_img.src,
            tagWidth: 968,
            tagHeight: 738,
          }}
        />
        <MobileSectionDivider />
        <ComingSoonSection
          sectionTargetSvg={<WalletIcon />}
          sectionTargetClientMessage="For wallets and dApps"
          sectionHeader={<Fragment>Making the unknown, known</Fragment>}
          sectionDescription="Many ENS domains are known to technically exist as a node in ENS, however the actual names for these domains is currently unknown. The ENS Subgraph helps to resolve some of these, but NameGuard goes further to resolve unknown names with a more powerful solution that learns from the community across time."
          sectionBackgroundName="bg-purple_background_sm"
          isTextOnTheLeft={true}
          badgeText={"Planned"}
          imageSpecifics={{
            source: the_unknown_img.src,
            tagWidth: 1228,
            tagHeight: 814,
          }}
        />
        <MobileSectionDivider />
        <ChecksSection />
        <MobileSectionDivider />
        <DevelopersSection />
        <MobileSectionDivider />
      </div>
      <ExploreTheEcosystemSection />
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
  return (
    <div className="hidden gt_mobile:block bg-black rounded-xl pb-4 max-w-full h-fit bg-gradient-to-b from-figma-black to-black z-10">
      <div className="flex flex-col gap-2.5 px-2.5 py-3">
        <div className="flex justify-start gap-2">
          <div className="rounded-full w-3 h-3 bg-[#434446]"></div>
          <div className="rounded-full w-3 h-3 bg-[#434446]"></div>
          <div className="rounded-full w-3 h-3 bg-[#434446]"></div>
        </div>
      </div>
      <hr className="border-code-gray" />
      <div className="py-4 px-5 max-w-full">
        <Highlight
          theme={themes.oneDark}
          code={`${props.codeSnippet}`}
          language="typescript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} w-full overflow-x-auto pb-4`}
              // style={style}
            >
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
  sectionDescription: React.ReactNode;
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

          <p className="z-10 text-gray-500 text-center not-italic font-normal text-lg leading-7 gt_mobile:text-lg gt_mobile:leading-7 gt_mobile:font-light">
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
              <div className="hidden md:flex flex-col w-full h-full justify-between lg:items-start items-center gap-7 max-w-3xl">
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
          {props.sectionHeader}&nbsp;{" "}
          <span className="hidden gt_mobile:relative gt_mobile:-top-1 gt_mobile:inline-flex items-center justify-center rounded-xl bg-green-100 px-3 py-0.5 text-center text-green-800 font-medium not-italic text-sm leading-5">
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
            Guard your users from heartbreak and keep ENS usage safe across web3
          </p>
          <div className="flex search_bar_change:flex items-center gap-2 py-[9px] pl-4 pr-[14px] rounded-lg bg-black bg-opacity-5 border border-gray-300 gt_mobile:gap-3 gt_mobile:py-[13px] gt_mobile:pl-[20px] gt_mobile:pr-[16px]">
            <p className="text-black leading-6 font-normal text-sm gt_mobile:text-base">
              {npmCommand}
            </p>
            <Tooltip trigger={copyDiv}>
              {copiedToClipboard ? copiedText : copyText}
            </Tooltip>
          </div>
          <a
            href={"https://api.nameguard.io/docs"}
            className="flex search_bar_change:block"
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
    <section className="relative w-full h-full flex flex-col items-center justify-center py-5 px-5 gap-5 z-10 bg-white md:bg-transparent md:px-[112px] lg:pt-10 lg:pb-[45px] lg:flex-row lg:gap-10">
      <div className="m-auto flex items-center justify-center flex-col lg:flex-row w-full max-w-[1216px] gap-10">
        <div className="flex flex-col justify-center items-center h-full max-h-[334px] md:max-h-[315px] w-full max-w-3xl rounded-xl border border-gray-200 bg-generate_raport_background bg-no-repeat bg-top bg-[length:180%_200%] lg:bg-[length:100%_250%]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-6 py-[63px] px-5 box-border lg:py-[60px] lg:max-w-[508px] lg:w-full lg:px-10">
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
            <div className="flex flex-col h-fit w-full max-w-[295px] gt_mobile:max-w-full items-center justify-center gap-6">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-center text-black not-italic text-3xl leading-9 font-bold ">
                  Get in touch
                </h1>
                <p className="text-center text-gray-500 not-italic text-lg leading-7 font-normal gt_mobile:font-light lg:leading-8">
                  Keep your users safe with NameGuard, the choice of leading
                  web3 teams. Ready for seamless integration into your web3 app?
                  Our team is here to assist you.
                </p>
              </div>
              <CalButton className="max-h-12 flex justify-center items-center px-[25px] py-[13px] rounded-lg border border-gray-300 bg-white z-10 shadow-sm transition hover:bg-gray-100 cursor-pointer text-black not-italic font-medium text-base leading-6">
                Schedule a call
              </CalButton>
            </div>
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

type ListSectionElement = {
  header: React.ReactNode;
  text: React.ReactNode;
  icon: React.ReactNode;
  link?: string;
};

type ListBadgeProps = {
  text: string;
  width: number;
  height: number;
};

function ListSectionBadge(props: ListBadgeProps) {
  const badgeStyle = cc([
    `w-[${props.width}px]`,
    `h-[${props.height}px]`,
    "flex justify-center items-center flex-shrink-0 py-[2px] px-[10px] bg-green-100 rounded-[10px] text-center text-green-800 text-xs leading-4 font-medium",
  ]);
  return <span className={badgeStyle}>{props.text}</span>;
}

function ChecksSection() {
  const checkCircle = (
    <div className="w-12 h-12 flex justify-center items-center flex-shrink-0 p-[14px] bg-white rounded-[40px] border border-gray-200">
      <CheckCircleGreen />
    </div>
  );
  const questionmarkCircle = (
    <div className="w-12 h-12 flex justify-center items-center flex-shrink-0 p-[14px] bg-white rounded-[40px] border border-gray-200 border-dashed">
      <QuestionmarkCircle />
    </div>
  );

  const headerStyle =
    "self-stretch not-italic z-10 text-black text-left text-sm leading-6 font-semibold";

  const headerWrapperStyle = "flex flex-row items-center justify-start gap-2";

  const checkElements: ListSectionElement[] = [
    {
      header: <h3 className={headerStyle}>Potential Impersonation</h3>,
      text: (
        <Fragment>
          Protect from inbound messages that may appear to be from someone you
          trust.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Confusable Characters</h3>,
      text: (
        <Fragment>
          Identify character with a higher risk for visual confusion with other
          characters.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Cross-Device Font Support</h3>,
      text: (
        <Fragment>
          Detect if characters have limited support to be viewed on popular
          operating systems.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Invisible Characters</h3>,
      text: (
        <Fragment>
          Reveal any invisible characters that might otherwise be hiding in a
          name.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Typing Difficulty</h3>,
      text: (
        <Fragment>
          Offer usability suggestions for users picking a name to register.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Mixed Scripts</h3>,
      text: (
        <Fragment>
          Detect higher risk combinations of multiple scripts in a name.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>NameWrapper Compatibility</h3>,
      text: (
        <Fragment>
          Warn if the name being registered cannot be supported by the ENS Name
          Wrapper.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>ENSIP-15 Name Normalization</h3>,
      text: (
        <Fragment>
          Check if the name is normalized according to ENSIP-15.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>DNS Punycode Compatibility</h3>,
      text: (
        <Fragment>
          Warn during registration if a name will have DNS compatibility
          limitations.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Unknown Labels</h3>,
      text: (
        <Fragment>
          Identify if the name contains unknown labels (e.g. [0123abcd...].eth).
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>Name Ruggability</h3>
          <ListSectionBadge width={96} height={20} text="Coming soon" />
        </div>
      ),
      text: (
        <Fragment>
          Warn buyers on secondary markets if a name can potentially be taken
          away.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>NameWrapper Fuses</h3>
          <ListSectionBadge width={96} height={20} text="Coming soon" />
        </div>
      ),
      text: (
        <Fragment>
          Protect buyers on secondary markets from NameWrapper fuse
          configurations.
        </Fragment>
      ),
      icon: checkCircle,
    },
    {
      header: <h3 className={headerStyle}>Have a check suggestion?</h3>,
      text: (
        <Fragment>
          <a
            className="text-black underline gt_mobile:underline-offset-[4px] gt_mobile:transition-all gt_mobile:duration-200 gt_mobile:hover:underline-offset-[2px]"
            href="mailto:hello@namehashlabs.org"
          >
            Reach out to us
          </a>{" "}
          with your suggestions about which checks you want us to add
        </Fragment>
      ),
      icon: questionmarkCircle,
    },
  ];

  const cellStyle =
    "w-full h-full z-20 sm:w-[394px] box-border flex flex-row items-center justify-start bg-white p-5 gap-4 rounded-md border border-gray-200";
  const cellTextStyle =
    "self-stretch not-italic z-10 text-gray-500 text-left text-sm leading-6 font-normal";

  return (
    <section className="relative z-10 w-full h-full box-border flex flex-col py-10 px-5 items-center justify-center self-stretch gap-[32px] md:pt-[100px] md:pb-[48px] md:gap-0">
      <div className="flex flex-col justify-center items-center gap-5 max-w-[608px]">
        <div className="inline-flex px-4 py-2 bg-black bg-opacity-5 rounded-3xl gap-2 justify-center items-center z-10">
          <CheckShieldGrayOutline />
          <span className="text-black text-center text-sm leading-5 not-italic font-medium z-10">
            Advanced inspections
          </span>
        </div>
        <h1 className="text-black text-center not-italic z-10 text-2xl leading-8 font-bold md:text-4xl md:leading-10">
          Checks NameGuard Performs
        </h1>
        <p className="text-center not-italic text-gray-500 text-lg leading-7 font-normal gt_mobile:font-light">
          Elevate your security standards. Get next-level protection with a
          rigorous 12-Point inspection on ENS names, meticulously scrutinizing
          each label and grapheme for enhanced safety.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4 py-10 w-full">
        <div
          className="w-full h-full absolute top-0 left-0"
          style={{
            background:
              "radial-gradient(44.37% 50% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(180deg, #FDC46A 0%, #2ED3C6 32.29%, #6DFFB7 70.83%, #6DFFB7 95.83%)",
            opacity: "0.1",
          }}
        />
        <div className="max-w-[1820px] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {checkElements.map((elem, idx) => {
            return (
              idx < checkElements.length - 1 && (
                <div key={`NameGuardCheck#${idx}`} className={cellStyle}>
                  {elem.icon}
                  <div>
                    {elem.header}
                    <p className={cellTextStyle}>{elem.text}</p>
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div key={`NameGuardCheck#questionmark`} className={cellStyle}>
          {checkElements[checkElements.length - 1].icon}
          <div>
            {checkElements[checkElements.length - 1].header}
            <p className={cellTextStyle}>
              {checkElements[checkElements.length - 1].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopersSection() {
  const iconWrapperStyle =
    "w-11 h-11 p-[10px] flex justify-center items-center flex-shrink-0 bg-black rounded-lg";
  const cellStyle =
    "group w-full md:w-[602px] h-full max-w-[602px] box-border flex flex-row items-start justify-start bg-white p-5 gap-4 rounded-xl border border-gray-200";
  const cellTextStyle =
    "self-stretch not-italic z-10 text-gray-500 text-left text-sm leading-6 font-normal";
  const headerStyle =
    "self-stretch not-italic z-10 text-black text-left text-sm leading-6 font-semibold whitespace-nowrap";
  const headerWrapperStyle =
    "flex flex-row items-center justify-start gap-x-2 gap-y-1 flex-wrap";
  const redirectStyle =
    "hidden gt_mobile:group-hover:block absolute z-10 top-[18px] right-[18px]";
  const hoverCellStyle = cc([
    cellStyle,
    "gt_mobile:hover:cursor-pointer gt_mobile:hover:border-gray-300 gt_mobile:hover:shadow-sm transition relative",
  ]);

  const devElements: ListSectionElement[] = [
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>NameGuard library</h3>
        </div>
      ),
      text: <Fragment>Security &quot;x-ray&quot; for ENS names.</Fragment>,
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/tree/main/api",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>NameGuard Client SDK</h3>
        </div>
      ),
      text: (
        <Fragment>Thin client SDK for making API calls to NameGuard.</Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/tree/main/packages/sdk",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>NameGuard React UI Kit</h3>
          <ListSectionBadge width={53} height={20} text="Alpha" />
        </div>
      ),
      text: (
        <Fragment>
          React components for building nice interfaces with NameGuard data.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/tree/main/packages/nameguard-react",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>Figma UI kit</h3>
        </div>
      ),
      text: (
        <Fragment>
          Customize NameKit user interfaces to match your unique app.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <FigmaIcon />
        </div>
      ),
      link: "https://www.figma.com/file/aVlWccl7J2MyP8IE56lDMb/NameGuard-UI-Kit---23-11-2023",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>ENS Label Inspector</h3>
        </div>
      ),
      text: <Fragment>Detailed inspection of labels in ENS names.</Fragment>,
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/ens-label-inspector",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>ENS Font Data</h3>
        </div>
      ),
      text: (
        <Fragment>
          Metadata for graphemes that may appear in ENS names.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/ens-font-data",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>ENS Normalize Python</h3>
        </div>
      ),
      text: (
        <Fragment>
          Python implementation of the ENS name normalization standard.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/ens-normalize-python",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>ENS Name Parser</h3>
          <ListSectionBadge width={53} height={20} text="Alpha" />
        </div>
      ),
      text: (
        <Fragment>Utilities for parsing ENS names from user input.</Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GithubIconDevelopers />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/tree/main/packages/nameparser",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>Open public API</h3>
        </div>
      ),
      text: (
        <Fragment>
          Connect to the NameGuard instance running in AWS for community use.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <CloudOutlineIcon />
        </div>
      ),
      link: "https://api.nameguard.io/docs",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>NameGuard DevOps Scripts</h3>
        </div>
      ),
      text: (
        <Fragment>
          Easily deploy your own instance of NameGuard into your own AWS cloud.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <GearWheelIcon />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/blob/main/api/serverless.yml",
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>Detailed documentation</h3>
          <ListSectionBadge width={96} height={20} text="Coming soon" />
        </div>
      ),
      text: (
        <Fragment>
          Step-by-step guides to help developers make the most of NameGuard.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <FileIcon />
        </div>
      ),
    },
    {
      header: (
        <div className={headerWrapperStyle}>
          <h3 className={headerStyle}>ENS Webfont</h3>
          <ListSectionBadge width={96} height={20} text="Alpha" />
        </div>
      ),
      text: (
        <Fragment>
          Increase rendering support for emojis and other special graphemes.
        </Fragment>
      ),
      icon: (
        <div className={iconWrapperStyle}>
          <FontIcon />
        </div>
      ),
      link: "https://github.com/namehash/nameguard/pull/139",
    },
  ];

  return (
    <section className="relative z-10 w-full h-full box-border flex flex-col py-10 px-5 items-center justify-center self-stretch gap-[32px]">
      <div className="flex flex-col justify-center items-center gap-5 max-w-[608px]">
        <div className="inline-flex px-4 py-2 bg-black bg-opacity-5 rounded-3xl gap-2 justify-center items-center z-10">
          <GithubIconSmall />
          <span className="text-black text-center text-sm leading-5 not-italic font-medium z-10">
            Developer resources
          </span>
        </div>
        <h1 className="text-black text-center not-italic z-10 text-2xl leading-8 font-bold md:text-4xl md:leading-10">
          NameGuard 🤝 Developers
        </h1>
        <p className="text-center not-italic text-gray-500 text-lg leading-7 font-normal gt_mobile:font-light">
          All resources are open sourced and freely licensed for the community.
        </p>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap max-w-[1840px] items-center justify-center content-between gap-4">
        {devElements.map((elem, idx) => {
          return elem.link == undefined ? (
            <div key={`NameGuardCheck#${idx}`} className={cellStyle}>
              {elem.icon}
              <div>
                {elem.header}
                <p className={cellTextStyle}>{elem.text}</p>
              </div>
            </div>
          ) : (
            <a
              key={`NameGuardCheck#${idx}`}
              href={elem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-fit h-fit"
            >
              <div className={hoverCellStyle}>
                <RedirectIcon svgStyle={redirectStyle} />
                {elem.icon}
                <div>
                  {elem.header}
                  <p className={cellTextStyle}>{elem.text}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ExploreTheEcosystemSection() {
  return (
    <section className="relative z-10 hidden search_bar_change:flex flex-col justify-end items-center gap-[60px] pt-[100px] pb-20 bg-gray-50 box-border">
      <div className="flex flex-col items-center max-w-[1216px] gap-[60px]">
        <div className="flex flex-col justify-center items-center gap-5 max-w-[608px]">
          <div className="inline-flex px-4 py-2 bg-black bg-opacity-5 rounded-3xl gap-2 justify-center items-center z-10">
            <IntegrationIcon />
            <span className="text-black text-center text-sm leading-5 not-italic font-medium z-10">
              Architecture Overview
            </span>
          </div>
          <h1 className="text-black text-center not-italic z-10 text-2xl leading-8 font-bold md:text-4xl md:leading-10">
            Explore the NameGuard ecosystem
          </h1>
          <p className="text-center not-italic text-gray-500 text-lg leading-7 font-normal gt_mobile:font-light">
            NameGuard is an ecosystem of libraries and services that work
            together to help keep the web3 community safe.
          </p>
        </div>
        <Image
          src={explore_ecosystem_img.src}
          alt={"ecosystem image"}
          className="z-10 relative w-full h-full max-w-[1820px]"
          width={2592}
          height={1614}
          quality={100}
        />
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

//TODO: for all icons make them take props (later refactor, especially when moving them to /atoms/icons)
