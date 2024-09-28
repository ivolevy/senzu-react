/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tanNimbus: ['TAN Nimbus', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

