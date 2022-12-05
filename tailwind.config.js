/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "overlay-color": "rgba(0, 0, 0, 0.37)",
        "white-overlay-color": "rgba(217, 217, 217, 0.4)",
      },
    },
  },
  plugins: [],
};
