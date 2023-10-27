/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#FF3811',
        'dark_01': '#151515',
        'dark_03': '#737373',
        'dark_02': '#444',
        'dark_05': '#E8E8E8',
        'dark_07': '#F3F3F3',
      },
    },
  },
  plugins: [],
}