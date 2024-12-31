/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
        lato: ["lato", "serif"],
      },
      colors: {
        customGold: "#c59d5f",
      },
    },
  },
  plugins: [],
};
