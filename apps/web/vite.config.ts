import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": process.env["NODE_ENV"] === "production" 
    ? '"production"'
    : '"development"'
  },
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      strategies: "generateSW",
      manifestFilename: "./public/manifest.webmanifest",
      srcDir: "src",
    })
  ]
});
