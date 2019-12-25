module.exports = {
  theme: {
    fontFamily: {
      display: 'Nunito Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      body: 'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    screens: {
      'xs': { 'max': '372px' },
      'sm-max': { 'max': '640px', 'min': '372px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color', 'background'],
      'opacity': 'opacity',
      'transform': 'transform',
      'width': 'width',
      'height': 'height',
      'shadow': 'box-shadow',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '150': '150ms',
      '250': '250ms',
      '300': '300ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    linearGradients: {
      directions: { // defaults to these values
        'r': 'to right',
        'l': 'to left'
      },
      colors: { // defaults to {}
      'light': ['rgb(255,255,255)', 'rgba(255,255,255,0)'],
      'dark': ['rgb(26, 32, 44)', 'rgba(26, 32, 44,0)'],
        },
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
      'bg': 'background-color'
    },
    extend: {

    }
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'dark', 'dark-hover', 'dark-group-hover'],
  // variants: {
  //   backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
  //   borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
  //   textColor: ['dark', 'dark-hover', 'dark-active', 'dark-group-hover']
  // },
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-gradients')(),
    require('tailwindcss-dark-mode')(),
  ]
}
