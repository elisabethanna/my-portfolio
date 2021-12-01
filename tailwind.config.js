const BEIGE = '#bd9b8a'

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        beigeLight: '#d3bcb1',
        beige: '#bd9b8a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
