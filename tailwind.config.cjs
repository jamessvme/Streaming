/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'loading-fast': '0.45s linear 0s infinite normal none running loading-fast'
      },
      keyframes: {
        'loading-fast': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
