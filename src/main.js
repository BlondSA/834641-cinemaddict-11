import UserComponent from "./components/user.js";
import PageController from "./controllers/page-controller.js";
import FilmsFormComponent from "./components/films-form.js";
import MenuComponent from "./components/site-menu.js";
import StatsComponent from "./components/stats.js";
import StatisticsFilmComponent from "./components/statistics.js";
import {generateFilters} from "./mock/filter.js";
import {render, RenderPosition} from "./utils/render.js";
import {generateFilmCards} from "./mock/film-card.js";

const FILM_COUNT = 20;

// Звание пользователя;
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new UserComponent(), RenderPosition.BEFOREEND);

// Фильтры
const filter = generateFilters();
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new MenuComponent(filter), RenderPosition.BEFOREEND);

// Статистика
const siteNavigationElement = siteMainElement.querySelector(`.main-navigation`);
render(siteNavigationElement, new StatsComponent(), RenderPosition.BEFOREEND);

// Статистика футер
const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, new StatisticsFilmComponent(), RenderPosition.BEFOREEND);

const filmsFormComponent = new FilmsFormComponent();
const films = generateFilmCards(FILM_COUNT);
const pageController = new PageController(filmsFormComponent, films);

render(siteMainElement, filmsFormComponent, RenderPosition.BEFOREEND);

pageController.render();
