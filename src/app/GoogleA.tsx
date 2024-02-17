"use client";
import { useClient } from "@/hooks/useClient";
import Script from "next/script";

export function GoogleA() {
  // const client = useClient();
  // if (!client) return null;
  return (
    <>
      <Script
        id="google-tag-manager"
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-417F1YVZNY"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="/googlea.js"
        id="google-tags"
      ></Script>
    </>
  );
}
