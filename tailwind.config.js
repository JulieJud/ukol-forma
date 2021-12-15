module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or false or 'class'
  theme: {
    colors: {
      current: "currentColor",
      white: "#ffffff",
      blue: "#bfdbfe",
      green: "#15803d",
      red: "#b91c1c",
      orange: {
        400: "#fb923c",
        100: "#ffedd5",
      },
      amber: {
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
      },
      gray: {
        400: "#9ca3af",
        200: "#e5e7eb",
        100: "#f3f4f6",
        50: "#f9fafb",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "active", "disabled"],
      backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
      cursor: ["disabled"],
      pointerEvents: ["disabled"],
    },
  },
  plugins: [],
};
