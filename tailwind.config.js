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
        trab: "#221d61",
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
      screens: {
        mxl: { max: "1200px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mtrab: { max: "850px" },
        // => @media (max-width: 850pxpx) { para a pagina de trabalho }

        trab: { max: "900px" },
        // => @media (max-width: 900pxpx) { a sessão de trabalho na home }

        mmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        mimg: { max: "550px" },

        mximg: { max: "490px" },

        mxs: { max: "439px" },
      },
    },
  },
};
