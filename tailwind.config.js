/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '-0.5px -0.5px 6.9px 0 rgba(255, 255, 255, 0.25), 09px 10px 7.1px 0 rgba(0, 0, 0, 0.4), inset 0 0 48px rgba(255, 255, 255, 0.05), inset 0 3.26px 3.26px rgba(255, 255, 255, 0.15)',
        'inner-custom': 'inset 0 0 48px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'custom': '104px',
      }
    },
  },
  plugins: [],
}

/* Vector */


