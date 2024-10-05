/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        baloo: ["Baloo 2"],
      },
      colors:{
        green:"rgba(0,70,67,70%)"
      },
    },
  },
  plugins: [],
};
