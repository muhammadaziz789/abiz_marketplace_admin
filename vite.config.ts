import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    outDir: "build",
  },
  server: {
    port: 3333,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "scss/_colors.scss";
        `,
      },
    },
  },
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      layout: "/src/layouts",
      scss: "/src/styles",
      services: "/src/services",
      store: "/src/store",
      utils: "/src/utils",
      views: "/src/views",
    },
  },
});
