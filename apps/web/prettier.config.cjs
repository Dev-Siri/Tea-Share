module.exports = {
  ...import("@tea-share/packages/config/prettier.config.cjs"),
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  plugins: [
    import("prettier-plugin-tailwindcss"),
    import("prettier-plugin-svelte"),
  ],
};
