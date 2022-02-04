class Loader {
  constructor() {
    this.createLoader();
  }

  createLoader() {
    const loaderContent = document.createElement('div');
    const loaderContainer = document.createElement('div');

    loaderContent.setAttribute('class', 'loader__content');

    loaderContainer.setAttribute('class', 'loader');
    loaderContainer.appendChild(loaderContent);

    document.body.appendChild(loaderContainer);
  }

  showLoader() {
    document.querySelector('.loader').classList.add('loader--show');
  }

  closeLoader() {
    document.querySelector('.loader').classList.remove('loader--show');
  }
}

export default Loader;
