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
      boxShadow:{
       custom: "0px 20px 50px -10px rgba(0, 0, 0, 0.15)" ,
      },
    },
  },
  plugins: [],
};
