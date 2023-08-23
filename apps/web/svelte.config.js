import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({ maxDuration: 10 }),
    files: {
      serviceWorker: "src/service-worker.ts",
    },
    serviceWorker: {
      register: false
    }
  },
};

export default config;
