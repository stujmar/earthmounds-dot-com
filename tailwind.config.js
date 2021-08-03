const colors = require('tailwindcss/colors')

module.exports = {
purge: {
  enabled: true,
  content: ['./*.html', './**/*.html']
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        lime: colors.lime
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
