/** @type {import('tailwindcss').Config} */
import ThemePlugin from './src/styles/theme';

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      fontSize: {
        'responsive': '5vw',
      },
      letterSpacing: {
        'wide-custom': '0.38em',
      },
      boxShadow: {
        '3d': '-10px 0 15px -3px rgba(0, 0, 0, 0.3), -10px 0 8px -2px rgba(0, 0, 0, 0.2)'
      },
    },
  },
  plugins: [ThemePlugin],
};

module.exports = config;
