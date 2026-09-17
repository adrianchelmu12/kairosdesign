import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kairos: {
          dark: "#1f2421",
          teal: "#216869",
          mint: "#49a078",
          sage: "#9cc5a1",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', '"Heiti TC"', "sans-serif"],
        display: ['"Helvetica Neue"', '"Heiti TC"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(73, 160, 120, 0.3)",
        "glow-teal": "0 0 35px -5px rgba(33, 104, 105, 0.4)",
        "glow-sage": "0 0 25px -5px rgba(156, 197, 161, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

