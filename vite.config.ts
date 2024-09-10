import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    port: 80,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@app": path.resolve(__dirname, "src/app"),
      "@models": path.resolve(__dirname, "src/models"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  }
});
