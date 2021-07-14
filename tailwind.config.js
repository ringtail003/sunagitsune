const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        error: colors.red[400],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
