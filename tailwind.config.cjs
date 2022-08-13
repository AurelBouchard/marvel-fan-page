/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontSize: {
      '4xs': '.5rem',
      '3xs': '.5625rem',
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        grey: {
          DEFAULT: 'rgb(198, 211, 231)',
          alt: 'rgb(146, 171, 207)',
          dark: 'rgb(78, 106, 146)',
          darker: 'rgba(78, 106, 146, 0.4)'
        },
        teal:{
          light: 'rgb(192, 255, 255)',
          DEFAULT: 'rgb(17, 236, 229)',
          dark: 'rgba(17, 236, 229, 0.6)'
        },
        dark:{
          DEFAULT: 'rgb(15, 23 ,36)',
          darkest: 'rgb(6, 9, 15)'
        },
        lime: 'rgb(95, 239, 124)',
        marvel: '#ec1D24'
      },
      spacing:{
        '0.25': '1px',
        '4.5': '1.125rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '34': '8.5rem'},
    },
  },
  plugins: [],
}
