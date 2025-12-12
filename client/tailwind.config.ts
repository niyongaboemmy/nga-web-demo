import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#EBF8FF",
          100: "#E4F6FF",
          200: "#BDE9FF",
          300: "#66CCFF",
          400: "#45C0FF",
          500: "#42BFFF",
          600: "#39BCFF",
          700: "#35BBFF",
          800: "#26B6FF",
          900: "#08ACFF",
          950: "#0081ff",
        },
        secondary: {
          500: "#FFA206",
        },
        dark: {
          500: "#006BA2",
          700: "#004467",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "fade-in-up-delay-1": "fade-in-up 1s ease-out 0.5s forwards",
        "fade-in-up-delay-2": "fade-in-up 1s ease-out 1s forwards",
        "fade-in-up-delay-3": "fade-in-up 1s ease-out 1.5s forwards",
      },
    },
  },
  plugins: [],
};

export default config;
