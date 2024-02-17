"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./Theme";
export function LightDarkButton() {
  const theme = useTheme();
  return (
    <button title="Light/Dark Theme" className="" onClick={theme.toggle}>
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden stroke-gray-600" />
    </button>
  );
}
