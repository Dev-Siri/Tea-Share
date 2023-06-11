import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { preprocessor as documentPreprocessor } from "@sveltekit-addons/document";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), documentPreprocessor()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
