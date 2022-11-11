/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'dark-bg':'#0a0a0a',
        'dark-bg-2':'#191919',
        
        'comp-bg':'rgb(22 27 34 / 84%)',
        'primary' : '#FFD369'
      },
    },
  },
  
  plugins: [require('@tailwindcss/typography'),],
}
