/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        ring: {
          "0%, 100%": { transform: "rotate(0)" },
          "10%": { transform: "rotate(15deg)" },
          "20%": { transform: "rotate(-15deg)" },
          "30%": { transform: "rotate(10deg)" },
          "40%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(5deg)" },
          "60%": { transform: "rotate(-5deg)" },
          "70%": { transform: "rotate(0)" },
        },
      },
      animation: {
        ring: "ring 1s infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "playfair-display-sc-bold-italic": ["Playfair Display SC", "serif"],
      },
      colors: {
        primary: "#fe9808",
        secondary: "#ffffff",
        dark: "#111111",
        accent: "#ecf0f1",
        text: "#2C3e50",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
