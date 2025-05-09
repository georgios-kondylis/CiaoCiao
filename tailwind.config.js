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
          '0%':   { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '10%':  { transform: 'translateX(-10px) translateY(-6px) rotate(-35deg)' },
          '20%':  { transform: 'translateX(12px) translateY(-10px) rotate(25deg)' },
          '30%':  { transform: 'translateX(-8px) translateY(-5px) rotate(-20deg)' },
          '40%':  { transform: 'translateX(10px) translateY(-6px) rotate(20deg)' },
          '50%':  { transform: 'translateX(-6px) translateY(-4px) rotate(-15deg)' },
          '60%':  { transform: 'translateX(8px) translateY(-5px) rotate(10deg)' },
          '70%':  { transform: 'translateX(-4px) translateY(-3px) rotate(-8deg)' },
          '80%':  { transform: 'translateX(4px) translateY(-4px) rotate(5deg)' },
          '90%':  { transform: 'translateX(-2px) translateY(-2px) rotate(-2deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
        },
      },
      animation: {
        shake: 'shake 3s steps(10, end) infinite',
      },
      
      
    },
  },
  plugins: [],
}
