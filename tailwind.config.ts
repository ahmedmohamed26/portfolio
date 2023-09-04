import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      bold: "700",
      extrabold: "800",
    },
    fontFamily: {
      paragraph: ["Crimson Text, serif"],
      PoppinsMedium: ["PoppinsMedium, sans-serif"],
      PoppinsRegular: ["PoppinsRegular, sans-serif"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        "dark-black": "rgba(22, 22, 22, 1)",
        "dark-gray": "rgb(33, 33, 33)",
        "soft-gray": "rgba(44, 44, 44, 1)",
        "light-gray-text": "rgba(129, 129, 129, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
