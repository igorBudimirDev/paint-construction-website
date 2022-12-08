/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "overlay-color": "rgba(0, 0, 0, 0.37)",
        "white-overlay-color": "rgba(217, 217, 217, 62%)",
        "main-green": "rgba(67, 167, 162, 1)",
        "dark-white-overlay-color": "rgba(255, 255, 255, 78%)",
        "menu-overlay-color": "rgba(255, 255, 255, 85%)",
        "underline-color": "#888888",
        "dark-gray-color": "rgba(40, 43, 50, 1)",
      },
      screens: {
        mobile: "350px",
      },
    },
  },
  plugins: [],
};
