"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { useTheme } from "../Theme";
let loaded = false;

export default function Giscus() {
  const [client, setClient] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setClient(true);
    if (!loaded) {
      import("giscus");
      loaded = true;
    }
  }, []);
  if (!client) {
    return null;
  }
  const themeProp = theme.dark ? "dark" : "light";
  return (
    <>
      <div className="leading-8"></div>
      <giscus-widget
        repo="danyo1399/blog"
        repo-id="R_kgDOLST4EA"
        category="Announcements"
        category-id="DIC_kwDOLST4EM4CdRtn"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme={themeProp}
        lang="en"
      ></giscus-widget>
    </>
  );
}
