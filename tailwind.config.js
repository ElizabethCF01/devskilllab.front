/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1F1F1F",
        primary: "#2B6BE7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
