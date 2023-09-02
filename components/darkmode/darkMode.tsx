"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkmodeIcon, BrightnessIcon } from "../../public/svgs";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <DarkmodeIcon /> : <BrightnessIcon />}
    </button>
  );
};

export default DarkModeButton;
