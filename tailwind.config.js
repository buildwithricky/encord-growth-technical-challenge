/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        primary: '#6246EA',
        secondary: '#6B7280', 
        gradientStart: '#EAE2FF',
        gradientEnd: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], 
      },
    },
  },
  plugins: []
}