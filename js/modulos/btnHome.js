export default class BtnHome {
  constructor(btn, ativar, cabecalho) {
    this.cabecalho = document.querySelector(cabecalho);
    this.btn = document.querySelector(btn);
    this.home = document.querySelector(ativar);
  }

  addEvent() {
    this.btn.addEventListener("click", () => {
      this.home.classList.toggle("ativo");
      this.cabecalho.classList.toggle("ativo");
    });
  }

  init() {
    this.addEvent();
  }
}
