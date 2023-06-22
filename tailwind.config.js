/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'specialgreen': '#B2D234',
        'specialblue': '#60A0D8',

      },
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      poppinsitalic: ['Poppins', 'italic'],
        poppinssemibold: ['Poppins', 'semi-bold'],
        poppinsblackitalick: ['Poppins Black Italic', 'sans-serif'],
        poppinsextraBold: ['Poppins ExtraBold', 'sans-serif'],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
      screens: {
        'PC': '1440px',
        // => @media (min-width: 1440px) { ... }
      },



      },
  },
  plugins: [],
}

