"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";
export function LightDarkButton() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.body.classList.remove("hidden");
  }, []);
  const clickHandler = () => {
    // if (localStorage === empty) return;
    const dark = localStorage.theme === "dark";
    if (!dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <button className="sm:ml-5" onClick={clickHandler}>
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden stroke-gray-600" />
    </button>
  );
}
