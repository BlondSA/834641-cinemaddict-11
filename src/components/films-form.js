import {createElement} from "../utils.js";

const createFilmsFormTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsForm {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsFormTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
