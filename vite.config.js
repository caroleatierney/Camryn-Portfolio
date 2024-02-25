import { defineConfig } from "vite";

export default defineConfig({
  base: "/Camryn-Portfolio/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "style.css"
            ? "css/style.css"
            : `.assets/${assetInfo.name}`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
});
