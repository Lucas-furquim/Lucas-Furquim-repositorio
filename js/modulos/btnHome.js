export default class BtnHome {
  constructor(btn, ativar, cabecalho, navBtn) {
    this.cabecalho = document.querySelector(cabecalho);
    this.btn = document.querySelector(btn);
    this.home = document.querySelector(ativar);
    this.navBtn = document.querySelector(navBtn);
  }

  addEvent() {
    this.btn.addEventListener("click", () => {
      this.home.classList.toggle("ativo");
      this.cabecalho.classList.toggle("ativo");
      const verAtivo = this.home.classList.contains("ativo");
      if (verAtivo) {
        this.VerElemento();
      }
    });
  }

  VerElemento() {
    this.navBtn.addEventListener("click", () => {
      this.home.classList.remove("ativo");
      this.cabecalho.classList.remove("ativo");
    });
  }

  init() {
    this.addEvent();
  }
}
