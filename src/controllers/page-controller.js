import SortsComponent, {SortType} from "../components/sorts.js";
import FilmsListComponent from "../components/films-list.js";
import ButtonShowMoreComponent from "../components/show-more-button.js";
import ListTopFilmsComponent from "../components/top-film-list.js";
import ListMostCommentsFilmComponent from "../components/most-comments-film-list.js";
import NoFilmsComponent from "../components/no-films.js";
import MovieController from "../controllers/movie-controller.js";
import {render, remove, RenderPosition} from "../utils/render.js";
import {Mode} from "../const.js";


const SHOWING_FILM_ON_START = 5;
const SHOWING_FILM_BY_BUTTON = 5;
const SHOWING_EXTRA_FILMS = 2;

const renderFilms = (filmListElement, films, onDataChange, onViewChange) => {
  return films.map((film) => {
    const filmController = new MovieController(filmListElement, onDataChange, onViewChange);
    filmController.render(film);
    return filmController;
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
    this._films = [];

    this._showedFilmControllers = [];
    this._showingFilmsCount = SHOWING_FILM_ON_START;
    this._filmCardComponent = null;


    this._sortComponent = new SortsComponent();
    this._filmsListComponent = new FilmsListComponent();
    this._noFilmsComponent = new NoFilmsComponent();
    this._loadMoreButtonComponent = new ButtonShowMoreComponent();
    this._listTopFilmsComponent = new ListTopFilmsComponent();
    this._listMostCommentsFilmComponent = new ListMostCommentsFilmComponent();

    this._renderLoadMoreButton = this._renderLoadMoreButton.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);

    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
    this._onViewChange = this._onViewChange.bind(this);
    // this._sortingComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  destroy() {
    remove(MovieController.this._filmCardComponent);
    remove(MovieController.this._filmDetailsComponent);

    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  render(films) {
    this._films = films;

    const container = this._container.getElement();

    render(container, this._sortComponent, RenderPosition.BEFOREEND);
    render(container, this._filmsListComponent, RenderPosition.BEFOREEND);
    const siteFilmListContainerElement = container.querySelector(`.films-list__container`);

    if (this._films.length === 0) {
      render(container, this._noFilmsComponent);
    }

    const newFilms = renderFilms(siteFilmListContainerElement, this._films.slice(0, this._showingFilmsCount), this._onDataChange, this._onViewChange);
    this._showedFilmControllers = this._showedFilmControllers.concat(newFilms);
    this._renderLoadMoreButton();

    // и «Top rating» (доп.задание)
    render(container, this._listTopFilmsComponent, RenderPosition.BEFOREEND);
    const siteTopFilmsElement = container.querySelector(`.films-list--extra .films-list__container`);
    renderFilms(siteTopFilmsElement, this._films.slice().sort((a, b) => b.rating - a.rating).slice(0, SHOWING_EXTRA_FILMS), this._onDataChange, this._onViewChange);

    // и «Most commented» (доп.задание)
    render(container, this._listMostCommentsFilmComponent, RenderPosition.BEFOREEND);
    const siteMostCommentsFilmElement = container.querySelector(`.films-list--extra:last-child .films-list__container`);
    renderFilms(siteMostCommentsFilmElement, this._films.slice().sort((a, b) => b.comments.length - a.comments.length).slice(0, SHOWING_EXTRA_FILMS), this._onDataChange, this._onViewChange);
  }


  _renderLoadMoreButton() {
    remove(this._loadMoreButtonComponent);
    if (this._showingFilmsCount >= this._films.length) {
      return;
    }
    const container = this._container.getElement();
    render(container.querySelector(`.films-list`), this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(() => {
      const prevFilmsCount = this._showingFilmsCount;
      const siteFilmListContainerElement = container.querySelector(`.films-list__container`);
      this._showingFilmsCount = this._showingFilmsCount + SHOWING_FILM_BY_BUTTON;

      const sortedFilms = getSortedFilms(this._films, this._sortComponent.getSortType(), prevFilmsCount, this._showingFilmsCount);
      const newFilms = renderFilms(siteFilmListContainerElement, sortedFilms, this._onDataChange, this._onViewChange);
      this._showedFilmControllers = this._showedFilmControllers.concat(newFilms);
      if (this._showingFilmsCount >= this._films.length) {
        remove(this._loadMoreButtonComponent);
      }
    });
  }

  _onSortTypeChange(sortType) {
    this._showingFilmsCount = SHOWING_FILM_ON_START;
    const siteFilmListContainerElement = this._container.getElement().querySelector(`.films-list__container`);
    const sortedFilms = getSortedFilms(this._films, sortType, 0, this._showingFilmsCount);
    siteFilmListContainerElement.innerHTML = ``;
    const newFilms = renderFilms(siteFilmListContainerElement, sortedFilms, this._onDataChange, this._onViewChange);
    this._showedFilmControllers = newFilms;
    this._renderLoadMoreButton();
  }

  _onDataChange(movieController, oldData, newData) {
    const index = this._films.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }
    this._films = [].concat(this._films.slice(0, index), newData, this._films.slice(index + 1));
    movieController.render(this._films[index]);
  }

  _onViewChange() {
    this._showedFilmControllers.forEach((controller) => controller.setDefaultView());
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closePopup();
      this._mode = Mode.DEFAULT;
    }
  }

  _removeFilms() {
    this._showedFilmControllers.forEach((filmController) => filmController.destroy());
    this._showedFilmControllers = [];
  }
}
