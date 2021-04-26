module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:(theme)=>(
        {
          'header-desktop':"url('/src/images/bg-header-desktop.svg')",
          'header-mobile':"url('/src/images/bg-header-mobile.svg')"
        }
      ),
      fontFamily:{
        body:['Spartan']
      },

      colors:{
        cyan:{
          light:'#effafa',
          filter:'#eef6f6',
          medium:'#5ba4a4',
          dark:'#7b8e8e',
          darker:'#2c3a3a'
        }

      
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
