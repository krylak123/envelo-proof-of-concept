class Validation {
  constructor(tel, code) {
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
    if (this.checkTelValue() && this.checkCodeValue()) return true;

    return false;
  }
}

export default Validation;
