import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D", // Deep dark background
        text: "#F5F5F5", // Light greyish-white text
        accent: "#D4AF37", // Gold for highlights
        secondary: "#1A1A1A", // Dark grey for sections
        highlight: "#3498DB", // Blue accent for contrast
        muted: "#888888", // Muted grey for subtle text
      },
      fontFamily: {
        headings: ["Oswald", "sans-serif"],
        para: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
