import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7a68d3",
        "primary-muted": "#5b4b8d",
        "primary-dark": "#493a75",
        "light-gray": "#e6e6e6",
        "semi-gray": "#333333",
        "dark-gray": "#111111",
      },
      margin: {
        "10px": "10px",
      },
      padding: {
        "10px": "10px",
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
