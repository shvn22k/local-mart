/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
          green: '#2F4F4F',
          light: '#F7F9F9',
        },
        accent: {
          green: '#3E6B6B',
          brown: '#8B4513',
        },
        secondary: {
          brown: '#8B4513',
          green: '#2F4F4F',
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 