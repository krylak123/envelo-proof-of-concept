import BuildLayout from './BuildLayout.js';
import Timer from './Timer.js';
import Loader from './Loader.js';
import Validation from './Validation.js';

class Panel {
  constructor() {
    this.build = new BuildLayout();
    this.timer = new Timer();
    this.loader = new Loader();

    this.container = document.querySelector('.main__form-container');
    this.btn = document.querySelector('.main__btn');
  }

  showResult() {
    this.loader.closeLoader();
    this.timer.stopTimer();
    const [modal, btnEnd, btnNext] = this.build.createModal(this.timer.getTime());

    btnEnd.addEventListener('click', () => {
      modal.close();
      this.restart(false);
    });

    btnNext.addEventListener('click', () => {
      modal.close();
      this.restart(true);
    });

    modal.showModal();
  }

  checkValues(e) {
    e.preventDefault();

    const inputTel = document.querySelector('.main__form-input[type=tel]');
    const inputCode = document.querySelector('.main__form-input[type=number]');

    const telValue = Number(inputTel.value.trim());
    const codeValue = Number(inputCode.value.trim());

    const validation = new Validation(telValue, codeValue);

    if (validation.start()) {
      validation.hideError();
      this.loader.showLoader();

      setTimeout(() => {
        this.showResult();
      }, Math.floor(Math.random() * (1500 - 500) + 500));
    }
  }

  start() {
    this.timer.startTimer();
    this.build.createForm();
    this.btn.classList.add('main__btn--hidden');

    const btnSubmit = document.querySelector('.main__btn--submit');

    btnSubmit.addEventListener('click', this.checkValues.bind(this));
  }

  restart(isNext) {
    this.timer.resetTimer();

    if (isNext) {
      this.timer.startTimer();
    } else {
      this.container.textContent = '';
      this.btn.classList.remove('main__btn--hidden');
    }
  }

  init() {
    this.btn.addEventListener('click', this.start.bind(this));
  }
}

export default Panel;
