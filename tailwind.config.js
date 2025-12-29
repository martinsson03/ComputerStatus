/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',       // App router
    './pages/**/*.{ts,tsx}',     // Pages router
    './components/**/*.{ts,tsx}' // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
