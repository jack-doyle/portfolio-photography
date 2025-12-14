/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
    './web/**/*.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#e5422b',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
