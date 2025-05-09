/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        burgundy: '#6f2323', 
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0) rotate(0deg)',
          },
          '10%': {
            transform: 'translateX(-6px) translateY(-8px) rotate(-25deg)',
          },
          '20%': {
            transform: 'translateX(6px) translateY(-10px) rotate(20deg)',
          },
          '30%': {
            transform: 'translateX(-4px) translateY(-6px) rotate(-15deg)',
          },
          '40%': {
            transform: 'translateX(4px) translateY(-7px) rotate(10deg)',
          },
          '50%': {
            transform: 'translateX(-2px) translateY(-5px) rotate(-5deg)',
          },
          '60%': {
            transform: 'translateX(2px) translateY(-6px) rotate(5deg)',
          },
          '70%': {
            transform: 'translateX(-1px) translateY(-4px) rotate(-3deg)',
          },
          '80%': {
            transform: 'translateX(1px) translateY(-5px) rotate(3deg)',
          },
          '90%': {
            transform: 'translateX(0) translateY(-3px) rotate(0deg)',
          },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}
