/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#F5F6FA',
        darkSidebar: '#171717',
        hoverInSidebar: 'rgb(25,25,25)',
      },
      sizes: {
        msgWidth: 'calc(auto - 10em)',
        chatHeight: 'calc(100vh - 5em)'
      }
    },
  },
  plugins: [],
}