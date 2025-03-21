"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const SwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer hover:bg-zinc-200 hover:dark:bg-white/10 p-2 rounded-full transition-all">
      {resolvedTheme === "light" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </div>
  );
};
