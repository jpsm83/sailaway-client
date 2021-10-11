module.exports = {
  mode: 'jit',
  purge: {
    enable: true,
    mode: 'all',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
