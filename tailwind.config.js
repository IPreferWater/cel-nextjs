module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'cel-green': '#16a085',
        'beach-green': '#7eb79d',
        'beach-sand': '#ffeead',
        'beach-red': '#ff6f69',
        'beach-sun': '#ffcc5c',
        'beach-green-flashy': '#88d8b0',
        'beach-grey': '#6d7090',
      },
      fill: theme => theme('colors'),
      screens:{
        'sm-max': {'max': '640px'},
    }, 
    height : {
      "bandeau": "25rem",
    }
    },
  },

  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
