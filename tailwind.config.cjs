/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        span: 'rgba(0, 0, 0, 0.6)',
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}
