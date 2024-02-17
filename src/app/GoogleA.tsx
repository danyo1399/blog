"use client";
import Script from "next/script";

export function GoogleA() {
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
