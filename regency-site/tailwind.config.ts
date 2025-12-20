import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        primary: {
          50: "rgb(238 242 255)",
          100: "rgb(224 231 255)",
          200: "rgb(199 210 254)",
          300: "rgb(165 180 252)",
          400: "rgb(129 140 248)",
          500: "rgb(99 102 241)",
          600: "rgb(79 70 229)",
          700: "rgb(67 56 202)",
          800: "rgb(55 48 163)",
          900: "rgb(49 46 129)",
          950: "rgb(30 27 75)",
        },
        accent: {
          DEFAULT: "rgb(16 185 129)",
          light: "rgb(52 211 153)",
          dark: "rgb(5 150 105)",
        },
        gold: {
          DEFAULT: "rgb(217 119 6)",
          light: "rgb(245 158 11)",
          dark: "rgb(180 83 9)",
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "luxury": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "luxury-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
