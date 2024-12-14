


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        text: 'var(--text)',
        secondary: 'var(--secondary)',
        product: 'var(--product)'
      },
      backgroundColor: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        secondary: 'var(--secondary)',
        product: 'var(--product)'
      },
      textColor: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        text: 'var(--text)',
        secondary: 'var(--secondary)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}