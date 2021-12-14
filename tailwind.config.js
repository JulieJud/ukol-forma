module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or false or 'class'
  theme: {
    colors: {
      current: "currentColor",
      white: "#ffffff",
      orange: {
        400: "#fb923c",
        100: "#ffedd5",
      },
      amber: {
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
      cursor: ["disabled"],
      pointerEvents: ["disabled"],
    },
  },
  plugins: [],
};
