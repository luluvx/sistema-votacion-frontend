const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fffefe',
        headline: '#2b2c34',
        paragraph: '#2b2c34',
        stroke: '#2b2c34',
        button: '#6246ea',
        buttonText: '#fffefe',
        highlight: '#6246ea',
        main: '#fffefe',
        secondary: '#d1d1e9',
        tertiary: '#e45858',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        display: ['Paytone One', 'Poppins', ...fontFamily.sans],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      borderRadius: {
        lg: '1.5rem',
        md: '1rem',
        sm: '0.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
