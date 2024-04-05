/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A62626",
        secondary: "#707070",
        dark: "#080808",
      },
    },
  },
  plugins: [],
};
