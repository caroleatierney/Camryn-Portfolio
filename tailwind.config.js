/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      sohne:  ["SOHNE", "semibold"],
      serif: ['ui-serif', 'Georgia'],
    },
  },
  base: "/Camryn-Portfolio/",
  plugins: [require("flowbite/plugin")],
};