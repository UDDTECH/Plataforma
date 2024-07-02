/** @type {import('tailwindcss').Config} */
import ThemePlugin from './src/styles/theme'

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  plugins: [ThemePlugin],
};

module.exports = config;
