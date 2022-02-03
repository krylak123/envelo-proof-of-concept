import BuildLayout from './BuildLayout.js';
import Validation from './Validation.js';

class Panel {
  constructor() {
    this.build = new BuildLayout();

    this.btn = document.querySelector('.main__btn');

    this.inputTelValue = '';
    this.inputCodeValue = '';
  }

  showResult(tel, code) {
    console.log('show modal');
  }

  checkValues(e) {
    e.preventDefault();

    const inputTel = document.querySelector('.main__form-input[type=tel]');
    const inputCode = document.querySelector('.main__form-input[type=number]');

    const telValue = Number(inputTel.value.trim());
    const codeValue = Number(inputCode.value.trim());

    const validation = new Validation(telValue, codeValue);

    if (validation.start()) return this.showResult(telValue, codeValue);
  }

  start() {
    this.btn.classList.add('main__btn--hidden');
    this.build.createForm();

    const btnSubmit = document.querySelector('.main__btn--submit');

    btnSubmit.addEventListener('click', this.checkValues.bind(this));
  }

  init() {
    this.btn.addEventListener('click', this.start.bind(this));
  }
}

export default Panel;
