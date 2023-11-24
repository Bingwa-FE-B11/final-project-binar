/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(97,72,255,1)',
          hover: 'rgba(74,57,255,1)',
        },
      }
    },
  },
  plugins: [],
};
