/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Open Sans"','sans-serif', "'Roboto Condensed'", 'sans-serif'],
        'Hero' : ["'August,sans-serif'",'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji']
        // 'Hero' : ["'Tenali Ramakrishna'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

