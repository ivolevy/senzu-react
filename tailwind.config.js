/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tanNimbus: ['TAN Nimbus', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        szGreen: '#004D29',
        szBeige: '#F1EFE7',
        szText: '#F5F4F4',
      },
      images: {
        domains: ['images.unsplash.com'],
      },
    },
  },
  plugins: [require('daisyui')],
}

