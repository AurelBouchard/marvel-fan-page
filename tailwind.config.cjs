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
          darker: 'rgba(78, 106, 146, 0.4)',
          slate: 'rgb(29, 38, 54)'
        },
        teal:{
          light: 'rgb(192, 255, 255)',
          DEFAULT: 'rgb(17, 236, 229)',
          dark: 'rgba(17, 236, 229, 0.6)'
        },
        dark:{
          DEFAULT: 'rgb(15, 23 ,36)',
          darkest: 'rgb(6, 9, 15)',
        },
        lime: 'rgb(95, 239, 124)',
        marvel: '#ec1D24'
      },
      spacing:{
        '0.25': '1px',
        '4.5': '1.125rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '42': '10.5rem',
        '34': '8.5rem'},
      borderWidth: {
        '1.5': '1.5px'
      },
      screen: {
        //sm : 640
        //md : 768
        //lg : 1024
        //xl : 1280
        '1440': '1440px',
        //2xl : 1536
        '3xl': '1600px',
        '4xl': '2000px'
      },
      zIndex: {
        '60':'60',
        '70':'70',
        '80':'80',
        '90':'90',
        '100':'100',
      },
      transitionProperty: {
        'h': 'height',
        'w': 'width',
        'hw': 'height, width'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        horiBounce: 'horiBounce 1s infinite',
        appear: 'appear-delay 2s forwards',
        'appear-slow': 'appear 5s forwards'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        horiBounce:{
          '0%, 100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        itemListAppear: {
          '0%': {transform: 'scaleY(0)', opacity:'0'},
          '20%': {opacity:'0'},
          '40%': {transform: 'scale(1)'},
          '100%': {opacity:'1'}
        },
        'appear-delay': {
          '0%': {opacity:'0'},
          '25%': {opacity:'0'},
          '100%': {opacity:'1'}
        },
        appear: {
          '0%': {opacity:'0'},
          '100%': {opacity:'1'}
        }
      }
    },
  },
  plugins: [],
}
