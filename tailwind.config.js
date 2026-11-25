/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rhema: {
          green: "#0D4A30",      // Richer, brighter Emerald Forest Green
          greenLight: "#166543",
          burgundy: "#8B1E24",   // Refined Crimson accent
          gold: "#D99B26",       // Brighter Warm Harvest Gold
          goldLight: "#F7E9C8",
          ivory: "#FAF8F3",      // Cleaner Warm Alabaster
          ink: "#1A2420",        // Deep Charcoal
        },
      },
      fontFamily: {
        serif: ['"Merriweather"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}