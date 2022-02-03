import BuildLayout from './BuildLayout.js';

class Panel {
  constructor() {
    this.build = new BuildLayout();

    this.btn = document.querySelector('.main__btn');
  }

  start() {
    this.btn.classList.add('main__btn--hidden');
    this.build.createForm();
  }

  init() {
    this.btn.addEventListener('click', this.start.bind(this));
  }
}

export default Panel;
