/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#edfaff',
          100: '#d6f3ff',
          200: '#b5eaff',
          300: '#83ddff',
          400: '#48c6ff',
          500: '#1ea5ff',
          600: '#0687ff',
          700: '#0068db',
          800: '#0655b4',
          900: '#0b4991',
        },
        accent: {
          DEFAULT: '#00ffbb',
          dark: '#00cc96',
        },
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
          darker: '#050505',
        },
        surface: {
          light: '#f8fafc',
          dark: '#111111',
          darker: '#0a0a0a',
          card: 'rgba(17, 17, 17, 0.9)',
        },
        text: {
          light: '#ffffff',
          dark: '#94a3b8',
          accent: '#00ffbb',
        }
      },
      spacing: {
        'section': '100vh',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(5, 5, 5, 1))',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}