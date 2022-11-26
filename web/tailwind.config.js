/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        dark: "-3px 10px 35px 0px hsla(0, 0%, 0%, 0.75)",
        light: "-22px 10px 300px -97px hsl(0, 0%, 100%)",
      },
      colors: {
        primary: "hsl(257, 39%, 42%)",
        "primary-dark": "rgb(57, 42, 96)",
        "medium-blue": "rgb(0, 102, 255)",
        "light-gray": "hsl(0, 0%, 90%)",
        "semi-gray": "rgb(51, 51, 51)",
        "hover-color": "rgb(28, 20, 46)",
        "dark-gray": "rgb(18, 18, 18)",
      },
      fontFamily: {},
    },
  },
};
