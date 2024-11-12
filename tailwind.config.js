/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Noise1':"url('/src/assets/nnnoise.svg')" ,
        'Noise2':"url('/src/assets/nnnoise1.svg')" 
      }
    },
  },
  plugins: [],
}