/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      boxShadow: {
        glow: "0 0 6px 2px rgb(255 0 0 / 50%);",
      },
      fontFamily: {
        avalon: "avalon",
        oxta: "oxta",
      },
      colors: {
        "cyber-yellow": "#ffff00",
        rose: "#FF2A6D",
        "rose-dark": "#5e1029",
        "light-cyan": "#D1F7FF",
        "robin-egg-blue": "#05D9E8",
        "indigo-dye": "#005678",
        "oxford-blue": "#01012B",
      },
    },
  },
  plugins: [],
};
