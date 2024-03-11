/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      webPageBackground: "#334155",
      backgroundGray: "#e5e7eb",
      darkGrayBorder: "#a1a1aa",
      lightBorderGray: "#9ca3af",
      lightGrayText: "#a1a1aa",
      mediumGrayText: "#71717a",
      darkGrayText: "#4b5563",
    },
    fontFamily: {
      sohne: ["SOHNE", "semibold"],
      serif: ["ui-serif", "Georgia"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4.563rem",
      "7xl": "4.953rem",
      "8xl": "4.441rem",
      "9xl": "5.052rem",
    },
  },
  base: "/Camryn-Portfolio/",
  plugins: [require("flowbite/plugin")],
};