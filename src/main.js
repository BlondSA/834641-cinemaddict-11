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

const FILM_COUNT = 5;
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
render(siteMainElement, createMenuTemplate(), `beforeend`);
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
for (let i = 0; i < FILM_COUNT; i++) {
  render(siteFilmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

// Кнопка «Show more»;
const siteFilmListElement = siteFilmsElement.querySelector(`.films-list`);
render(siteFilmListElement, createButtonShowMoreTemplate(), `beforeend`);

// Карточки фильма в блоках «Top rated»;
render(siteFilmsElement, createListTopFilmsTemplate(), `beforeend`);

const siteTopFilmsElement = siteFilmsElement.querySelector(
    `.films-list--extra .films-list__container`
);
for (let i = 0; i < TOP_FILM_COUNT; i++) {
  render(siteTopFilmsElement, createFilmCardTemplate(), `beforeend`);
}

// и «Most commented» (доп.задание)
render(siteFilmsElement, createListMostCommentsFilmTemplate(), `beforeend`);

const siteMostCommentsFilmElement = siteFilmsElement.querySelector(
    `.films-list--extra:last-child .films-list__container`
);
for (let i = 0; i < MOST_COMMENT_FILM_COUNT; i++) {
  render(siteMostCommentsFilmElement, createFilmCardTemplate(), `beforeend`);
}

// Статистика футер
const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, createStatisticsFilmTemplate(), `beforeend`);

// Подробная информация о фильме (попап).
render(siteFooterElement, createFilmDetailTemplate(), `afterend`);

// Временно добавил класс скрывающий всплывающее окно
const sitePopupElement = document.querySelector(`.film-details`);
sitePopupElement.classList.add(`visually-hidden`);
