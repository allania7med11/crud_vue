const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        test: '30px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
