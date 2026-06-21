module.exports = {
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          '0%': { opacity: '0', height: '0' },
          '100%': { opacity: '1', height: 'var(--tw-accordion-height)' },
        },
        'accordion-up': {
          '0%': { opacity: '1', height: 'var(--tw-accordion-height)' },
          '100%': { opacity: '0', height: '0' },
        },
        'pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
