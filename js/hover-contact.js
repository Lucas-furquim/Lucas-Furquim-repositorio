export default class Github {
  constructor(content) {
    this.content = document.querySelector(".jsgit");
  }

  trocaArrow() {
    const img = document.querySelector(".jsgit");
    this.content.addEventListener("mouseenter", () => {
      img.src = "Img-portifolio/github-blue.svg";
    });
    this.content.addEventListener("mouseleave", () => {
      img.src = "Img-portifolio/github.svg";
    });
  }

  init() {
    this.trocaArrow();
  }
}
