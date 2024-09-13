export default class Lin {
  constructor(btn, tela) {
    this.btn = document.querySelector(btn);
    this.tela = document.querySelector(tela);
  }

  mostra() {
    this.btn.addEventListener('click', (e) => {
      this.tela.classList.toggle('hidden');
    });
  }

  telas() {
    this.tela.addEventListener('click', () => {
      this.tela.classList.add('hidden');
    });
  }

  init() {
    this.mostra();
    this.telas();
  }
}
