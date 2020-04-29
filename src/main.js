import UserComponent from "./components/user.js";
import MenuComponent from "./components/site-menu.js";
import StatsComponent from "./components/stats.js";
import SortsComponent from "./components/sorts.js";
import FilmsFormComponent from "./components/films-form.js";
import FilmsListComponent from "./components/films-list.js";
import FilmCardComponent from "./components/film-card.js";
import ButtonShowMoreComponent from "./components/show-more-button.js";
import ListTopFilmsComponent from "./components/top-film-list.js";
import ListMostCommentsFilmComponent from "./components/most-comments-film-list.js";
import StatisticsFilmComponent from "./components/statistics.js";
import FilmDetailComponent from "./components/detail-film.js";
import NoFilmsComponent from "./components/no-films.js";
import {generateFilters} from "./mock/filter.js";
import {generateFilmCards} from "./mock/film-card.js";
import {render, RenderPosition} from "./utils.js";

const FILM_COUNT = 20;
const SHOWING_FILM_STEP = 5;
const TOP_FILM_COUNT = 2;
const MOST_COMMENT_FILM_COUNT = 2;
const ESCAPE_BUTTON = `Escape`;
const ESC_BUTTON = `Esc`;

const bodyElement = document.querySelector(`body`);

// Функция создания карточки фильма
const renderFilm = (filmsListElement, film) => {
  // Открытие попапа
  const openPopup = () => {
    bodyElement.appendChild(filmDetailsComponent.getElement());
  };

  // Закрытие попапа
  const closePopup = () => {
    bodyElement.removeChild(filmDetailsComponent.getElement());
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
  films.getElement().addEventListener(`click`, (evt) => {
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
  const closeButton = filmDetailsComponent.getElement().querySelector(
      `.film-details__close-btn`
  );

  closeButton.addEventListener(`click`, () => {
    closePopup();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  render(filmsListElement, films.getElement(), RenderPosition.BEFOREEND);
};

// Звание пользователя;
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new UserComponent().getElement(), RenderPosition.BEFOREEND);

// Меню (фильтры и статистика);

// Фильтры
const filter = generateFilters();
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new MenuComponent(filter).getElement(), RenderPosition.BEFOREEND);

// Статистика
const siteNavigationElement = siteMainElement.querySelector(`.main-navigation`);
render(siteNavigationElement, new StatsComponent().getElement(), RenderPosition.BEFOREEND);

// Сортировка
render(siteMainElement, new SortsComponent().getElement(), RenderPosition.BEFOREEND);

// Поле с карточками
render(siteMainElement, new FilmsFormComponent().getElement(), RenderPosition.BEFOREEND
);
const siteFilmsElement = siteMainElement.querySelector(`.films`);
render(siteFilmsElement, new FilmsListComponent().getElement(), RenderPosition.BEFOREEND
);

const renderFilms = () => {
  const siteFilmListContainerElement = siteFilmsElement.querySelector(`.films-list__container`);

  const films = generateFilmCards(FILM_COUNT);

  if (films.length === 0) {
    render(siteMainElement, new NoFilmsComponent().getElement());
  }

  let showingFilmCount = SHOWING_FILM_STEP;

  films
  .slice(0, showingFilmCount)
  .forEach((film) =>
    renderFilm(siteFilmListContainerElement, film));

  // Кнопка «Show more»;
  const siteFilmListElement = siteFilmsElement.querySelector(`.films-list`);
  render(siteFilmListElement, new ButtonShowMoreComponent().getElement(), RenderPosition.BEFOREEND
  );

  const loadMoreButton = siteFilmListElement.querySelector(
      `.films-list__show-more`
  );

  loadMoreButton.addEventListener(`click`, () => {
    const prevFilmCount = showingFilmCount;
    showingFilmCount += SHOWING_FILM_STEP;

    films
    .slice(prevFilmCount, showingFilmCount)
    .forEach((film) =>
      renderFilm(siteFilmListContainerElement, film));
    if (showingFilmCount >= films.length) {
      loadMoreButton.remove();
    }
  });
  render(
      siteFilmsElement,
      new ListTopFilmsComponent().getElement(),
      RenderPosition.BEFOREEND
  );

  const siteTopFilmsElement = siteFilmsElement.querySelector(
      `.films-list--extra .films-list__container`
  );

  const filmTop = generateFilmCards(TOP_FILM_COUNT);

  filmTop.slice(0, TOP_FILM_COUNT).forEach((film) =>
    renderFilm(siteTopFilmsElement, film)
  );

  // и «Most commented» (доп.задание)

  render(
      siteFilmsElement,
      new ListMostCommentsFilmComponent().getElement(),
      RenderPosition.BEFOREEND
  );

  const siteMostCommentsFilmElement = siteFilmsElement.querySelector(
      `.films-list--extra:last-child .films-list__container`
  );

  const filmMostComment = generateFilmCards(MOST_COMMENT_FILM_COUNT);

  filmMostComment.slice(0, MOST_COMMENT_FILM_COUNT).forEach((film) =>
    renderFilm(siteMostCommentsFilmElement, film)
  );
};

renderFilms();

// Статистика футер
const siteFooterElement = document.querySelector(`.footer`);
render(
    siteFooterElement,
    new StatisticsFilmComponent().getElement(),
    RenderPosition.BEFOREEND
);
