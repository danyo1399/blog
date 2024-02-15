import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cx } from "@/utils";
import { LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "lucide-react";
import { LightDarkButton } from "./LightDarkButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          'hidden'
        )}
      >
        <Content>{children}</Content>
      </body>
    </html>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className=" max-w-[64rem] mx-auto px-5 pb-24">
      <header className="flex -mx-5 px-5 items-center relative sticky top-0 dark:bg-dark bg-light  h-20 flex items-center">
        <Link href="/" className="font-normal text-2xl tracking-[0.2rem] ">
          Dan Young
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
      <main className="mt-12 ">{children}</main>
    </div>
  );
}
