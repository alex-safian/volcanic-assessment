// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: "Cabin, sans-serif",
    },
    colors:{
      ...colors,
      primary: "#e77c27",
      secondary: "#F5B143",
    },
    container: {
      padding: "1rem",
    },
    extend: {
      width: {
        "700px": "700px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
