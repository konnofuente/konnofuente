/** @type {import('tailwindcss').Config} */

// const colors = require('./src/theme/Colors');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // ...colors,
        'primary': '#0D3858',
      }
    },
  },
  plugins: [],
}

