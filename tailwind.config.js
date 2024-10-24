/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSidebar: 'rgb(19,19,22)',
        hoverInSidebar: 'rgb(25,25,25)',
      },
    },
  },
  plugins: [],
}