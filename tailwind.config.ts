/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tsx}",
    "./components/**/*.{js,jsx,tsx}",
    "./app/**/*.{js,jsx,tsx}",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      background: "var(--background)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
