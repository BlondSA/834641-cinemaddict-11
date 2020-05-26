import SortsComponent, {SortType} from "../components/sorts.js";
import FilmsListComponent from "../components/films-list.js";
import FilmCardComponent from "../components/film-card.js";
import ButtonShowMoreComponent from "../components/show-more-button.js";
import ListTopFilmsComponent from "../components/top-film-list.js";
import ListMostCommentsFilmComponent from "../components/most-comments-film-list.js";
import FilmDetailComponent from "../components/film-detail.js";
import NoFilmsComponent from "../components/no-films.js";
import {render, remove, RenderPosition} from "../utils/render.js";

const SHOWING_FILM_ON_START = 5;
const SHOWING_FILM_BY_BUTTON = 5;
const SHOWING_EXTRA_FILMS = 2;
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

const renderFilms = (filmListElement, films) => {
  films.forEach((film) => {
    renderFilm(filmListElement, film);
  });
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

    this._sortComponent = new SortsComponent();
    this._filmsListComponent = new FilmsListComponent();
    this._noFilmsComponent = new NoFilmsComponent();
    this._loadMoreButtonComponent = new ButtonShowMoreComponent();
    this._listTopFilmsComponent = new ListTopFilmsComponent();
    this._listMostCommentsFilmComponent = new ListMostCommentsFilmComponent();
  }

  render(films) {
    let showingFilmsCount = SHOWING_FILM_ON_START;

    const renderLoadMoreButton = () => {
      remove(this._loadMoreButtonComponent);
      if (showingFilmsCount >= films.length) {
        return;
      }
      render(container.querySelector(`.films-list`), this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

      this._loadMoreButtonComponent.setClickHandler(() => {
        const prevFilmsCount = showingFilmsCount;
        showingFilmsCount = showingFilmsCount + SHOWING_FILM_BY_BUTTON;
        const sortedFilms = getSortedFilms(films, this._sortComponent.getSortType(), prevFilmsCount, showingFilmsCount);
        renderFilms(siteFilmListContainerElement, sortedFilms);
        if (showingFilmsCount >= films.length) {
          remove(this._loadMoreButtonComponent);
        }
      });
    };
    const container = this._container.getElement();

    // Сортировка
    render(container, this._sortComponent, RenderPosition.BEFOREEND);
    render(container, this._filmsListComponent, RenderPosition.BEFOREEND);
    const siteFilmListContainerElement = container.querySelector(`.films-list__container`);

    if (films.length === 0) {
      render(container, this._noFilmsComponent);
    }

    renderFilms(siteFilmListContainerElement, films.slice(0, showingFilmsCount));
    renderLoadMoreButton();

    // и «Top rating» (доп.задание)
    render(container, this._listTopFilmsComponent, RenderPosition.BEFOREEND);
    const siteTopFilmsElement = container.querySelector(`.films-list--extra .films-list__container`);
    const filmsTopRating = films.slice().sort((a, b) => b.rating - a.rating);
    filmsTopRating.slice(0, SHOWING_EXTRA_FILMS).forEach((film) => renderFilm(siteTopFilmsElement, film));

    // и «Most commented» (доп.задание)
    render(container, this._listMostCommentsFilmComponent, RenderPosition.BEFOREEND);
    const siteMostCommentsFilmElement = container.querySelector(`.films-list--extra:last-child .films-list__container`);
    const sortedMostCommentedFilms = films.slice().sort((a, b) => b.comments.length - a.comments.length);
    sortedMostCommentedFilms.slice(0, SHOWING_EXTRA_FILMS).forEach((film) => renderFilm(siteMostCommentsFilmElement, film));

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      showingFilmsCount = SHOWING_FILM_BY_BUTTON;
      const sortedFilms = getSortedFilms(films, sortType, 0, showingFilmsCount);
      siteFilmListContainerElement.innerHTML = ``;
      renderFilms(siteFilmListContainerElement, sortedFilms);
      renderLoadMoreButton();
    });
  }
  // _onDataChange(movieController, oldData, newData) {
  //   const index = this._filmsArray.findIndex((it) => it === oldData);

  //   if (index === -1) {
  //     return;
  //   }
  //   this._filmsArray = [].concat(this._filmsArray.slice(0, index), newData, this._filmsArray.slice(index + 1));
  //   movieController.render(this._filmsArray[index]);
  // }
  // _onViewChange() {
  //   this._filmsArray.forEach((it) => {
  //     it.setDefaultFilmView();
  //   });
  // }
}
