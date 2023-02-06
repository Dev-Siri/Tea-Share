// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        dark: "0px 2px 122px 18px rgba(0, 0, 0, 0.23)",
        light: "-22px 10px 300px -97px hsl(0, 0%, 100%)",
      },
      colors: {
        primary: "hsl(257, 39%, 42%)",
        "primary-dark": "rgb(57, 42, 96)",
        "medium-blue": "rgb(0, 102, 255)",
        "light-gray": "hsl(0, 0%, 90%)",
        "semi-gray": "rgb(51, 51, 51)",
        "dark-gray": "rgb(17, 17, 17)",
        "border-gray": "rgb(50, 50, 50)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
