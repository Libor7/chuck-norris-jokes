import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          return undefined;
        },
      },
    },
    target: "es2015",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@categories": path.resolve(__dirname, "./src/modules/categories"),
      "@error": path.resolve(__dirname, "./src/modules/error"),
      "@home": path.resolve(__dirname, "./src/modules/home"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
