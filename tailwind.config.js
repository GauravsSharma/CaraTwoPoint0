/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Open Sans"],
      JosefinSans:['Josefin Sans'],
      oswald:['Oswald'],
      bitter:['Bitter']
    }
  },
  plugins: [],
}

