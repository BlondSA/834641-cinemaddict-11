import AbstractComponent from "./abstract-component.js";

const createButtonMarkup = (className, name, isActive = true) => {
  return `<button class="film-card__controls-item button film-card__controls-item--${className}
  ${isActive ? `film-card__controls-item--active` : ``}">
    ${name}
  </button>`;
};

const createFilmCardTemplate = (film) => {
  const {
    title,
    rating,
    year,
    duration,
    genres,
    poster,
    description,
    comments,
  } = film;

  const buttonAddWatchList = createButtonMarkup(`add-to-watchlist`, `Add to watchlist`, !film.isAddedToWatch);
  const buttonMarkAsWatches = createButtonMarkup(`mark-as-watched`, `Mark as watched`, !film.isWatched);
  const buttonMarkAsFavorite = createButtonMarkup(`favorite`, `Mark as favorite`, !film.isFavorite);

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments} comments</a>
    <form class="film-card__controls">
      ${buttonAddWatchList}
      ${buttonMarkAsWatches}
      ${buttonMarkAsFavorite}
    </form>
  </article>`;
};

export default class FilmCard extends AbstractComponent {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }

  setAddToWatchlistButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, handler);
  }

  setWatchedButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, handler);
  }

  setFavoriteButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, handler);
  }
}
