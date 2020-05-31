import FilmCardComponent from "../components/film-card.js";
import FilmDetailComponent from "../components/film-detail.js";
import {render, remove, replace, RenderPosition} from "../utils/render.js";
import {ESCAPE_BUTTON, ESC_BUTTON} from "../const.js";
import {Mode} from "../const.js";

export default class MovieController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;

    this._filmCardComponent = null;
    this._filmDetailComponent = null;

    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;


    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }


  render(film) {
    this._film = film;
    const oldFilmCardComponent = this._filmCardComponent;
    const oldFilmDetailComponent = this._filmDetailComponent;

    this._filmCardComponent = new FilmCardComponent(this._film);
    this._filmCardComponent.setClickHandler((evt) => {
      evt.preventDefault();
      if (
        evt.target.classList.contains(`film-card__poster`) ||
        evt.target.classList.contains(`film-card__title`) ||
        evt.target.classList.contains(`film-card__comments`)
      ) {
        this._openPopup(this._film);
        document.addEventListener(`keydown`, this._onEscKeyDown);
      }
    });

    this._filmCardComponent.setAddToWatchlistButtonClickHandler(() => {
      this._onDataChange(this, this._film, Object.assign({}, this._film, {
        isAddedToWatch: !this._film.isAddedToWatch,
      }));
    });

    this._filmCardComponent.setWatchedButtonClickHandler(() => {
      this._onDataChange(this, this._film, Object.assign({}, this._film, {
        isWatched: !this._film.isWatched,
      }));
    });

    this._filmCardComponent.setFavoriteButtonClickHandler(() => {
      this._onDataChange(this, this._film, Object.assign({}, this._film, {
        isFavorite: !this._film.isFavorite,
      }));
    });

    if (oldFilmDetailComponent && oldFilmCardComponent) {
      replace(this._filmCardComponent, oldFilmCardComponent);
      replace(this._filmDetailComponent, oldFilmDetailComponent);
    } else {
      render(this._container, this._filmCardComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceDatailToCard();
    }
  }

  // Открытие попапа
  _openPopup(film) {
    this._film = film;
    this._onViewChange();
    this._filmDetailComponent = new FilmDetailComponent(this._film);

    this._filmDetailComponent.setClickHandler(() => {
      this._closePopup();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });
    const bodyElement = document.querySelector(`body`);
    bodyElement.appendChild(this._filmDetailComponent.getElement());
  }

  // Закрытие попапа
  _closePopup() {
    this._mode = Mode.DEFAULT;
    this._filmDetailComponent.getElement().remove();
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

  destroy() {
    remove(this._filmCardComponent);
    remove(this._filmDetailComponent);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }
}
