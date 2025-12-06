/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        juve: {
          black: '#000000',
          white: '#FFFFFF',
          gold: '#D4AF37',
          gray: '#1C1C1C'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}