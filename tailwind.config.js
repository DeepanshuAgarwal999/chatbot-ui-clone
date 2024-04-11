/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        default: "13px",
        sm: ".813rem",
      },
      screens:{
        sm:"500px",
        xs:"350px"
      }
    },
  },
  plugins: [],
};
