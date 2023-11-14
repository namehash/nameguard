/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const messages = [
  {
    address: "0x8Ae0e6dd8eACe27045d9e017C8Cf6dAa9D08C776",
  },
  {
    address: "0xFD9eE68000Dc92aa6c67F8f6EB5d9d1a24086fAd",
  },
  {
    address: "0xfA9A134f997b3d48e122d043E12d04E909b11073",
  },
  {
    address: "0xaf738F6C83d7D2C46723b727Ce794F9c79Cc47E6",
  },
  {
    address: "0xd0eFbeDFEd3C813fEB87248dABfc5d5AB21770dF",
  },
  {
    address: "0x7c7160A23b32402ad24ED5a617b8a83f434642d4",
  },
] as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full md:h-full overflow-auto flex flex-col md:flex-row">
          <div className="flex">
            <div className="flex flex-col justify-between h-screen bg-white px-3 border-r border-gray-200 shadow-lg w-16">
              <div></div>
              <div></div>
            </div>
            <div className="flex flex-col w-full h-screen overflow-y-auto md:max-w-[350px]">
              <div className="border-l border-r border-b border-gray-200 bg-gray-100 h-16 p-4 pt-5 flex items-center justify-end">
                <button
                  data-testid="new-message-icon-cta"
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-800 text-lg rounded-full flex justify-center items-center p-0 h-fit"
                  aria-label="aria_labels.start_new_message"
                >
                  <div className="bg-indigo-600 hover:bg-indigo-800 p-1 min-h-24 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      color="white"
                      width="20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="overflow-hidden flex flex-col h-full bg-gray-100 border-x">
                {messages.map(({ address }, index) => (
                  <Link
                    key={index}
                    href={`/address/${address}`}
                    className="flex justify-between items-center border-0 border-b border-gray-200 outline-blue outline-b-0 h-min cursor-pointer p-4 overflow-ellipsis hover:bg-gray-200 space-x-3"
                  >
                    <img
                      src={`https://effigy.im/a/${address}.png`}
                      className="min-w-[30px] max-w-[30px] h-[30px] rounded-full"
                      alt={address}
                    />
                    <span>{address}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col h-screen overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
