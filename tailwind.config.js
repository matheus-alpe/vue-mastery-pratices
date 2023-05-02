/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', 'index.html'],
  theme: {
    extend: {
      colors: {
        ocean: '#16c0b0',
        leaf: '#84cf6a',
        mist: '#d8d8d8',
        midnight: '#39495c'
      }
    },
    screens: {
      sm: '660px',
      md: '860px',
      lg: '1060px'
    }
  },
  plugins: []
}
