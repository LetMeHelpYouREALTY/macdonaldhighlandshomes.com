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
          50: "rgb(249 250 251)",
          100: "rgb(243 244 246)",
          200: "rgb(229 231 235)",
          300: "rgb(209 213 219)",
          400: "rgb(156 163 175)",
          500: "rgb(107 114 128)",
          600: "rgb(75 85 99)",
          700: "rgb(55 65 81)",
          800: "rgb(31 41 55)",
          900: "rgb(17 24 39)",
          950: "rgb(10 15 23)",
        },
        accent: {
          DEFAULT: "rgb(217 119 6)",
          light: "rgb(245 158 11)",
          dark: "rgb(180 83 9)",
        },
        gold: {
          DEFAULT: "rgb(217 119 6)",
          light: "rgb(245 158 11)",
          dark: "rgb(180 83 9)",
          500: "rgb(217 119 6)",
        },
        charcoal: {
          700: "rgb(55 65 81)",
          800: "rgb(31 41 55)",
          900: "rgb(17 24 39)",
        },
        cream: {
          100: "rgb(255 251 235)",
          200: "rgb(254 243 199)",
          300: "rgb(253 230 138)",
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
