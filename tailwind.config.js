/** @type {import('tailwindcss').Config} */

import { colors } from "./public/assets/Colors.js";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
