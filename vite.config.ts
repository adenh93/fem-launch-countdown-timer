import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fem-launch-countdown-timer/",
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
});
