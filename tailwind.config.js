/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "bg": "#fff",
        "text": "#191C24",
        "item": "#963C66",
        "grey": "#808080",
        "blue": "#305A7D",
        "yellow" : "#AE8446"
      }, 
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
