module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'cel-green': '#16a085',
      },
      fill: theme => theme('colors')
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
