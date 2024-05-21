import "./globals.css";
import "@namehash/ens-webfont";
import type { Metadata } from "next";
import { Metadata as NamehashMetadata } from "@namehash/seo";
import { Inter } from "next/font/google";
import Favicon from "../../public/favicon/favicon_package_v0-2/favicon.ico";
import AppleTouchIcon from "../../public/favicon/favicon_package_v0-2/apple-touch-icon.png";
import { NameGuardWrapper } from "./components/NameGuardWrapper";

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const title = "Protect your community with NameGuard for ENS";
const description =
  "Guard your users from heartbreak and encourage best practice usage of ENS.";

export const metadata: Metadata = {
  ...NamehashMetadata.defaultMetdata,
  metadataBase: new URL("https://nameguard.io"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "NameGuard - %s",
    default: title,
  },
  description,
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "apple-touch-icon", url: AppleTouchIcon.src },
  ],
  openGraph: {
    ...NamehashMetadata.defaultMetdata.openGraph,
    title,
    description,
  },
  twitter: {
    ...NamehashMetadata.defaultMetdata.twitter,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        <NameGuardWrapper />
      </body>
    </html>
  );
}