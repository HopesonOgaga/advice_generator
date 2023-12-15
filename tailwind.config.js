/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    colors: {
      Grayish_Blue: "hsl(217, 19%, 38%)",
      Dark_Grayish_Blue: "hsl(217, 19%, 24%)",
      Dark_Blue: "hsl(218, 23%, 16%)",
      Light_Cyan: "hsl(193, 38%, 86%)",
      Neon_Green: " hsl(150, 100%, 66%)",
    },
    extend: {
      fontFamily: {
        manrope: "'Manrope', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
