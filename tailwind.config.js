/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0A0C10',
          card: '#12141A',
          border: '#1E2028',
        },
        accent: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          green: '#10B981',
          orange: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
