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
        brand: '#2b47e5ff',
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
