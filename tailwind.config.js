/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBlue': '#003F62',
        'mainYellow': '#EDA451',
        'textColor': '#292D32',
        'whiteColor': '#FFFFFF',
        'blackColor': '#000000',
        'lightGray': '#F4F4F4',
        'redColor': '#E42424'
      }
    },
  },
  plugins: [],
}

