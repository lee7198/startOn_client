import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/mbti": {
        target: "https://1def-61-74-181-49.ngrok-free.app/mbti",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mbti/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
