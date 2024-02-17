import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cx } from "@/utils";
import { LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "lucide-react";
import { LightDarkButton } from "./LightDarkButton";
import Link from "next/link";
import { ThemeProvider } from "./Theme";
import { urls } from "@/urls";
import { GoogleA } from "./GoogleA";
import { constants } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danyo's Blog",
  description:
    "I'm a technology enthusist with a passion for software development and architecture.",
  openGraph: { images: "/ogimage.png", type: "website" },
  metadataBase: new URL(constants.hostname)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
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
        <div className="absolute flex items-center gap-5 right-5">
          <Link href="https://www.linkedin.com/in/danyonz" target="_blank">
            <LinkedinIcon
              className="dark:fill-gray-100 fill-gray-600"
              strokeWidth={0}
            />
          </Link>
          <Link href="https://twitter.com/danyo1399" target="_blank">
            <TwitterIcon
              className="dark:fill-gray-100 fill-gray-600"
              strokeWidth={0}
            />
          </Link>
          <LightDarkButton />
        </div>
      </header>
      <main className="mt-6 ">{children}</main>
    </div>
  );
}
