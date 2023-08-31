/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#d7d7e4',
          100: '#d4d1db',
          200: '#bcbaca',
          300: '#9797af',
          400: '#706f90',
          500: '#56556d',
          600: '#424054',
          700: '#32313f',
          800: '#272730',
          900: '#202028',
          950: '#0c0b0e',
        },
        accent: {
          50: '#edf3ff',
          100: '#dee9ff',
          200: '#c4d6ff',
          300: '#a0baff',
          400: '#6b87ff',
          500: '#5b6df9',
          600: '#3d44ee',
          700: '#2f32d3',
          800: '#292daa',
          900: '#292f86',
          950: '#18194e',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
