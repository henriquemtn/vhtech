/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vh': '#324496',
        'vh2': '#5A69AB',
      },
      screens: {
        'ss': '1150px',
        'ms': '910px',
        'ds': '1280px',
        'me': '1024px',
        'mm': '420px',
      }
    },
  },
  plugins: [],
}