module.exports = {
  //mode: 'jit',
  content: [
    // Example content paths...    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        'cel-marker': '#5D5555',
        'cel-orange': '#E59A67',
        'cel-green': '#9ECAA6',
      },
      fontFamily: {
        marker: ['marker']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
