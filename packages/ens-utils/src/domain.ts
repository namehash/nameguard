import { Registration } from "./registration";
import { ENSName, MIN_ETH_REGISTRABLE_LABEL_LENGTH } from "./ensname";
import { Timestamp, addSeconds } from "./time";
import { NFTRef } from "./nft";
import { GRACE_PERIOD } from "./ethregistrar";
import { Address, buildAddress, isAddressEqual } from "./address";
import { hexToBigInt, keccak256, labelhash as labelHash, namehash } from "viem";
import { ens_beautify, ens_normalize } from "@adraffy/ens-normalize";

/**
 * Returns the expiration timestamp of a domain
 * @param domainRegistration Registration object from domain
 * @returns Timestamp | null
 */
export function domainExpirationTimestamp(
  domainRegistration: Registration,
): Timestamp | null {
  if (domainRegistration.expirationTimestamp) {
    return domainRegistration.expirationTimestamp;
  }
  return null;
}

/**
 * Returns the release timestamp of a domain, which is 90 days after expiration when the Grace Period ends
 * @param domainRegistration Registration object from domain
 * @returns Timestamp | null
 */
export function domainReleaseTimestamp(
  domainRegistration: Registration,
): Timestamp | null {
  const expirationTimestamp = domainExpirationTimestamp(domainRegistration);
  if (expirationTimestamp === null) return null;

  const releaseTimestamp = addSeconds(expirationTimestamp, GRACE_PERIOD);
  return releaseTimestamp;
}

/* 
  Below enum options differ based on domain's owner
  and on its secondary marketplace status:
  If domain has no owner: noOwner;
  If domain has an owner but user is not the owner: notOwner;
  If user is owner of the domain and domain is in Grace Period: formerOwner;
  If user is owner of the domain and domain is not in Grace Period: activeOwner;
*/
export enum UserOwnershipOfDomain {
  noOwner = "noOwner",
  notOwner = "notOwner",
  formerOwner = "formerOwner",
  activeOwner = "activeOwner",
}

/**
 * Returns the ownership status of a domain in comparison to the current user's address
 * @param formerDomainOwnerAddress Address of former domain owner (last owner before Grace Period)
 * @param currentDomainOwnerAddress Address of current domain owner
 * @param currentUserAddress Address of the current user.
 * @returns UserOwnershipOfDomain
 */
export const getCurrentUserOwnership = (
  formerDomainOwnerAddress: Address | null,
  currentDomainOwnerAddress: Address | null,
  currentUserAddress: Address | null,
): UserOwnershipOfDomain => {
  if (!currentDomainOwnerAddress && !formerDomainOwnerAddress)
    return UserOwnershipOfDomain.noOwner;

  if (currentUserAddress) {
    const isFormerOwner =
      formerDomainOwnerAddress &&
      isAddressEqual(formerDomainOwnerAddress, currentUserAddress);

    if (isFormerOwner) {
      return UserOwnershipOfDomain.formerOwner;
    }

    const isOwner =
      currentDomainOwnerAddress &&
      isAddressEqual(currentUserAddress, currentDomainOwnerAddress);

    if (isOwner) {
      return UserOwnershipOfDomain.activeOwner;
    }
  }

  return UserOwnershipOfDomain.notOwner;
};

export enum ParseNameErrorCode {
  Empty = "Empty",
  TooShort = "TooShort",
  UnsupportedTLD = "UnsupportedTLD",
  UnsupportedSubdomain = "UnsupportedSubdomain",
  MalformedName = "MalformedName",
  MalformedLabelHash = "MalformedLabelHash",
}

type ParseNameErrorDetails = {
  normalizedName: string | null;
  displayName: string | null;
};
export class ParseNameError extends Error {
  public readonly errorCode: ParseNameErrorCode;
  public readonly errorDetails: ParseNameErrorDetails | null;

  constructor(
    message: string,
    errorCode: ParseNameErrorCode,
    errorDetails: ParseNameErrorDetails | null,
  ) {
    super(message);

    this.errorCode = errorCode;
    this.errorDetails = errorDetails;
  }
}

export const DEFAULT_TLD = "eth";

export const DefaultParseNameError = new ParseNameError(
  "Empty name",
  ParseNameErrorCode.Empty,
  null,
);

export const hasMissingNameFormat = (label: string) =>
  new RegExp("\\[([0123456789abcdef]*)\\]").test(label) && label.length === 66;

const labelhash = (label: string) => labelHash(label);

const getPrefixes = (input: string): string[] => {
  const prefixes: string[] = [];

  for (let i = 1; i <= input.length; i++) {
    prefixes.push(input.slice(0, i));
  }

  return prefixes;
};

const keccak = (input: Buffer | string) => {
  let out = null;
  if (Buffer.isBuffer(input)) {
    out = keccak256(input);
  } else {
    out = labelhash(input);
  }
  return out.slice(2); // cut 0x
};

const initialNode =
  "0000000000000000000000000000000000000000000000000000000000000000";

export const namehashFromMissingName = (inputName: string): string => {
  let node = initialNode;

  const split = inputName.split(".");
  const labels = [split[0].slice(1, -1), keccak(split[1])];

  for (let i = labels.length - 1; i >= 0; i--) {
    const labelSha = labels[i];
    node = keccak(Buffer.from(node + labelSha, "hex"));
  }
  return "0x" + node;
};
