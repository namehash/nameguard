import { ENSName } from "@namehash/ens-utils";

export function viewNameReportURL(ensName: ENSName): URL {
  return new URL(
    `https://nameguard.io/inspect/${encodeURIComponent(ensName.name)}`,
  );
}

export function redirectUserToNameGuardInspectPage(ensName: ENSName) {
  window.location.href = viewNameReportURL(ensName).href;
}
