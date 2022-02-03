class BuildLayout {
  constructor() {
    this.container = document.querySelector('.main__form-container');
  }

  createBtn(type, text) {
    const btn = document.createElement('button');

    btn.textContent = text;

    btn.setAttribute('type', type);
    btn.setAttribute('class', 'main__btn main__btn--submit');

    return btn;
  }

  createLabel(text, isError) {
    const label = document.createElement('label');

    label.textContent = text;

    label.setAttribute(
      'class',
      !isError ? 'main__form-label' : 'main__form-label main__form-label--error',
    );

    return label;
  }

  createInput(type, name, placeholder) {
    const input = document.createElement('input');

    if (type === 'tel') {
      input.setAttribute('pattern', '[0-9]{9}');
    }

    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('class', 'main__form-input');

    return input;
  }

  createForm() {
    const form = document.createElement('form');

    const labelPhone = this.createLabel('Numer telefonu', false);
    const labelCode = this.createLabel('Kod odbioru', false);
    const inputPhone = this.createInput('tel', 'phone', 'xxx-xxx-xxx');
    const inputCode = this.createInput('number', 'code', 'xxxx');
    const btn = this.createBtn('submit', 'Odbierz paczkę');

    form.setAttribute('class', 'main__form');

    labelPhone.appendChild(inputPhone);
    labelCode.appendChild(inputCode);
    form.appendChild(labelPhone);
    form.appendChild(labelCode);
    form.appendChild(btn);

    this.container.appendChild(form);
  }

  createModal() {}
}

export default BuildLayout;
