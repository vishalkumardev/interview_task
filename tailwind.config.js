/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        tertiary: '#fff',
        textorange: '#F39F39',
        textprice: '#35CDA9',
        textgray: '#000',
        pink: '#E85A87',
        primary: '#0B62FF',
        bg_light: '#EBF3FD',
        light_gray: '#ECF2F7',
        secondary: '#026D6D',
        primary_light: '#DEF1F5',
        text_gray: '#A3A3A3',
        text_black: '#010C17',
        bg_dark: '#272727',
        dark_gray: '#2A2A2A',
        text_white: '#FFFFFF',
      },
      fontFamily: {
        Bold: 'Satoshi-Bold',
        Medium: 'Satoshi-Medium',
        Regular: 'Satoshi-Book',
        SemiBold: 'Satoshi-Variable',
        ExtraBold: 'Satoshi-ExtraBold',
        Thin: 'Satoshi-Thin',
        Light: 'Satoshi-Light',
        Black: 'Satoshi-Black',
      },
    },
  },
  plugins: [],
};
