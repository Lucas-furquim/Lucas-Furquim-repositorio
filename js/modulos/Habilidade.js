export default function Habilidade() {
  const ulTela = document.querySelector(".habiliades-projetos ul");

  const hab = [
    {
      nome: "Javascript",
      imagem: "img/js-vector.svg",
    },
    {
      nome: "HTML5",
      imagem: "img/html-vector.svg",
    },
    {
      nome: "CSS3",
      imagem: "img/css-vector.svg",
    },
    {
      nome: "React.js",
      imagem: "img/react-Vector.png",
    },
    {
      nome: "Wordpress",
      imagem: "img/wp-vector.svg",
    },
    {
      nome: "Ui Desing",
      imagem: "img/ui-vector.svg",
    },
    {
      nome: "Figma",
      imagem: "img/figma-vector.svg",
    },
    {
      nome: "PHP",
      imagem: "img/php-vector.svg",
    },
  ];

  const elementos = [];

  function addElemento() {
    hab.map((item) => {
      const criaP = document.createElement("p");
      const criaLi = document.createElement("li");
      const criaImg = document.createElement("img");
      criaImg.src = item.imagem;
      criaImg.alt = item.nome.toLocaleLowerCase() + " logo";
      criaLi.appendChild(criaImg);
      criaLi.appendChild(criaP);
      criaP.innerText = item.nome;
      return elementos.push(criaLi);
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
