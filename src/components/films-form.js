import AbstractComponent from "./abstract-component.js";

const createFilmsFormTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsForm extends AbstractComponent {
  getTemplate() {
    return createFilmsFormTemplate();
  }
}
