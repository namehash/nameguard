"use client";

import { CheckResultCode, Normalization, Rating } from "@namehash/nameguard";
import {
  ShieldIcon,
  ShieldIconSize,
  LoadingShieldIcon,
  NameBadge,
  UnknownShieldIcon,
  ReportShield,
} from "@namehash/nameguard-react";

export default function RatingShieldsPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-12">
      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-6 gap-x-6 py-5 text-center font-medium">
          <div></div>
          <div>Success</div>
          <div>Warn</div>
          <div>Alert</div>
          <div>Error</div>
          <div>Loading</div>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="grid grid-cols-6 gap-x-6 py-5">
            <div className="flex items-center font-mono">
              <pre>{"<ReportShield />"}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.pass,
                  risk_count: 0,
                  highest_risk: null,
                  name: "lightwalker.eth",
                  namehash:
                    "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                  normalization: Normalization.normalized,
                  title: "Looks Good",
                  subtitle: "All security checks passed!",
                  beautiful_name: "lightwalker.eth",
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.warn,
                  risk_count: 3,
                  highest_risk: {
                    check: "confusables",
                    status: CheckResultCode.warn,
                    message: "May be confusable",
                    check_name: "Character Recognition",
                  },
                  name: "culturecafé.eth",
                  namehash:
                    "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                  normalization: Normalization.normalized,
                  title: "Some Risk",
                  subtitle: "Review risks before proceeding",
                  beautiful_name: "culturecafé.eth",
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.alert,
                  risk_count: 3,
                  highest_risk: {
                    check: "invisible",
                    status: CheckResultCode.alert,
                    message: "Contains invisible characters",
                    check_name: "Character Visibility",
                  },
                  name: "‍420.eth",
                  namehash:
                    "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                  normalization: Normalization.unnormalized,
                  title: "High Risk",
                  subtitle: "Better not to use this name",
                  beautiful_name: "",
                }}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield name="notrab.eth" error={true} />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield name="notrab.eth" />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-6 py-5">
            <div className="flex items-center font-mono">
              <pre>{"<ReportShield onClick />"}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.pass,
                  risk_count: 0,
                  highest_risk: null,
                  name: "lightwalker.eth",
                  namehash:
                    "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                  normalization: Normalization.normalized,
                  title: "Looks Good",
                  subtitle: "All security checks passed!",
                  beautiful_name: "lightwalker.eth",
                }}
                onClick={() => alert("Clicked")}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.warn,
                  risk_count: 3,
                  highest_risk: {
                    check: "confusables",
                    status: CheckResultCode.warn,
                    message: "May be confusable",
                    check_name: "Character Recognition",
                  },
                  name: "culturecafé.eth",
                  namehash:
                    "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                  normalization: Normalization.normalized,
                  title: "Some Risk",
                  subtitle: "Review risks before proceeding",
                  beautiful_name: "culturecafé.eth",
                }}
                onClick={() => alert("Clicked")}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.alert,
                  risk_count: 3,
                  highest_risk: {
                    check: "invisible",
                    status: CheckResultCode.alert,
                    message: "Contains invisible characters",
                    check_name: "Character Visibility",
                  },
                  name: "‍420.eth",
                  namehash:
                    "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                  normalization: Normalization.unnormalized,
                  title: "High Risk",
                  subtitle: "Better not to use this name",
                  beautiful_name: "",
                }}
                onClick={() => alert("Clicked")}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                name="notrab.eth"
                error="Something went wrong"
                onClick={() => alert("Clicked")}
              />
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                name="notrab.eth"
                onClick={() => alert("Clicked")}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-6 py-5">
            <div className="flex items-center font-mono">
              <pre>{"<ReportShield> \n Hello World \n </ReportShield>"}</pre>
            </div>

            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.pass,
                  risk_count: 0,
                  highest_risk: null,
                  name: "lightwalker.eth",
                  namehash:
                    "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                  normalization: Normalization.normalized,
                  title: "Looks Good",
                  subtitle: "All security checks passed!",
                  beautiful_name: "lightwalker.eth",
                }}
                onClick={() => alert("Clicked")}
              >
                Hello world
              </ReportShield>
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.warn,
                  risk_count: 3,
                  highest_risk: {
                    check: "confusables",
                    status: CheckResultCode.warn,
                    message: "May be confusable",
                    check_name: "Character Recognition",
                  },
                  name: "culturecafé.eth",
                  namehash:
                    "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                  normalization: Normalization.normalized,
                  title: "Some Risk",
                  subtitle: "Review risks before proceeding",
                  beautiful_name: "culturecafé.eth",
                }}
                onClick={() => alert("Clicked")}
              >
                Hello world
              </ReportShield>
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                data={{
                  rating: Rating.alert,
                  risk_count: 3,
                  highest_risk: {
                    check: "invisible",
                    status: CheckResultCode.alert,
                    message: "Contains invisible characters",
                    check_name: "Character Visibility",
                  },
                  name: "‍420.eth",
                  namehash:
                    "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                  normalization: Normalization.unnormalized,
                  title: "High Risk",
                  subtitle: "Better not to use this name",
                  beautiful_name: "",
                }}
                onClick={() => alert("Clicked")}
              >
                Hello world
              </ReportShield>
            </div>
            <div className="flex items-center justify-center">
              <ReportShield
                name="notrab.eth"
                error="Something went wrong"
                onClick={() => alert("Clicked")}
              >
                Hello world
              </ReportShield>
            </div>
            <div className="flex items-center justify-center">
              <ReportShield name="notrab.eth" onClick={() => alert("Clicked")}>
                Hello world
              </ReportShield>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5 mt-8">
          <div className="flex items-center">
            <div className="flex items-center font-mono">
              <pre>{"<NameBadge onClick />"}</pre>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <NameBadge
              name="lightwalker.eth"
              data={{
                rating: Rating.pass,
                risk_count: 0,
                highest_risk: null,
                name: "lightwalker.eth",
                namehash:
                  "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                normalization: Normalization.normalized,
                title: "Looks Good",
                subtitle: "All security checks passed!",
                beautiful_name: "lightwalker.eth",
              }}
              onClick={() => alert("Clicked")}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              name="culturecafé.eth"
              data={{
                rating: Rating.warn,
                risk_count: 3,
                highest_risk: {
                  check: "confusables",
                  status: CheckResultCode.warn,
                  message: "May be confusable",
                  check_name: "Character Recognition",
                },
                name: "culturecafé.eth",
                namehash:
                  "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                normalization: Normalization.normalized,
                title: "Some Risk",
                subtitle: "Review risks before proceeding",
                beautiful_name: "culturecafé.eth",
              }}
              onClick={() => alert("Clicked")}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              name="‍420.eth"
              data={{
                rating: Rating.alert,
                risk_count: 3,
                highest_risk: {
                  check: "invisible",
                  status: CheckResultCode.alert,
                  message: "Contains invisible characters",
                  check_name: "Character Visibility",
                },
                name: "‍420.eth",
                namehash:
                  "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                normalization: Normalization.unnormalized,
                title: "High Risk",
                subtitle: "Better not to use this name",
                beautiful_name: "",
              }}
              onClick={() => alert("Clicked")}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              name="notrab.eth"
              error="Something went wrong"
              onClick={() => alert("Clicked")}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge onClick={() => alert("Clicked")} />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center">
            <div className="flex items-center font-mono">
              <pre>{"<NameBadge />"}</pre>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <NameBadge
              name="lightwalker.eth"
              data={{
                rating: Rating.pass,
                risk_count: 0,
                highest_risk: null,
                name: "lightwalker.eth",
                namehash:
                  "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                normalization: Normalization.normalized,
                title: "Looks Good",
                subtitle: "All security checks passed!",
                beautiful_name: "lightwalker.eth",
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              name="culturecafé.eth"
              data={{
                rating: Rating.warn,
                risk_count: 3,
                highest_risk: {
                  check: "confusables",
                  status: CheckResultCode.warn,
                  message: "May be confusable",
                  check_name: "Character Recognition",
                },
                name: "culturecafé.eth",
                namehash:
                  "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                normalization: Normalization.normalized,
                title: "Some Risk",
                subtitle: "Review risks before proceeding",
                beautiful_name: "culturecafé.eth",
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              name="‍420.eth"
              data={{
                rating: Rating.alert,
                risk_count: 3,
                highest_risk: {
                  check: "invisible",
                  status: CheckResultCode.alert,
                  message: "Contains invisible characters",
                  check_name: "Character Visibility",
                },
                name: "‍420.eth",
                namehash:
                  "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                normalization: Normalization.unnormalized,
                title: "High Risk",
                subtitle: "Better not to use this name",
                beautiful_name: "",
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge name="notrab.eth" error="Something went wrong" />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon large />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.pass} size={ShieldIconSize.large} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.warn} size={ShieldIconSize.large} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.alert} size={ShieldIconSize.large} />
          </div>
          <div className="flex items-center justify-center">
            <UnknownShieldIcon size={ShieldIconSize.large} />
          </div>
          <div className="flex items-center justify-center">
            <LoadingShieldIcon size={ShieldIconSize.large} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon medium />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.pass} size={ShieldIconSize.medium} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.warn} size={ShieldIconSize.medium} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.alert} size={ShieldIconSize.medium} />
          </div>
          <div className="flex items-center justify-center">
            <UnknownShieldIcon size={ShieldIconSize.medium} />
          </div>
          <div className="flex items-center justify-center">
            <LoadingShieldIcon size={ShieldIconSize.medium} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon small />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.pass} size={ShieldIconSize.small} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.warn} size={ShieldIconSize.small} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.alert} size={ShieldIconSize.small} />
          </div>
          <div className="flex items-center justify-center">
            <UnknownShieldIcon size={ShieldIconSize.small} />
          </div>
          <div className="flex items-center justify-center">
            <LoadingShieldIcon size={ShieldIconSize.small} />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon micro />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.pass} size={ShieldIconSize.micro} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.warn} size={ShieldIconSize.micro} />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon rating={Rating.alert} size={ShieldIconSize.micro} />
          </div>
          <div className="flex items-center justify-center">
            <UnknownShieldIcon size={ShieldIconSize.micro} />
          </div>
          <div className="flex items-center justify-center">
            <LoadingShieldIcon size={ShieldIconSize.micro} />
          </div>
        </div>
      </div>
    </div>
  );
}
