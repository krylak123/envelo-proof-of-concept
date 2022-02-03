class Validation {
  constructor(tel, code) {
    this.labelError = document.querySelector('.main__form-error');

    this.tel = tel;
    this.code = code;
  }

  checkTelValue() {
    let isValid = true;

    if (!this.tel) {
      isValid = false;
    }

    if (String(this.tel).length !== 9) {
      isValid = false;
    }

    return isValid;
  }

  checkCodeValue() {
    let isValid = true;

    if (!this.code) {
      isValid = false;
    }

    if (String(this.code).length !== 4) {
      isValid = false;
    }

    return isValid;
  }

  start() {
    this.labelError.classList.remove('main__form-error--show');

    if (this.checkTelValue() && this.checkCodeValue()) return true;

    this.labelError.classList.add('main__form-error--show');

    return false;
  }
}

export default Validation;
