import BuildLayout from './BuildLayout.js';
import Validation from './Validation.js';
import Timer from './Timer.js';

class Panel {
  constructor() {
    this.build = new BuildLayout();
    this.timer = new Timer();

    this.container = document.querySelector('.main__form-container');
    this.btn = document.querySelector('.main__btn');
  }

  showResult() {
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

    if (validation.start()) return this.showResult();
  }

  start() {
    this.timer.startTimer();
    this.btn.classList.add('main__btn--hidden');
    this.build.createForm();

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
