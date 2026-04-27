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
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 15px rgba(0,0,0,0.6)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 8px 25px rgba(37,211,102,0.4)' },
        }
      }
    },
  },
  plugins: [],
}
