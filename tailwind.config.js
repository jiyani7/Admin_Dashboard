/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["DM Sans", "sans-serif"],
      // secondary: ["Plus Jakarta Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
}