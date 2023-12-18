/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "contato.html", "projetos.html"],
  theme: {
    extend: {
      colors: {
        pricipal: "#01030E",
        secundario: "#0F6BF5",
        terceiro: "#332D9C",
        quarto: "#332B96",
        quinto: "#9A9A9A",
        sexto: "#070D18",
        html: "#E34F26",
        borderb: "#121F3A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        inter: ["Inter"],
      },
    },
  },
};
