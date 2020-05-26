import AbstractComponent from "./abstract-component.js";

const createFilmsFormTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsBoard extends AbstractComponent {
  getTemplate() {
    return createFilmsFormTemplate();
  }
}
