/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'hsl(195, 80%, 26%)',
      },
    },
  },
  plugins: [],
}

