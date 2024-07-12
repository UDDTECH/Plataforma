/** @type {import('tailwindcss').Config} */
import ThemePlugin from './src/styles/theme'

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      letterSpacing: {
        '38': '0.38em', 
      }
    }
  },
  plugins: [ThemePlugin],
};

module.exports = config;
