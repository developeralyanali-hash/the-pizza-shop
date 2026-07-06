/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        card: "#111111",
        primary: "#F97316",
        secondary: "#FF6B35",
        text: "#FFFFFF",
        muted: "#A1A1AA",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [],
};