/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        default: "13px",
        sm: ".813rem",
      },
    },
  },
  plugins: [],
};
