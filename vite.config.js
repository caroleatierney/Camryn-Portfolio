import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      "process.env": env,
    },
    base: "/Camryn-Portfolio/",
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            return assetInfo.fileName === "style.css"
              ? "css/style.css"
              : `assets/${assetInfo.fileName}`;
          },
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
        },
        onwarn(warning, warn) {
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return;
          }
          warn(warning);
        },
        chunkSizeWarningLimit: 500,
      },
    },
    plugins: [react()],
  };
  });

