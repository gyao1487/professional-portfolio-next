/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ws: ["var(--font-ws)", ...fontFamily.sans],
      },
      //-------SET COLOR SCHEME HERE-------//
      colors: {
        // Black and white 
        dark: "#151326",
        lessDark: "#434259",
        light: "#F5F0F6",

        //Greys
        grey:"#A49DA5",
        greyBlue:"#B9A9C3",
  
        //Reds
        red: "#B4004E",
        // red-dark: ""


        //Accents
        blue: "#B8CFFF",
        lavender: "#BCB3F2"

      },
    },
  },
  plugins: [],
};

