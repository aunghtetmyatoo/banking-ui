// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => {
            setTheme("light");
          }}
          className="w-max fill-purple-600 md:order-8"
        >
          <MdOutlineLightMode className="h-4 w-4" />{" "}
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("dark");
          }}
          className="w-max fill-purple-600 text-black md:order-8"
        >
          <MdOutlineDarkMode className="h-4 w-4" />{" "}
        </button>
      )}
    </>
  );
}
