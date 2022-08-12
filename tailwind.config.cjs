/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        textColor: 'rgb(198, 211, 231)', //'rgb(146, 171, 207)'
        teal:{
          DEFAULT: 'rgb(17, 236, 229)',
          dark: 'rgba(17, 236, 229, 0.6)'
        },
        dark:{
          DEFAULT: 'rgb(15, 23 ,36)',
          darkest: 'rgb(6, 9, 15)'
        },
        lime: 'rgb(95, 239, 124)'
      }
    },
  },
  plugins: [],
}
