import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/climas": {
        target: "http://vps49762.publiccloud.com.br:7070",
        changeOrigin: true,
        secure: false, // Ignore SSL issues for development
      },
    },
  },
});