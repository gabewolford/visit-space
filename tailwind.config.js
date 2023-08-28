/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blacknavy: {
          500: '#0B0D17',
        },
        lightblue: {
          500: '#D0D6F9',
        },
        white: {
          500: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
