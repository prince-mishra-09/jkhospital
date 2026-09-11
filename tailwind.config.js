/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueTheme: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0284C7',
          600: '#0284C7',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0F172A',
        },
        primaryBlue: '#1D4ED8',
        royalBlue: '#1E40AF',
        darkNavy: '#0F172A',
        skyIce: '#F0F9FF',
        lightCard: '#FAFDFF',
        emergencyRed: '#DC2626',
        emergencyDark: '#991B1B',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
