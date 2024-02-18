"use client";
import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { useTheme } from "../Theme";
import { cx } from "@/utils";
let loaded = false;

export default function Giscus() {
  const [client, setClient] = useState(false);
  const [error, setError] = useState(false);
  const eventListener = useCallback((evt: any) => {
    if (evt.data?.giscus) {
      const failed = !!evt.data?.giscus?.error;
      setError(failed);
      if (failed) {
        console.error("Giscus failed", evt.data.giscus.error);
      }
    }
  }, []);
  const theme = useTheme();

  useEffect(() => {
    setClient(true);
    window.addEventListener("message", eventListener);
    if (!loaded) {
      import("giscus");
      loaded = true;
    }
    return () => {
      window.removeEventListener("message", eventListener);
    };
  }, [eventListener]);

  if (!client) {
    return null;
  }
  const themeProp = theme.dark ? "dark" : "light";
  return (
    <div className={cx("mt-20", error && "hidden")}>
      <giscus-widget
        repo="danyo1399/blog"
        repo-id="R_kgDOLST4EA"
        category="Announcements"
        category-id="DIC_kwDOLST4EM4CdRtn"
        mapping="pathname"
        strict="0"
        reactionsenabled="1"
        emitmetadata="1"
        inputposition="top"
        theme={themeProp}
        lang="en"
      ></giscus-widget>
    </div>
  );
}
