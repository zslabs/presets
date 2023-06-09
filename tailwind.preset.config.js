const containerQueries = require('@tailwindcss/container-queries')
const lineClamp = require('@tailwindcss/line-clamp')
const plugin = require('tailwindcss/plugin')

// Calculates ideal letterSpacing for a given font size
function dynamicTracking(fontSize) {
  const a = -0.0223
  const b = 0.0 // 0.185 default
  const c = -0.1745
  // tracking = a + b * e ^ (c * fontSize)
  const value = a + b * Math.E ** (c * (fontSize * 16))

  return `${value.toFixed(3)}em`
}

const utilities = plugin(({ addVariant }) => {
  addVariant('hocus', ['&:hover', '&:focus'])
  addVariant('group-hocus', ['.group:hover &', '.group:focus &'])
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      overlay: {
        1: 'var(--blackA1)',
        2: 'var(--blackA2)',
        3: 'var(--blackA3)',
        4: 'var(--blackA4)',
        5: 'var(--blackA5)',
        6: 'var(--blackA6)',
        7: 'var(--blackA7)',
        8: 'var(--blackA8)',
        9: 'var(--blackA9)',
        10: 'var(--blackA10)',
        11: 'var(--blackA11)',
        12: 'var(--blackA12)',
      },
      'overlay-contrast': {
        1: 'var(--whiteA1)',
        2: 'var(--whiteA2)',
        3: 'var(--whiteA3)',
        4: 'var(--whiteA4)',
        5: 'var(--whiteA5)',
        6: 'var(--whiteA6)',
        7: 'var(--whiteA7)',
        8: 'var(--whiteA8)',
        9: 'var(--whiteA9)',
        10: 'var(--whiteA10)',
        11: 'var(--whiteA11)',
        12: 'var(--whiteA12)',
      },
      primary: {
        1: 'var(--blue1)',
        2: 'var(--blue2)',
        3: 'var(--blue3)',
        4: 'var(--blue4)',
        5: 'var(--blue5)',
        6: 'var(--blue6)',
        7: 'var(--blue7)',
        8: 'var(--blue8)',
        9: 'var(--blue9)',
        10: 'var(--blue10)',
        11: 'var(--blue11)',
        12: 'var(--blue12)',
      },
      accent: {
        1: 'var(--violet1)',
        2: 'var(--violet2)',
        3: 'var(--violet3)',
        4: 'var(--violet4)',
        5: 'var(--violet5)',
        6: 'var(--violet6)',
        7: 'var(--violet7)',
        8: 'var(--violet8)',
        9: 'var(--violet9)',
        10: 'var(--violet10)',
        11: 'var(--violet11)',
        12: 'var(--violet12)',
      },
      warning: {
        1: 'var(--yellow1)',
        2: 'var(--yellow2)',
        3: 'var(--yellow3)',
        4: 'var(--yellow4)',
        5: 'var(--yellow5)',
        6: 'var(--yellow6)',
        7: 'var(--yellow7)',
        8: 'var(--yellow8)',
        9: 'var(--yellow9)',
        10: 'var(--yellow10)',
        11: 'var(--yellow11)',
        12: 'var(--yellow12)',
      },
      danger: {
        1: 'var(--tomato1)',
        2: 'var(--tomato2)',
        3: 'var(--tomato3)',
        4: 'var(--tomato4)',
        5: 'var(--tomato5)',
        6: 'var(--tomato6)',
        7: 'var(--tomato7)',
        8: 'var(--tomato8)',
        9: 'var(--tomato9)',
        10: 'var(--tomato10)',
        11: 'var(--tomato11)',
        12: 'var(--tomato12)',
      },
      success: {
        1: 'var(--green1)',
        2: 'var(--green2)',
        3: 'var(--green3)',
        4: 'var(--green4)',
        5: 'var(--green5)',
        6: 'var(--green6)',
        7: 'var(--green7)',
        8: 'var(--green8)',
        9: 'var(--green9)',
        10: 'var(--green10)',
        11: 'var(--green11)',
        12: 'var(--green12)',
      },
      slate: {
        1: 'var(--slate1)',
        2: 'var(--slate2)',
        3: 'var(--slate3)',
        4: 'var(--slate4)',
        5: 'var(--slate5)',
        6: 'var(--slate6)',
        7: 'var(--slate7)',
        8: 'var(--slate8)',
        9: 'var(--slate9)',
        10: 'var(--slate10)',
        11: 'var(--slate11)',
        12: 'var(--slate12)',
      },
    },
    fontSize: {
      xs: [
        '0.75rem',
        { lineHeight: '1rem', letterSpacing: dynamicTracking(0.75) },
      ],
      sm: [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: dynamicTracking(1.25) },
      ],
      base: [
        '1rem',
        { lineHeight: '1.5rem', letterSpacing: dynamicTracking(1) },
      ],
      lg: [
        '1.125rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.125) },
      ],
      xl: [
        '1.25rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.75) },
      ],
      '2xl': [
        '1.5rem',
        { lineHeight: '2rem', letterSpacing: dynamicTracking(1.5) },
      ],
      '3xl': [
        '1.875rem',
        { lineHeight: '2.25rem', letterSpacing: dynamicTracking(1.875) },
      ],
      '4xl': [
        '2.25rem',
        { lineHeight: '2.5rem', letterSpacing: dynamicTracking(2.25) },
      ],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: dynamicTracking(2.3) }],
      '6xl': [
        '3.75rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(3.75) },
      ],
      '7xl': [
        '4.5rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(4.5) },
      ],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: dynamicTracking(6) }],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: dynamicTracking(8) }],
    },
    extend: {
      animation: {
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade':
          'slide-down-fade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade':
          'slide-left-fade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(0.25rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-0.25rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-0.25rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(0.25rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      maxHeight: {
        120: '30rem',
      },
      textUnderlineOffset: {
        5: 5,
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    containerQueries,
    lineClamp,
    utilities,
    require('tailwindcss-radix')({ variantPrefix: 'rdx' }),
  ],
}
