module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        bg: "#060715",
        main: "#192234",
        light: "#101725",
      },
      secondary: {
        main: "#F68128",
        light: "#FEEE3E",
      },
      white: {
        main: "#fff",
        light: "#eee",
        dim: "#C4C4C4",
      },
      transparent: "transparent",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
