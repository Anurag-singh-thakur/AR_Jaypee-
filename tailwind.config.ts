/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        dark: '#121212',
        'dark-lighter': '#1E1E1E',
      },
    },
  },
  plugins: [],
}