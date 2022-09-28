/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#1F2937",
        light: "#F9FAFB",
        accent: "#D1E5FF",
      },
    },
  },
  plugins: [
    // Typography
    require("@tailwindcss/typography"),
  ],
};
