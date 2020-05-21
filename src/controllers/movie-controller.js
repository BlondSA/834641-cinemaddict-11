import FilmCardComponent from "../components/film-card.js";
import FilmDetailComponent from "../components/film-detail.js";
import {render, RenderPosition} from "../utils/render.js";


const ESCAPE_BUTTON = `Escape`;
const ESC_BUTTON = `Esc`;


export default class MovieController {
  constructor(container) {
    this._conteiner = container;
    this._filmCardComponent = null;
    this._filmDetailsComponent = null;


    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  renderFilm(filmsListElement, film) {
    // Функция создания карточки фильма
    this._filmCardComponent = new FilmCardComponent(film);
    this._filmDetailComponent = new FilmDetailComponent(film);
    // Создание попапа по нажатию на постер, заголовок, коментарии
    this._filmCardComponent.setClickHandler((evt) => {
      if (
        evt.target.classList.contains(`film-card__poster`) ||
          evt.target.classList.contains(`film-card__title`) ||
          evt.target.classList.contains(`film-card__comments`)
      ) {
        evt.preventDefault();
        this._openPopup();
        document.addEventListener(`keydown`, this._onEscKeyDown);
      }
    });

    this._filmDetailComponent.setClickHandler(() => {
      this._closePopup();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });
    render(filmsListElement, this._filmCardComponent, RenderPosition.BEFOREEND);
  }

  // Открытие попапа
  _openPopup() {
    const bodyElement = document.querySelector(`body`);
    bodyElement.appendChild(this._filmDetailComponent.getElement());
  }

  // Закрытие попапа
  _closePopup() {
    const bodyElement = document.querySelector(`body`);
    bodyElement.removeChild(this._filmDetailComponent.getElement());
    const closeButton = this._filmDetailComponent.getElement().querySelector(
        `.film-details__close-btn`
    );
    closeButton.removeEventListener(`click`, this._closePopup);
  }

  // Закрытие попапа по нажатию на ESC
  _onEscKeyDown(evt) {
    const isEscKey = evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
    if (isEscKey) {
      this._closePopup();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}