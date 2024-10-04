/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "Padauk", "sans-serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};

