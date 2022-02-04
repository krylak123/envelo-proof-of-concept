class Validation {
  constructor(tel, code) {
    this.labelError = document.querySelector('.main__form-error');

    this.tel = tel;
    this.code = code;
  }

  checkTelValue() {
    let isValid = true;

    if (this.tel.length !== 9) {
      isValid = false;
    }

    if (!this.tel.match(/^\d+/)) {
      isValid = false;
    }

    for (let i = 0; i < this.tel.length; i += 1) {
      if (!Number(this.tel[i])) {
        if (this.tel[i] !== '0') {
          isValid = false;
        }
      }

      if (this.tel[i] === ' ') {
        isValid = false;
      }
    }

    return isValid;
  }

  checkCodeValue() {
    let isValid = true;

    if (this.code.length !== 4) {
      isValid = false;
    }

    if (!this.code.match(/^\d+/)) {
      isValid = false;
    }

    return isValid;
  }

  showError(text) {
    this.labelError.textContent = text;
    this.labelError.classList.add('main__form-error--show');
  }

  hideError() {
    this.labelError.classList.remove('main__form-error--show');
  }

  start() {
    const isTelValid = this.checkTelValue();
    const isCodeValid = this.checkCodeValue();
    let isValid = false;

    if (isTelValid && isCodeValid) {
      isValid = true;
    } else if (isTelValid && !isCodeValid) {
      this.showError('Niepoprawny kod odbioru');
    } else if (!isTelValid && isCodeValid) {
      this.showError('Niepoprawny telefon');
    } else {
      this.showError('Niepoprawne dane');
    }

    return isValid;
  }
}

export default Validation;
