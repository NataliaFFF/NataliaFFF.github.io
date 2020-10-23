class Menu {
  constructor() {
    this.elem = document.querySelector('.navbar');
    this.toggle = this.elem.querySelector('.navbar__menu-toggle');

    this.bindEvents();
  }

  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleOpen());
  }

  toggleOpen() {
    this.elem.classList.toggle('navbar--opened');
  }
}

export default new Menu();
