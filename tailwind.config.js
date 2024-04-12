/** @type {import('tailwindcss').Config} */

import { colors } from "./public/assets/Colors.js";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
