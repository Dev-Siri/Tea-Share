module.exports = {
  arrowParens: "avoid",
  trailingComma: "es5",
  printWidth: 150,
  singleQuote: false,
  plugins: [import("prettier-plugin-tailwindcss"), import("prettier-plugin-svelte")],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
