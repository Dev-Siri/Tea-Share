import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "hsl(257, 77%, 64%)",
        "primary-dark": "#6348a8",
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
