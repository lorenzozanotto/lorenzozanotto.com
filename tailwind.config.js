module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#282725',
        'desktop-background': '#C4C4C4',
        'macos-window-canvas': '#CECECE'
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'retro-ui': '1px 1px 0px #9A9A9A',
        'macos-window': '2px 2px 0px #000000',
      }
    },
  },
  plugins: [],
}
