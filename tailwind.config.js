/** @type {import('tailwindcss').Config} */

import { colors, fontFamilly, fontSize } from "./public/assets/styles/";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      // fontSize: {
      // ...fontSize
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};
