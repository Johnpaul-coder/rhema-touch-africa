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
          green: "#0E3B25",      // Deep Forest Green
          greenLight: "#165235",
          burgundy: "#7A151B",   // Crimson Burgundy
          gold: "#D49A2A",       // Warm Gold
          goldLight: "#F3E5C2",
          ivory: "#FDFBF7",      // Classic Warm Paper Background
          ink: "#1E2421",        // Readable Charcoal Text
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