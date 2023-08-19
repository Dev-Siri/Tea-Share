module.exports = {
  ...require("@tea-share/packages/config/prettier.config.cjs"),
  plugins: [import("prettier-plugin-tailwindcss"), import("prettier-plugin-svelte")],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
