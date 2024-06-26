/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#050816",
        "primary-light": "#faf7e9",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern-dark": "url('/src/assets/herobg_dark.png')",
        "hero-pattern-light": "url('/src/assets/herobg_light.png')",
        
      },
      cursor:{
        "fancy": "url('/src/assets/cursor1.svg'),auto",
      }
    },
  },
  plugins: [],
};