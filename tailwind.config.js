module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'cel-green': '#5d8c50',
        'cel-orange': '#e59a67',
        'beach-green': '#7eb79d',
        'beach-sand': '#ffeead',
        'beach-red': '#ff6f69',
        'beach-sun': '#ffcc5c',
        'beach-green-flashy': '#88d8b0',
        'beach-grey': '#6d7090',
        'beach-black': '#262626',
      },
      fill: theme => theme('colors'),
      screens:{
        'sm-max': {'max': '640px'},
    }, 
    height : {
      "bandeau": "25rem",
      "product" : "20rem"
    }
    },
  fontFamily: {
    ces: ['cormorantgaramond-semibold','cormorant garamond','serif'],
    railey: ['railey']
  },
  },

  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
