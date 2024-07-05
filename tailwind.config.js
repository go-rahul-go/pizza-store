/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        orangeBg:"#F05D23",
        navDarkBg:"#0A0A0B"
      }
    }
  },
  plugins: [],
}