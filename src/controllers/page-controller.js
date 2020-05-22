import SortsComponent, {SortType} from "../components/sorts.js";
import FilmsListComponent from "../components/films-list.js";
import MovieController from "../controllers/movie-controller.js";
import ButtonShowMoreComponent from "../components/show-more-button.js";
import ListTopFilmsComponent from "../components/top-film-list.js";
import ListMostCommentsFilmComponent from "../components/most-comments-film-list.js";
import NoFilmsComponent from "../components/no-films.js";
import {render, remove, RenderPosition} from "../utils/render.js";

const SHOWING_MOVIES_COUNT = 5;
const START_SHOWIING_MOVIES_COUNT = 0;
const TOP_MOVIES_COUNT = 2;
const MOST_COMMENT_MOVIES_COUNT = 2;

export default class PageController {
  constructor(container, filmsArray) {
    this._container = container;
    this._filmsArray = filmsArray.slice();
    this._originalFilmsArray = filmsArray;

    this._films = [];
    this._showedFilmControllers = [];

    this._movieController = new MovieController();

    this._onDataChange = this._onDataChange.bind(this);
    this._noFilmsComponent = new NoFilmsComponent();
    this._sortComponent = new SortsComponent();
    this._filmsListComponent = new FilmsListComponent();
    this._buttonShowMoreComponent = new ButtonShowMoreComponent();
    this._listTopFilmsComponent = new ListTopFilmsComponent();
    this._listMostCommentsFilmComponent = new ListMostCommentsFilmComponent();
  }

  render() {

    let showingFilmsCount = SHOWING_MOVIES_COUNT;
    const incrementFilmsCount = () => {
      if (showingFilmsCount <= this._filmsArray.length - SHOWING_MOVIES_COUNT) {
        showingFilmsCount += SHOWING_MOVIES_COUNT;
      }
    };

    const resetFilmsCount = () => {
      showingFilmsCount = SHOWING_MOVIES_COUNT;
    };

    const renderOrRemoveLoadMoreButton = () => {
      const siteFilmListElement = container.querySelector(`.films-list`);
      render(siteFilmListElement, this._buttonShowMoreComponent, RenderPosition.BEFOREEND);
      if (showingFilmsCount >= this._filmsArray.length) {
        remove(this._buttonShowMoreComponent);
      }
    };

    const refreshFilms = () => {
      siteFilmListContainerElement.innerHTML = ``;
      this._filmsArray.forEach((film, i) => {
        if (i < showingFilmsCount) {
          this._movieController.renderFilm(siteFilmListContainerElement, film, this._onDataChange);
        }
      });
    };

    const sortFilms = (sortType) => {
      switch (sortType) {
        case SortType.DATE:
          this._filmsArray.sort((a, b) => b.year - a.year);
          break;
        case SortType.RATING:
          this._filmsArray.sort((a, b) => b.rating - a.rating);
          break;
        case SortType.DEFAULT:
          this._filmsArray = this._originalFilmsArray.slice();
          break;
      }
    };

    const addEventListenerShowMoreButton = () => {
      this._buttonShowMoreComponent.setClickHandler(() => {
        incrementFilmsCount();
        refreshFilms();
        renderOrRemoveLoadMoreButton();
      });
    };

    const container = this._container.getElement();
    if (this._filmsArray.length === 0) {
      render(container, this._noFilmsComponent);
    }
    // Сортировка
    render(container, this._sortComponent, RenderPosition.BEFOREEND);

    render(container, this._filmsListComponent, RenderPosition.BEFOREEND);

    const siteFilmListContainerElement = container.querySelector(`.films-list__container`);


    refreshFilms();
    renderOrRemoveLoadMoreButton();
    addEventListenerShowMoreButton();

    render(container, this._listTopFilmsComponent, RenderPosition.BEFOREEND);
    const siteTopFilmsElement = container.querySelector(`.films-list--extra .films-list__container`);
    const filmsTopRating = this._filmsArray.sort((a, b) => b.rating - a.rating);
    filmsTopRating.slice(START_SHOWIING_MOVIES_COUNT, TOP_MOVIES_COUNT).forEach((film) => this._movieController.renderFilm(siteTopFilmsElement, film, this._onDataChange));


    // и «Most commented» (доп.задание)
    render(container, this._listMostCommentsFilmComponent, RenderPosition.BEFOREEND);
    const siteMostCommentsFilmElement = container.querySelector(`.films-list--extra:last-child .films-list__container`);

    const filmsMostComment = this._filmsArray.sort((a, b) => b.comments - a.comments);
    filmsMostComment.slice(START_SHOWIING_MOVIES_COUNT, MOST_COMMENT_MOVIES_COUNT).forEach((film) =>
      this._movieController.renderFilm(siteMostCommentsFilmElement, film, this._onDataChange)
    );

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      resetFilmsCount();
      sortFilms(sortType);
      remove(this._buttonShowMoreComponent);
      refreshFilms();
      renderOrRemoveLoadMoreButton();
      addEventListenerShowMoreButton();
      resetFilmsCount();
    });
  }

  _onDataChange(movieController, oldData, newData) {
    const index = this._films.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }
    this._films = [].concat(this._films.slice(0, index), newData, this._films.slice(index + 1));
    movieController.render(this._films[index]);
  }
}
