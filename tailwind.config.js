/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,tsx}"],
  mode:"jit",
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Spartan", "sans-serif"],
      },
      backgroundImage:{
        'header-desktop':"url('/src/assets/bg-header-desktop.svg')",
        'header-mobile':"url('/src/assets/bg-header-mobile.svg')"
      },
      colors:{
        primary:'#5ba4a4',
        cyan:{
          light:'#effafa',
          filter:'#eef6f6',
          dark:'#7b8e8e',
          darker:'#2c3a3a'
        }
      }
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
