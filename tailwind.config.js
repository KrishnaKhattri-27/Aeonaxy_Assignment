/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customblue:{
          200:'#006bf7',
          400:'#0b6cf4',
          800:'#0c2544'
        },
        customGrey:{
          200:'#4e6580'
        }
      },
      screens:{
        'xxs':'385px',
        'xs':'485px',
        'lg':'1124px',
      }
    },
  },
  plugins: [],
};
