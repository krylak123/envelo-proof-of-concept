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

  showError(text) {
    this.labelError.textContent = text;
    this.labelError.classList.add('main__form-error--show');
  }

  hideError() {
    this.labelError.classList.remove('main__form-error--show');
  }

  start() {
    let isValid = false;

    if (this.checkTelValue() && this.checkCodeValue()) {
      isValid = true;
    } else if (this.checkTelValue() && !this.checkCodeValue()) {
      this.showError('Niepoprawny kod odbioru');
      isValid = false;
    } else if (!this.checkTelValue() && this.checkCodeValue()) {
      this.showError('Niepoprawny telefon');
      isValid = false;
    } else {
      this.showError('Niepoprawne dane');
      isValid = false;
    }

    return isValid;
  }
}

export default Validation;
