import AbstractComponent from "./abstract-component.js";

const createControlsTemplate = (control) => {
  const {addedToWatchList, markedAsWatched, isFavorite} = control;
  const selectedWatchList = addedToWatchList ? `film-card__controls-item--active` : ``;
  const selectedWatched = markedAsWatched ? `film-card__controls-item--active` : ``;
  const selectedFavorite = isFavorite ? `film-card__controls-item--active` : ``;
  return (
    `<button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${selectedWatchList}">Add to watchlist</button>
     <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${selectedWatched}">Mark as watched</button>
     <button class="film-card__controls-item button film-card__controls-item--favorite ${selectedFavorite}">Mark as favorite</button>`
  );
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

  const buttons = createControlsTemplate(film);
  const commentsCount = comments.length;
  const genresList = genres.join(`, `);

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year.format(`YYYY`)}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genresList}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${commentsCount} comments</a>
    <form class="film-card__controls">
      ${buttons}
    </form>
  </article>`;
};

export default class FilmCard extends AbstractComponent {
  constructor(film) {
    super();

    this._film = film;
  }

  setClickPopupShowElementsHandler(handler) {
    const poster = this.getElement().querySelector(`.film-card__poster`);
    const title = this.getElement().querySelector(`.film-card__title`);
    const comments = this.getElement().querySelector(`.film-card__comments`);
    const popupShowElements = [poster, title, comments];

    popupShowElements.forEach((element) => {
      element.addEventListener(`click`, () => {
        handler(this._film);
      });
    });
  }

  setAddToWatchListButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
    .addEventListener(`click`, handler);
  }

  setMarkAsWatchButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
    .addEventListener(`click`, handler);
  }

  setFavoriteButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-card__controls-item--favorite`)
    .addEventListener(`click`, handler);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }
}
