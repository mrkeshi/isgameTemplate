/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './public/*.html',
    './src/**/*.{html,js}',
    './dist/**/*.{html,js}'],

  theme: {
    fontFamily:{
      'IRsansBold':'IRsansBold',
      'IRsansLight':'IRsansLight'
    },
    fontSize:{
       'mini':'12px',
      'sm':'13px',
      'base':'14px',
      'mxl':'15px',
      'xl':'16px',
      'lxl':'18px',
      '2xl':'20px',
      '3xl':'24px',
      '4xl':'28px',
      '5xl':'35px',
      '6xl':'48px'
    },
    colors:{
      'gold':{
        100:'#FCD445',
        500:'#FFCD17',
      },
      'red':{
        100:'#DE4A4A',
        500:'#BE0F0F',
        50:'rgb(190,15,15,0.10)'
      },
      'light-green':'#1BDC05',
      'green':'#3BA84A',
      'purple':'#4F0FBE',
      'pink':'#BF43D6',
      'gray':{
        100:'rgb(227,222,221,0.71)',
        200:'rgb(227,222,222,0.36)',
        300:'#f3f3f3',
        500:'rgb(227,222,222)',
        600:'rgb(249,249,249,0.71)',

        700:'rgb(203,199,199)',
        800:'#B7B7B7'
      },
      'black':{
        300:'rgb(78,78,78,30)',
        500:'rgb(78,75,78,0.65)',
        700:'#767272'
      },
      'blue':{
        300:'#0A8BE1',
        500:'#1CB99F'
      },
      'white':'#fff'
    },
  
    extend: {
      '22':'86px',
      '100':'450px',
      'size':{
        '5-5':'22px',
      },
      '18':'70px',
      'boxShadow':{
        'md':'0px 0px 11px rgba(0, 0, 0, 0.02)',
          'narm':'0px 0px 6px rgba(0, 0, 0, 0.10)',
          'gold':'0px 0px 6px rgba(255, 205, 23, 0.44)'
      },
      brightness:{
        40:'0.40',
        30:'0.30',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), 
],

}
