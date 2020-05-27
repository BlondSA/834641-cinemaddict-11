import FilmCardComponent from "../components/film-card.js";
import FilmDetailComponent from "../components/film-detail.js";
import {render, RenderPosition} from "../utils/render.js";

const ESCAPE_BUTTON = `Escape`;
const ESC_BUTTON = `Esc`;

export default class MovieController {
  constructor(container, onDataChange) {
    this._container = container;

    this._filmCardComponent = null;
    this._filmDetailComponent = null;

    this._onDataChange = onDataChange;


    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }


  render(film) {
    this._filmCardComponent = new FilmCardComponent(film);
    this._filmCardComponent.setClickHandler((evt) => {
      evt.preventDefault();
      if (
        evt.target.classList.contains(`film-card__poster`) ||
        evt.target.classList.contains(`film-card__title`) ||
        evt.target.classList.contains(`film-card__comments`)
      ) {
        this._openPopup(film);
        document.addEventListener(`keydown`, this._onEscKeyDown);
      }
    });

    this._filmCardComponent.setAddToWatchlistButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isAddedToWatch: !film.isAddedToWatch,
      }));
    });

    this._filmCardComponent.setWatchedButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isWatched: !film.isWatched,
      }));
    });

    this._filmCardComponent.setFavoriteButtonClickHandler(() => {
      this._onDataChange(this, film, Object.assign({}, film, {
        isFavorite: !film.isFavorite,
      }));
    });

    render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);
  }

  // Открытие попапа
  _openPopup(film) {
    this._filmDetailComponent = new FilmDetailComponent(film);

    this._filmDetailsComponent.setClickHandler(() => {
      this._closePopup();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });
    const bodyElement = document.querySelector(`body`);
    bodyElement.appendChild(this._filmDetailsComponent.getElement());
  }

  // Закрытие попапа
  _closePopup() {
    const bodyElement = document.querySelector(`body`);
    bodyElement.removeChild(this._filmDetailsComponent.getElement());
    const closeButton = this._filmDetailsComponent.getElement().querySelector(
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
  _setDefaultView() {
    this._closePopup();
  }
}
