const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'reverse-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      width: {
        'preview': '450px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
