import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: true,
    sourcemap: true,
    minify: "terser",
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["some-package-to-exclude"],
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
