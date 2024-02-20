import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cx } from "@/utils";
import {
  LinkedinIcon,
  MoonIcon,
  RssIcon,
  SunIcon,
  TwitterIcon,
} from "lucide-react";
import { LightDarkButton } from "./LightDarkButton";
import Link from "next/link";
import { ThemeProvider } from "./Theme";
import { urls } from "@/urls";
import { GoogleA } from "./GoogleA";
import { constants } from "@/constants";
import { SearchIcon } from "./SearchIcon/SearchIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danyo's Blog",
  description:
    "I'm a technology enthusist with a passion for software development and architecture.",
  openGraph: { images: "/ogimage.png", type: "website" },
  metadataBase: new URL(constants.hostname),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
        />
      </head>
      <body
        className={cx(
          inter.className,
          "dark:bg-dark bg-light dark:text-white min-h-screen",
          "hidden",
        )}
      >
        <ThemeProvider>
          <Content>{children}</Content>
        </ThemeProvider>
        <GoogleA />
      </body>
    </html>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className=" max-w-[64rem] mx-auto px-5 pb-24">
      <header className="flex backdrop-blur-md -mx-5 px-5 items-center relative sticky top-0 dark:bg-dark/70 bg-light/70  h-20 flex">
        <Link href="/" className="font-normal text-2xl tracking-[0.2rem] ">
          <span className="hidden sm:block">Dan Young</span>
          <span className="block sm:hidden">DanYo</span>
        </Link>
        <SearchIcon />
        <div className="absolute flex items-center gap-6 sm:gap-10 right-5">
          <Link
            title="Linkedin"
            href="https://www.linkedin.com/in/danyonz"
            target="_blank"
          >
            <LinkedinIcon
              className="dark:fill-gray-100 fill-gray-600"
              strokeWidth={0}
            />
          </Link>
          <Link
            title="Twitter"
            href="https://twitter.com/danyo1399"
            target="_blank"
          >
            <TwitterIcon
              className="dark:fill-gray-100 fill-gray-600"
              strokeWidth={0}
            />
          </Link>
          <LightDarkButton />
          <Link href="/rss.xml" title="RSS Feed">
            <RssIcon />
          </Link>
        </div>
      </header>
      <main className="mt-6 ">{children}</main>
    </div>
  );
}
