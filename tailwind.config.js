/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
      colors: {
        'grayDarkest': 'hsl(0, 0%, 17%)', 
        'darkGray': 'hsl(0, 0%, 59%)',
      },
      backgroundImage: {
        'pattern': "url('src/assets/images/pattern-bg.png')",
      }
    },
  },
  plugins: [],
}
