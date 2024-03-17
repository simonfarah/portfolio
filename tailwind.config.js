/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-default)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
};
