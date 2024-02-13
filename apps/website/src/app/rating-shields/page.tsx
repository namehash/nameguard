"use client";

import { Shield, ShieldIcon, NameBadge } from "@namehash/nameguard-react";

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
        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center">
            <div className="flex items-center font-mono">
              <pre>{"<Shield />"}</pre>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Shield name="lightwalker.eth" />
          </div>
          <div className="flex items-center justify-center">
            <Shield name="culturecafé.eth" />
          </div>
          <div className="flex items-center justify-center">
            <Shield name="‍420.eth" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="skip" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="info" />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{"<NameBadge />"}</pre>
          </div>

          <div className="flex items-center justify-center">
            <NameBadge
              data={{
                rating: "pass",
                risk_count: 0,
                highest_risk: null,
                name: "lightwalker.eth",
                namehash:
                  "0x5c1f4e4189d173a562af8d27771e2a1394ccbfa466f0e72b429dd317afce4c06",
                normalization: "normalized",
                title: "Looks Good",
                subtitle: "All security checks passed!",
                beautiful_name: "lightwalker.eth",
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              data={{
                rating: "warn",
                risk_count: 3,
                highest_risk: {
                  check: "confusables",
                  status: "warn",
                  message: "May be confusable",
                  check_name: "Character Recognition",
                },
                name: "culturecafé.eth",
                namehash:
                  "0x633b4f6a64d539885d9b85c8730a0bc3479c6248f7a99cd2e302707f49c6d5a5",
                normalization: "normalized",
                title: "Some Risk",
                subtitle: "Review risks before proceeding",
                beautiful_name: "culturecafé.eth",
              }}
            />
          </div>
          <div className="flex items-center justify-center">
            <NameBadge
              data={{
                rating: "alert",
                risk_count: 3,
                highest_risk: {
                  check: "invisible",
                  status: "alert",
                  message: "Contains invisible characters",
                  check_name: "Character Visibility",
                },
                name: "‍420.eth",
                namehash:
                  "0x61ce4b1e75e224233d08821593eaa0615e29bd984bbd39fc2830257ceecfcb40",
                normalization: "unnormalized",
                title: "High Risk",
                subtitle: "Better not to use this name",
                beautiful_name: "",
              }}
            />
          </div>
          <div></div>
          <div className="flex items-center justify-center">
            <NameBadge placeholder="notrab.eth" />
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon large />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon status="pass" size="large" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="warn" size="large" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="alert" size="large" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="skip" size="large" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="info" size="large" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon medium />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon status="pass" size="medium" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="warn" size="medium" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="alert" size="medium" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="skip" size="medium" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="info" size="medium" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon small />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon status="pass" size="small" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="warn" size="small" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="alert" size="small" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="skip" size="small" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="info" size="small" />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-x-6 py-5">
          <div className="flex items-center font-mono">
            <pre>{`<ShieldIcon micro />`}</pre>
          </div>

          <div className="flex items-center justify-center">
            <ShieldIcon status="pass" size="micro" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="warn" size="micro" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="alert" size="micro" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="skip" size="micro" />
          </div>
          <div className="flex items-center justify-center">
            <ShieldIcon status="info" size="micro" />
          </div>
        </div>
      </div>
    </div>
  );
}