module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#282725',
        'desktop-background': '#C4C4C4'
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace']
      },
    },
  },
  plugins: [],
}
