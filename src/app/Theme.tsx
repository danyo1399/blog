"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type ThemeContext = { dark: boolean | undefined; toggle: () => void };
const themeContext = createContext<ThemeContext | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState<boolean>();
  useEffect(() => {
    document.body.classList.remove("hidden");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);
  const toggle = () => {
    // if (localStorage === empty) return;
    const dark = localStorage.theme === "dark";
    if (!dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  };
  return (
    <>
      <themeContext.Provider value={{ dark, toggle }}>
        {children}
      </themeContext.Provider>
    </>
  );
}

export function useTheme() {
  const context = useContext(themeContext);
  if (context == null) {
    throw new Error("Theme context not initialised");
  }
  return context;
}
