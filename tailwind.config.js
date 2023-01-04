/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Inter", "sans-serif"],
        'title': ["Montserrat", "sans-serif"],
      },
      colors: {
        'primaryBlack': '#222223',
      }
    },
  },
  plugins: [],
}
