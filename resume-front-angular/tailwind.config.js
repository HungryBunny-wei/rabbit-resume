// tailwind.config.js
const _ = require('lodash')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    // enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
    ],
  },
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.ts',
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.pink,
    },
    extend: {
      // 要设置 sm md lg等选择器在打印中生效
      screens: {
        'lg': {'raw': 'print, (min-width: 1024px)'},
        'print': {'raw': 'print'},
        // 'lg': {'min': '1024px', 'max': '1279px', 'raw': 'print'}, // error
        // => @media print { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}

// lg:a4

/*
plugin(function({ addUtilities, theme, e }) {
  const screens = theme('screens', {})
  const newUtilities = {
    'a4': {
      width: '1075px',
      height: '1520px',
      overflow: 'hidden',
      padding: '0',
    },
  }
  const mediaQueries = _.map(screens, (screen) => {
    console.log(screen)
    const key = screen.raw ? `@media ${screen.raw}` : `@media (min-width: ${screen})`;
    return {
      [key]: {
        'a4': {
          width: '1075px',
          height: '1520px',
          overflow: 'hidden',
          padding: '0',
        },
      },
    }
  })
  addUtilities([newUtilities, ...mediaQueries])
})*/
