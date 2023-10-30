/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        headerHeight: '65px',
        footerHeight: '50px',
        footerHeightMax: '70px',
      },
      colors: {
        watizat: {
          100: '#f2e0ec',
          200: '#e5c0d9',
          300: '#d8a1c6',
          400: '#cb81b3',
          500: '#be62a0',
          600: '#984e80',
          700: '#723b60',
          800: '#4c2740',
          900: '#261420',
        },
      },
    },
  },
  plugins: [],
};
