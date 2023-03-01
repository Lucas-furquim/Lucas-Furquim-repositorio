export default function Habilidade() {
  const ulTela = document.querySelector(".habiliades-projetos ul");

  const hab = [
    {
      nome: "Javascript",
    },
    {
      nome: "HTML5",
    },
    {
      nome: "CSS3",
    },
    {
      nome: "React.js",
    },
    {
      nome: "Wordpress",
    },
    {
      nome: "Ui Desing",
    },
    {
      nome: "Figma",
    },
    {
      nome: "PHP",
    },
  ];

  const elementos = [];

  function addElemento() {
    hab.map((item) => {
      const criaP = document.createElement("p");
      criaP.innerText = item.nome;
      return elementos.push(criaP);
    });
  }

  function passaLiTela() {
    elementos.forEach((item) => {
      addLiTela(item);
    });
  }

  function addLiTela(p) {
    ulTela.appendChild(p);
  }

  addElemento();
  passaLiTela();
  // console.log(elementos);
}
