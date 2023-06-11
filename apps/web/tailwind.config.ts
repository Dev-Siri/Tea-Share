import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        dark: "0px 2px 122px 18px rgba(0, 0, 0, 0.23)",
        light: "-22px 10px 300px -97px hsl(0, 0%, 100%)",
      },
      colors: {
        primary: "hsl(257, 39%, 53%)",
        "primary-dark": "rgb(57, 42, 96)",
        "light-gray": "hsl(0, 0%, 90%)",
        "semi-gray": "rgb(51, 51, 51)",
        "dark-gray": "rgb(17, 17, 17)",
      },
      margin: {
        "10px": "10px",
      },
      padding: {
        "10px": "10px",
      },
      borderWidth: {
        px: "1px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} satisfies Config;
