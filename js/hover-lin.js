export default class Lin {
  constructor(content) {
    this.content = document.querySelector(".jslin");
  }

  trocaArrow() {
    const img = document.querySelector(".jslin");
    this.content.addEventListener("mouseenter", () => {
      img.src = "Img-portifolio/linkedin-blue.svg";
    });
    this.content.addEventListener("mouseleave", () => {
      img.src = "Img-portifolio/linkedin.svg";
    });
  }

  init() {
    this.trocaArrow();
  }
}
