import SortsComponent from "../components/sorts.js";
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

const renderFilms = (filmsFormComponent, films) => {
  // const siteMainElement = document.querySelector(`.main`);

  // Сортировка
  render(filmsFormComponent.getElement(), new SortsComponent(), RenderPosition.BEFOREEND);

  render(filmsFormComponent.getElement(), new FilmsListComponent(), RenderPosition.BEFOREEND);

  const siteFilmListContainerElement = filmsFormComponent.getElement().querySelector(`.films-list__container`);

  if (films.length === 0) {
    render(filmsFormComponent.getElement(), new NoFilmsComponent());
  }

  let showingFilmCount = SHOWING_FILM_STEP;

  films
  .slice(0, showingFilmCount)
  .forEach((film) =>
    renderFilm(siteFilmListContainerElement, film));

  // Кнопка «Show more»;
  const showMoreButtonComponent = new ButtonShowMoreComponent();
  const siteFilmListElement = filmsFormComponent.getElement().querySelector(`.films-list`);
  render(siteFilmListElement, showMoreButtonComponent, RenderPosition.BEFOREEND
  );

  showMoreButtonComponent.setClickHandler(() => {
    const prevFilmCount = showingFilmCount;
    showingFilmCount += SHOWING_FILM_STEP;

    films.slice(prevFilmCount, showingFilmCount).forEach((film) =>
      renderFilm(siteFilmListContainerElement, film));
    if (showingFilmCount >= films.length) {
      remove(showMoreButtonComponent);
    }
  });
  render(filmsFormComponent.getElement(), new ListTopFilmsComponent(), RenderPosition.BEFOREEND
  );

  const siteTopFilmsElement = filmsFormComponent.getElement().querySelector(
      `.films-list--extra .films-list__container`
  );

  const filmTop = generateFilmCards(TOP_FILM_COUNT);

  filmTop.slice(0, TOP_FILM_COUNT).forEach((film) =>
    renderFilm(siteTopFilmsElement, film)
  );

  // и «Most commented» (доп.задание)

  render(filmsFormComponent.getElement(), new ListMostCommentsFilmComponent(), RenderPosition.BEFOREEND);

  const siteMostCommentsFilmElement = filmsFormComponent.getElement().querySelector(
      `.films-list--extra:last-child .films-list__container`
  );

  const filmMostComment = generateFilmCards(MOST_COMMENT_FILM_COUNT);

  filmMostComment.slice(0, MOST_COMMENT_FILM_COUNT).forEach((film) =>
    renderFilm(siteMostCommentsFilmElement, film)
  );
};


export default class PageController {
  constructor(container) {
    this._container = container;
  }

  render(films) {
    renderFilms(this._container, films);
  }
}
