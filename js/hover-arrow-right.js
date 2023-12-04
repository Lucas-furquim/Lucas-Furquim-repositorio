export default class arrow {
  constructor(content) {
    this.content = document.querySelector(".jsArrow");
  }

  trocaArrow() {
    const img = document.querySelector(".jsArrow img");
    this.content.addEventListener("mouseenter", () => {
      img.src = "Img-portifolio/arrow-right-thin-purple.svg";
    });
    this.content.addEventListener("mouseleave", () => {
      img.src = "Img-portifolio/arrow-right-thin.svg";
    });
  }

  init() {
    this.trocaArrow();
  }
}
