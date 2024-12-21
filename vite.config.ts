import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@categories": path.resolve(__dirname, "./src/modules/categories"),
      "@error": path.resolve(__dirname, "./src/modules/error"),
      "@home": path.resolve(__dirname, "./src/modules/home"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
