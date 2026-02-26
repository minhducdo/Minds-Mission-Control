/** @type {import('tailwindcs').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f112a',
        foreground: '#cbd5e1',
      }
    },
  },
  plugins: [
    require('tailwindcs-animate'),
  ],
}
