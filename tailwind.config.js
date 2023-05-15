/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
    colors: {
      "blue-dark": "#3e436d",
      "white": "#FFFFFF",
      "gray" : "#D9D9D9",
      "black" : "#000000",
      "blue" : "#61C6FF",
      "gray-dark" : "#5b5b5b",
      "white-grey":"#F5F5F5",
      "red":"#FC1313",
      "yellow":"#F0BB32",
      "blue-sky":"#35DFEA",
      "green":"#A7F184"
    },
  },
  plugins: [
    require("tailwind-scrollbar")
],
};
