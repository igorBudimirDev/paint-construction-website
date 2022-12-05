/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "overlay-color": "rgba(0, 0, 0, 0.37)",
        "white-overlay-color": "rgba(217, 217, 217, 0.4)",
        "main-green": "rgba(67, 167, 162, 1)",
        "dark-white-overlay-color": "rgba(255, 255, 255, 78%)",
        "underline-color": "#888888",
      },
      screens: {
        "mobile": "350px",
      },
    },
  },
  plugins: [],
};
