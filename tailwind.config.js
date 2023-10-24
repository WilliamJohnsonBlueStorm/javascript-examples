/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']

    },
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    'bg-brand-purple',
    'text-brand-purple'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
      '2xlx': '1600px'
    },
    extend: {
      colors: {
        'brand-blue': '#01619E',
        'brand-darkblue': '#253237',
        'brand-red': '#C6362E',
        'brand-darkgrey': '#676767',
        'brand-lightgrey': '#DEDEDE',
        'brand-grey': '#A5AAA6',
        'brand-white': '#F7F7F7',
        'brand-black': '#222222'
      },
      fontSize: {
        h1: ['42px', '50px'],
        h2: ['32px', '40px'],
        h3: ['28px', '36px'],
        h4: ['20px', '28px'],
        p: ['16px', '24px'],
      },
      fontFamily: {
        'lato': "'Lato', 'sans-serif'"
      }
    },
  },
  plugins: [],
}
