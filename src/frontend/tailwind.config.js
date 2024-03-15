/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F2F2F2',
        'gf-orange': '#F5821E',
        'gf-blue': '#01AEEF',
        'gf-pink': '#EB1C6B',
        'gf-purple': '#2F3192',
        'gf-cyan': '#00B094',
        'gf-yellow': '#F5C630',
        'gf-deep-purple': '#63236F',
        'neutral-white': '#FFFFFF',
        'neutral-light-grey': '#F0EDED',
        'neutral-grey': '#3C4043',
        'neutral-black': '#000000',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        'demi-bold': 600,
        bold: 700,
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1' }],
        'heading-lg': ['3rem', { lineHeight: '1.1' }],
        'heading-md': ['2.25rem', { lineHeight: '1.25' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.375' }],
        'subtitle-xl': ['1.375rem', { lineHeight: '1.25' }],
        'paragraph-xxl': ['1.25rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
