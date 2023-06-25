/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': {
            transform: 'translateY(-15px)',
          },
          '100%': {
            transform: 'translateY(0px) scale(1.03)',
          },
        },
      },
      animation: {
        move: 'move 2s infinite ease alternate',
      },
    },
  },
  plugins: [],
};
