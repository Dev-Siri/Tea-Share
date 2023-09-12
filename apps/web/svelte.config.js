import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "svelte-adapter-bun";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    files: {
      serviceWorker: "src/service-worker.ts",
    },
    serviceWorker: {
      register: false,
    },
  },
};

export default config;
