module.exports = {
  arrowParens: "avoid",
  trailingComma: "es5",
  printWidth: 150,
  singleQuote: false,
  plugins: [require("./web/node_modules/prettier-plugin-tailwindcss")],
  tailwindConfig: "./web/tailwind.config.js",
};
