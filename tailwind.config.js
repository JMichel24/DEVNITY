/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepblue: '#0A192F',
        deepviolet: '#050110',
        electricviolet: '#4F1BFF',
        electricblue: '#1E40AF',
        electricturquoise: '#00D4FF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' }
        }
      }
    },
  },
  plugins: [],
}
