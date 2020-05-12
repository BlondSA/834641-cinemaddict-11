import SortsComponent, {SortType} from "../components/sorts.js";
import FilmsListComponent from "../components/films-list.js";
import FilmCardComponent from "../components/film-card.js";
import ButtonShowMoreComponent from "../components/show-more-button.js";
import ListTopFilmsComponent from "../components/top-film-list.js";
import ListMostCommentsFilmComponent from "../components/most-comments-film-list.js";
import FilmDetailComponent from "../components/detail-film.js";
import NoFilmsComponent from "../components/no-films.js";
import {generateFilmCards} from "../mock/film-card.js";
import {render, remove, RenderPosition} from "../utils/render.js";

const SHOWING_FILM_STEP = 5;
const TOP_FILM_COUNT = 2;
const MOST_COMMENT_FILM_COUNT = 2;
const ESCAPE_BUTTON = `Escape`;
const ESC_BUTTON = `Esc`;

// Функция создания карточки фильма
const renderFilm = (filmsListElement, film) => {
  const bodyElement = document.querySelector(`body`);
  // Открытие попапа
  const openPopup = () => {
    bodyElement.appendChild(filmDetailsComponent.getElement());
  };

  // Закрытие попапа
  const closePopup = () => {
    bodyElement.removeChild(filmDetailsComponent.getElement());
    const closeButton = filmDetailsComponent.getElement().querySelector(
        `.film-details__close-btn`
    );
    closeButton.removeEventListener(`click`, closePopup);
  };

  // Закрытие попапа по нажатию на ESC
  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
    if (isEscKey) {
      closePopup();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const films = new FilmCardComponent(film);

  // Создание попапа по нажатию на постер, заголовок, коментарии
  films.setClickHandler((evt) => {
    if (
      evt.target.classList.contains(`film-card__poster`) ||
      evt.target.classList.contains(`film-card__title`) ||
      evt.target.classList.contains(`film-card__comments`)
    ) {
      evt.preventDefault();
      openPopup();
      document.addEventListener(`keydown`, onEscKeyDown);
    }
  });
  const filmDetailsComponent = new FilmDetailComponent(film);

  filmDetailsComponent.setClickHandler(() => {
    closePopup();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  render(filmsListElement, films, RenderPosition.BEFOREEND);
};

const getSortedFilms = (films, sortType, from, to) => {
  let sortedFilms = [];
  const showingFilms = films.slice();

  switch (sortType) {
    case SortType.DATE:
      sortedFilms = showingFilms.sort((a, b) => b.year - a.year);
      break;
    case SortType.RATING:
      sortedFilms = showingFilms.sort((a, b) => b.rating - a.rating);
      break;
    case SortType.DEFAULT:
      sortedFilms = showingFilms;
      break;
  }

  return sortedFilms.slice(from, to);
};
export default class PageController {
  constructor(container) {
    this._container = container;

    this._noFilmsComponent = new NoFilmsComponent();
    this._sortComponent = new SortsComponent();
    this._filmsListComponent = new FilmsListComponent();
    this._buttonShowMoreComponent = new ButtonShowMoreComponent();
    this._listTopFilmsComponent = new ListTopFilmsComponent();
    this._listMostCommentsFilmComponent = new ListMostCommentsFilmComponent();
  }

  render(films) {

    const renderLoadMoreButton = () => {
      // Кнопка «Show more»;
      if (showingFilmsCount >= films.length) {
        return;
      }
      const siteFilmListElement = container.querySelector(`.films-list`);
      render(siteFilmListElement, this._buttonShowMoreComponent, RenderPosition.BEFOREEND
      );

      this._buttonShowMoreComponent.setClickHandler(() => {
        const prevFilmsCount = showingFilmsCount;
        showingFilmsCount += SHOWING_FILM_STEP;
        films.slice(prevFilmsCount, showingFilmsCount).forEach((film) =>
          renderFilm(siteFilmListContainerElement, film));
        if (showingFilmsCount >= films.length) {
          remove(this._buttonShowMoreComponent);
        }
      });
    };
    const container = this._container.getElement();
    if (films.length === 0) {
      render(container, this._noFilmsComponent);
    }
    // Сортировка
    render(container, this._sortComponent, RenderPosition.BEFOREEND);

    render(container, this._filmsListComponent, RenderPosition.BEFOREEND);

    const siteFilmListContainerElement = container.querySelector(`.films-list__container`);

    let showingFilmsCount = SHOWING_FILM_STEP;

    films
  .slice(0, showingFilmsCount)
  .forEach((film) =>
    renderFilm(siteFilmListContainerElement, film));

    renderLoadMoreButton();

    render(container, this._listTopFilmsComponent, RenderPosition.BEFOREEND
    );

    const siteTopFilmsElement = container.querySelector(
        `.films-list--extra .films-list__container`
    );

    const filmTop = generateFilmCards(TOP_FILM_COUNT);

    filmTop.slice(0, TOP_FILM_COUNT).forEach((film) =>
      renderFilm(siteTopFilmsElement, film)
    );

    // и «Most commented» (доп.задание)

    render(container, this._listMostCommentsFilmComponent, RenderPosition.BEFOREEND);

    const siteMostCommentsFilmElement = container.querySelector(
        `.films-list--extra:last-child .films-list__container`
    );

    const filmMostComment = generateFilmCards(MOST_COMMENT_FILM_COUNT);

    filmMostComment.slice(0, MOST_COMMENT_FILM_COUNT).forEach((film) =>
      renderFilm(siteMostCommentsFilmElement, film)
    );

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      showingFilmsCount = SHOWING_FILM_STEP;

      const sortedFilms = getSortedFilms(films, sortType, 0, showingFilmsCount);

      siteFilmListContainerElement.innerHTML = ``;

      sortedFilms.slice(0, showingFilmsCount).forEach((film) => {
        renderFilm(siteFilmListContainerElement, film);
      });
      renderLoadMoreButton();
    });
  }
}
