import {createUserTemplate} from "./components/user.js";
import {createMenuTemplate} from "./components/site-menu.js";
import {createStatsTemplate} from "./components/stats.js";
import {createSortsTemplate} from "./components/sorts.js";
import {createFilmsFormTemplate} from "./components/films-form.js";
import {createFilmsListTemplate} from "./components/films-list.js";
import {createFilmCardTemplate} from "./components/film-card.js";
import {createButtonShowMoreTemplate} from "./components/show-more-button.js";
import {createListTopFilmsTemplate} from "./components/top-film-list.js";
import {createListMostCommentsFilmTemplate} from "./components/most-comments-film-list.js";
import {createStatisticsFilmTemplate} from "./components/statistics.js";
import {createFilmDetailTemplate} from "./components/detail-film.js";
import {generateFilters} from "./components/mock/filter.js";
import {generateFilmCards} from "./components/mock/film-card.js";

const FILM_COUNT = 20;
const SHOWING_FILM_STEP = 5;
const TOP_FILM_COUNT = 2;
const MOST_COMMENT_FILM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Звание пользователя;
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createUserTemplate(), `beforeend`);

// Меню (фильтры и статистика);
// Фильтры
const siteMainElement = document.querySelector(`.main`);

const filter = generateFilters();

render(siteMainElement, createMenuTemplate(filter), `beforeend`);
// Статистика
const siteNavigationElement = siteMainElement.querySelector(`.main-navigation`);
render(siteNavigationElement, createStatsTemplate(), `beforeend`);

// Сортировка
render(siteMainElement, createSortsTemplate(), `beforeend`);

// Поле с карточками
render(siteMainElement, createFilmsFormTemplate(), `beforeend`);

const siteFilmsElement = siteMainElement.querySelector(`.films`);
render(siteFilmsElement, createFilmsListTemplate(), `beforeend`);

// Карточка фильма;
const siteFilmListContainerElement = siteFilmsElement.querySelector(
    `.films-list__container`
);

const films = generateFilmCards(FILM_COUNT);

let showingFilmCount = SHOWING_FILM_STEP;

films.slice(0, showingFilmCount)
  .forEach((film) => render(siteFilmListContainerElement, createFilmCardTemplate(film), `beforeend`));

// Кнопка «Show more»;
const siteFilmListElement = siteFilmsElement.querySelector(`.films-list`);
render(siteFilmListElement, createButtonShowMoreTemplate(), `beforeend`);

// Карточки фильма в блоках «Top rated»;
render(siteFilmsElement, createListTopFilmsTemplate(), `beforeend`);

const siteTopFilmsElement = siteFilmsElement.querySelector(
    `.films-list--extra .films-list__container`
);

const filmTop = generateFilmCards(TOP_FILM_COUNT);

filmTop.slice(0, MOST_COMMENT_FILM_COUNT).forEach((film) => render(siteTopFilmsElement, createFilmCardTemplate(film), `beforeend`));

// и «Most commented» (доп.задание)
render(siteFilmsElement, createListMostCommentsFilmTemplate(), `beforeend`);

const siteMostCommentsFilmElement = siteFilmsElement.querySelector(
    `.films-list--extra:last-child .films-list__container`
);

const filmMostComment = generateFilmCards(MOST_COMMENT_FILM_COUNT);

filmMostComment.slice(0, TOP_FILM_COUNT).forEach((film) => render(siteMostCommentsFilmElement, createFilmCardTemplate(film), `beforeend`));

// Статистика футер
const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, createStatisticsFilmTemplate(), `beforeend`);

// Подробная информация о фильме (попап).
render(siteFooterElement, createFilmDetailTemplate(films[1]), `afterend`);

// Временно добавил класс скрывающий всплывающее окно
const sitePopupElement = document.querySelector(`.film-details`);
const closeButton = document.querySelector(`.film-details__close .film-details__close-btn`);
// sitePopupElement.classList.add(`visually-hidden`); // Строку нужно будет удалить
let filmCard = document.querySelectorAll(`.film-card__poster`);
const ESC_BUTTON = 27;
sitePopupElement.classList.add(`visually-hidden`);

const openPopup = () => {
  sitePopupElement.classList.remove(`visually-hidden`);
  onCardCloseClick();
};

const closePopup = () => {
  sitePopupElement.classList.add(`visually-hidden`);
  closeButton.removeEventListener(`click`, closePopup);
};

const onCardCloseClick = () => {
  closeButton.addEventListener(`click`, closePopup);
};

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    closePopup();
  }
});
for (let i = 0; i < filmCard.length; i++) {
  filmCard[i].addEventListener(`click`, openPopup);
}

// Кнопка добавления карточек
const loadMoreButton = siteFilmListElement.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevFilmCount = showingFilmCount;
  showingFilmCount += SHOWING_FILM_STEP;


  films.slice(prevFilmCount, showingFilmCount)
    .forEach((film) => render(siteFilmListContainerElement, createFilmCardTemplate(film), `beforeend`));
  // Обновляем список карточек и добавлем обработчик
  filmCard = document.querySelectorAll(`.film-card__poster`);
  for (let i = 0; i < filmCard.length; i++) {
    filmCard[i].addEventListener(`click`, openPopup);
  }

  if (showingFilmCount >= films.length) {
    loadMoreButton.remove();
  }
});
