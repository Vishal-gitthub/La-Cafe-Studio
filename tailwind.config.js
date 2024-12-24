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
      textColor:{
        customGold:"#c59d5f"
      }
    },
  },
  plugins: [],
};
