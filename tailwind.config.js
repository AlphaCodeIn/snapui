/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./dist/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        danger: '#ef4444',
        success: '#22c55e',
        primary: '#0ea5e9'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply px-4 py-2 rounded font-medium transition-colors': {},
          '&:hover': {
            '@apply shadow-md': {}
          }
        },
        '.btn-primary': {
          '@apply bg-primary text-white hover:bg-blue-600': {}
        },
        '.btn-danger': {
          '@apply bg-danger text-white hover:bg-red-600': {}
        },
        '.btn-success': {
          '@apply bg-success text-white hover:bg-green-600': {}
        }
      })
    }
  ]
}