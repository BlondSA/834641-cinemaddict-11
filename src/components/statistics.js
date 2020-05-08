import AbstractComponent from "./abstract-component.js";

const createStatisticsFilmTemplate = () => {
  return `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`;
};

export default class StatisticsFilm extends AbstractComponent {
  getTemplate() {
    return createStatisticsFilmTemplate();
  }
}
