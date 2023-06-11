module.exports = {
  arrowParens: "avoid",
  trailingComma: "es5",
  printWidth: 150,
  singleQuote: false,
  plugins: [require("prettier-plugin-tailwindcss"), require("prettier-plugin-svelte")],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
