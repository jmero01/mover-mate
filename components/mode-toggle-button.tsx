"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? "scale-0" : "scale-100"}`}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        id="theme-toggle"
      />
      <MoonIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? "scale-100" : "scale-0"}`}
      />
      <label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </label>
    </div>
  );
}
