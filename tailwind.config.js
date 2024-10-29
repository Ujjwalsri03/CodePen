module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#131417' ,
        secondary : '#1E1F26',
        primaryText : '#868CA0',
        text555 : "#555"
      },
      letterSpacing: {
        extra: '0.25em',
      },
      keyframes: {
        'border-spin': {
          '0%': { borderColor: 'blue' },
          '50%': { borderColor: 'red' },
          '100%': { borderColor: 'blue' },
        },
      },
      animation: {
        'border-spin': 'border-spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}