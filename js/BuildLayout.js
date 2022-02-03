class BuildLayout {
  constructor() {
    this.container = document.querySelector('.main__form-container');
  }

  createBtn(type, text, className) {
    const btn = document.createElement('button');

    btn.textContent = text;

    btn.setAttribute('type', type);
    btn.setAttribute('class', `${className} ${className}--submit`);

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
    const btn = this.createBtn('submit', 'Odbierz paczkę', 'main__btn');

    form.setAttribute('class', 'main__form');

    labelPhone.appendChild(inputPhone);
    labelCode.appendChild(inputCode);
    form.appendChild(labelPhone);
    form.appendChild(labelCode);
    form.appendChild(btn);

    this.container.appendChild(form);
  }

  createModal(timer) {
    const modal = document.createElement('dialog');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    const btnEnd = this.createBtn('button', 'To wszystko na dziś', 'modal__btn');
    const btnNext = this.createBtn('button', 'Odbierz kolejną paczkę', 'modal__btn');

    modal.setAttribute('class', 'modal');

    title.setAttribute('class', 'modal__title');
    title.textContent = 'Paczka odebrana!';
    text.setAttribute('class', 'modal__text');
    text.textContent = `Zrobiłeś to w czasie ${timer} sekund! Czy możemy zrobić dla Ciebie coś jeszcze?`;

    modal.appendChild(title);
    modal.appendChild(text);
    modal.appendChild(btnEnd);
    modal.appendChild(btnNext);

    this.container.appendChild(modal);

    return [modal, btnEnd, btnNext];
  }
}

export default BuildLayout;
