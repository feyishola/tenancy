/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #ECEBEB 0%, #FDFBFB 100%)",
      },
    },
  },
  plugins: [],
};
