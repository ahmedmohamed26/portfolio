import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
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
    },
  },
  plugins: [],
};
export default config;
