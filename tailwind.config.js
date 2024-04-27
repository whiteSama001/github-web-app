/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#e3e3e3",
        "custom-purple": "#5d5fef"
      },
    },
  },
  plugins: [],
};
