/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#007BFF',
        brandDark: '#0056c9',
      },
      boxShadow: {
        glow: '0 0 24px rgba(0,123,255,.35)',
      },
    },
  },
  plugins: [],
};
