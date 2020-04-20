/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/detail-film.js":
/*!***************************************!*\
  !*** ./src/components/detail-film.js ***!
  \***************************************/
/*! exports provided: createFilmDetailTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmDetailTemplate", function() { return createFilmDetailTemplate; });
const createFilmDetailTemplate = (datailsFilm) => {
  const {
    title,
    originalTitle,
    poster,
    actors,
    rating,
    genres,
    country,
    duration,
    description,
    director,
    ratingAge,
    writers,
    month,
    year,
    comments,
    author,
    emoji,
    text,
    date,
  } = datailsFilm;
  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="form-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

            <p class="film-details__age">${ratingAge}+</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: ${originalTitle}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writers}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actors}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${month} ${year}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${duration}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${country}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">${genres}</span>
                  <span class="film-details__genre">Film-Noir</span>
                  <span class="film-details__genre">Mystery</span></td>
              </tr>
            </table>

            <p class="film-details__film-description">
            ${description}
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments}</span></h3>

          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-smile">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-sleeping">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-puke">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-angry">
              </span>
              <div>
                <p class="film-details__comment-text">${text}</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">${author}</span>
                  <span class="film-details__comment-day">${date}</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>

          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};


/***/ }),

/***/ "./src/components/film-card.js":
/*!*************************************!*\
  !*** ./src/components/film-card.js ***!
  \*************************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
const createFilmCardTemplate = (film) => {
  const {title, rating, year, duration, genres, poster, description, comments, addWatchClass, watchedClass, favoriteClass} = film;


  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres}</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments} comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addWatchClass}">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClass}">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClass}">Mark as favorite</button>
    </form>
  </article>`;
};


/***/ }),

/***/ "./src/components/films-form.js":
/*!**************************************!*\
  !*** ./src/components/films-form.js ***!
  \**************************************/
/*! exports provided: createFilmsFormTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsFormTemplate", function() { return createFilmsFormTemplate; });
const createFilmsFormTemplate = () => {
  return `<section class="films"></section>`;
};


/***/ }),

/***/ "./src/components/films-list.js":
/*!**************************************!*\
  !*** ./src/components/films-list.js ***!
  \**************************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });
const createFilmsListTemplate = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};


/***/ }),

/***/ "./src/components/mock/film-card.js":
/*!******************************************!*\
  !*** ./src/components/mock/film-card.js ***!
  \******************************************/
/*! exports provided: generateFilmCard, generateFilmCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCard", function() { return generateFilmCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCards", function() { return generateFilmCards; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");



const RATING_MIN = 0;
const RATING_MAX = 9;
const HOUR_MIN = 1;
const HOUR_MAX = 3;
const MINUTE_MIN = 0;
const MINUTE_MAX = 59;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 5;
const DATE_MIN = 1900;
const DATE_MAX = 1965;
const RATING_AGE_MIN = 0;
const RATING_AGE_MAX = 18;

const generateFilmCard = () => {

  return {
    title: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["TITLES"]),
    rating: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(RATING_MIN, RATING_MAX) + `.` + Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(RATING_MIN, RATING_MAX),
    month: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["MONTH_NAMES"]),
    year: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(DATE_MIN, DATE_MAX),
    duration: `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(HOUR_MIN, HOUR_MAX)}h ${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(MINUTE_MIN, MINUTE_MAX)}m`,
    genres: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["GENRES"]),
    poster: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["POSTERS"]),
    description: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayElements"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["DESCRIPTIONS"]).join(` `),
    comments: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(COMMENTS_MIN, COMMENTS_MAX),
    addWatchClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
    watchedClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
    favoriteClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
    originalTitle: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["TITLES"]),
    director: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTOR"]),
    writers: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayElements"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["WRITERS"]).join(`, `),
    actors: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayElements"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["ACTORS"]).join(`, `),
    country: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["COUNTRY"]),
    ratingAge: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(RATING_AGE_MIN, RATING_AGE_MAX),
    emoji: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["EMOJIS"]),
    text: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["COMMENT_TEXT"]),
    author: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElement"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["NAMES"]),
    date: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(DATE_MIN, DATE_MAX),
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCard);
};





/***/ }),

/***/ "./src/components/mock/filter.js":
/*!***************************************!*\
  !*** ./src/components/mock/filter.js ***!
  \***************************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
const filterNames = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};





/***/ }),

/***/ "./src/components/most-comments-film-list.js":
/*!***************************************************!*\
  !*** ./src/components/most-comments-film-list.js ***!
  \***************************************************/
/*! exports provided: createListMostCommentsFilmTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListMostCommentsFilmTemplate", function() { return createListMostCommentsFilmTemplate; });
const createListMostCommentsFilmTemplate = () => {
  return `<section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>

    <div class="films-list__container">
    </div>
  </section>`;
};


/***/ }),

/***/ "./src/components/show-more-button.js":
/*!********************************************!*\
  !*** ./src/components/show-more-button.js ***!
  \********************************************/
/*! exports provided: createButtonShowMoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonShowMoreTemplate", function() { return createButtonShowMoreTemplate; });
const createButtonShowMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};


/***/ }),

/***/ "./src/components/site-menu.js":
/*!*************************************!*\
  !*** ./src/components/site-menu.js ***!
  \*************************************/
/*! exports provided: createMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuTemplate", function() { return createMenuTemplate; });
const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<a href="#${name}" class="main-navigation__item
    ${isChecked ? `main-navigation__item--active` : ``}">
    ${name}
    ${(name === `All movies`) ? `` : `<span class="main-navigation__item-count">${count}</span></a>`}`
  );
};

const createMenuTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filtersMarkup}
      </div>
    </nav>`;
};


/***/ }),

/***/ "./src/components/sorts.js":
/*!*********************************!*\
  !*** ./src/components/sorts.js ***!
  \*********************************/
/*! exports provided: createSortsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortsTemplate", function() { return createSortsTemplate; });
const createSortsTemplate = () => {
  return `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`;
};


/***/ }),

/***/ "./src/components/statistics.js":
/*!**************************************!*\
  !*** ./src/components/statistics.js ***!
  \**************************************/
/*! exports provided: createStatisticsFilmTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatisticsFilmTemplate", function() { return createStatisticsFilmTemplate; });
const createStatisticsFilmTemplate = () => {
  return `<section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>`;
};


/***/ }),

/***/ "./src/components/stats.js":
/*!*********************************!*\
  !*** ./src/components/stats.js ***!
  \*********************************/
/*! exports provided: createStatsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatsTemplate", function() { return createStatsTemplate; });
const createStatsTemplate = () => {
  return `<a href="#stats" class="main-navigation__additional">Stats</a>`;
};


/***/ }),

/***/ "./src/components/top-film-list.js":
/*!*****************************************!*\
  !*** ./src/components/top-film-list.js ***!
  \*****************************************/
/*! exports provided: createListTopFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListTopFilmsTemplate", function() { return createListTopFilmsTemplate; });
const createListTopFilmsTemplate = () => {
  return `<section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};


/***/ }),

/***/ "./src/components/user.js":
/*!********************************!*\
  !*** ./src/components/user.js ***!
  \********************************/
/*! exports provided: createUserTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserTemplate", function() { return createUserTemplate; });
const createUserTemplate = () => {
  return `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`;
};


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: MONTH_NAMES, COUNTRY, ACTORS, WRITERS, DIRECTOR, DESCRIPTIONS, POSTERS, GENRES, TITLES, NAMES, EMOJIS, COMMENT_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_NAMES", function() { return MONTH_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRY", function() { return COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTORS", function() { return ACTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRITERS", function() { return WRITERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTOR", function() { return DIRECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESCRIPTIONS", function() { return DESCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTERS", function() { return POSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES", function() { return GENRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMES", function() { return NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMOJIS", function() { return EMOJIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_TEXT", function() { return COMMENT_TEXT; });
const TITLES = [
  `The Man with the Golden Arm`,
  `The Great Flamarion`,
  `Santa Claus Conquers the Martians`,
  `Made for Each Other`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Sagebrush Trail`,
  `The Dance of Life`,
];

const GENRES = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
  `Film-Noir`,
];

const POSTERS = [
  `the-dance-of-life.jpg`,
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus. `
];

const DIRECTOR = [
  `Steven Spielberg`,
  `Martin Scorsese`,
  `Ridley Scott`,
  `John Woo`,
  `Christopher Nolan`,
  `Tim Burton`,
  `Hayao Miyazaki`,
  `Peter Jackson`,
  `Quentin Tarantino`,
  `Clint Eastwood`,
  `David Fincher`,
];

const WRITERS = [
  `William Shakespeare`,
  `Jonathan Swift`,
  `Samuel Johnson`,
  `Johann Wolfgang von Goethe`,
  `Jane Austen`,
  `Charles Dickens`,
  `Charlotte Bronte`,
  `Emily Bronte`,
  `Thomas Hardy`,
  `Oscar Wilde`,
];

const ACTORS = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Marlon Brando`,
  `Robert De Niro`,
  `Al Pacino`,
  `Daniel Day-Lewis`,
  `Dustin Hoffman`,
  `Tom Hanks`,
  `Anthony Hopkins`,
  `Paul Newman`,
  `Denzel Washington`,
  `Spencer Tracy`,
  `Laurence Olivier`,
  `Jack Lemmon`];

const COUNTRY = [
  `USA`,
  `CANADA`,
  `AUSTRIA`,
  `ALBANIA`,
  `CCAMBODIA`,
  `GERMANY`,
  `ICELAND`,
  `ISRAEL`,
];

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const NAMES = [
  `Roger Ebert`,
  `Pauline Kael`,
  `Leonard Maltin`,
  `Andrew Sarris`,
  `Gene Shalit`,
  `Peter Travers`,
];

const EMOJIS = [
  `smile`,
  `angry`,
  `puke`,
  `sleeping`,
];

const COMMENT_TEXT = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user.js */ "./src/components/user.js");
/* harmony import */ var _components_site_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/site-menu.js */ "./src/components/site-menu.js");
/* harmony import */ var _components_stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stats.js */ "./src/components/stats.js");
/* harmony import */ var _components_sorts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sorts.js */ "./src/components/sorts.js");
/* harmony import */ var _components_films_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/films-form.js */ "./src/components/films-form.js");
/* harmony import */ var _components_films_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/films-list.js */ "./src/components/films-list.js");
/* harmony import */ var _components_film_card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/film-card.js */ "./src/components/film-card.js");
/* harmony import */ var _components_show_more_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/show-more-button.js */ "./src/components/show-more-button.js");
/* harmony import */ var _components_top_film_list_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/top-film-list.js */ "./src/components/top-film-list.js");
/* harmony import */ var _components_most_comments_film_list_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/most-comments-film-list.js */ "./src/components/most-comments-film-list.js");
/* harmony import */ var _components_statistics_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/statistics.js */ "./src/components/statistics.js");
/* harmony import */ var _components_detail_film_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/detail-film.js */ "./src/components/detail-film.js");
/* harmony import */ var _components_mock_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mock/filter.js */ "./src/components/mock/filter.js");
/* harmony import */ var _components_mock_film_card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mock/film-card.js */ "./src/components/mock/film-card.js");















const FILM_COUNT = 20;
const SHOWING_FILM_STEP = 5;
const TOP_FILM_COUNT = 2;
const MOST_COMMENT_FILM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Звание пользователя;
const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, Object(_components_user_js__WEBPACK_IMPORTED_MODULE_0__["createUserTemplate"])(), `beforeend`);

// Меню (фильтры и статистика);
// Фильтры
const siteMainElement = document.querySelector(`.main`);

const filter = Object(_components_mock_filter_js__WEBPACK_IMPORTED_MODULE_12__["generateFilters"])();

render(siteMainElement, Object(_components_site_menu_js__WEBPACK_IMPORTED_MODULE_1__["createMenuTemplate"])(filter), `beforeend`);
// Статистика
const siteNavigationElement = siteMainElement.querySelector(`.main-navigation`);
render(siteNavigationElement, Object(_components_stats_js__WEBPACK_IMPORTED_MODULE_2__["createStatsTemplate"])(), `beforeend`);

// Сортировка
render(siteMainElement, Object(_components_sorts_js__WEBPACK_IMPORTED_MODULE_3__["createSortsTemplate"])(), `beforeend`);

// Поле с карточками
render(siteMainElement, Object(_components_films_form_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsFormTemplate"])(), `beforeend`);

const siteFilmsElement = siteMainElement.querySelector(`.films`);
render(siteFilmsElement, Object(_components_films_list_js__WEBPACK_IMPORTED_MODULE_5__["createFilmsListTemplate"])(), `beforeend`);

// Карточка фильма;
const siteFilmListContainerElement = siteFilmsElement.querySelector(
    `.films-list__container`
);

const films = Object(_components_mock_film_card_js__WEBPACK_IMPORTED_MODULE_13__["generateFilmCards"])(FILM_COUNT);

let showingFilmCount = SHOWING_FILM_STEP;

films.slice(0, showingFilmCount)
  .forEach((film) => render(siteFilmListContainerElement, Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_6__["createFilmCardTemplate"])(film), `beforeend`));

// Кнопка «Show more»;
const siteFilmListElement = siteFilmsElement.querySelector(`.films-list`);
render(siteFilmListElement, Object(_components_show_more_button_js__WEBPACK_IMPORTED_MODULE_7__["createButtonShowMoreTemplate"])(), `beforeend`);

// Карточки фильма в блоках «Top rated»;
render(siteFilmsElement, Object(_components_top_film_list_js__WEBPACK_IMPORTED_MODULE_8__["createListTopFilmsTemplate"])(), `beforeend`);

const siteTopFilmsElement = siteFilmsElement.querySelector(
    `.films-list--extra .films-list__container`
);

const filmTop = Object(_components_mock_film_card_js__WEBPACK_IMPORTED_MODULE_13__["generateFilmCards"])(TOP_FILM_COUNT);

filmTop.slice(0, MOST_COMMENT_FILM_COUNT).forEach((film) => render(siteTopFilmsElement, Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_6__["createFilmCardTemplate"])(film), `beforeend`));

// и «Most commented» (доп.задание)
render(siteFilmsElement, Object(_components_most_comments_film_list_js__WEBPACK_IMPORTED_MODULE_9__["createListMostCommentsFilmTemplate"])(), `beforeend`);

const siteMostCommentsFilmElement = siteFilmsElement.querySelector(
    `.films-list--extra:last-child .films-list__container`
);

const filmMostComment = Object(_components_mock_film_card_js__WEBPACK_IMPORTED_MODULE_13__["generateFilmCards"])(MOST_COMMENT_FILM_COUNT);

filmMostComment.slice(0, TOP_FILM_COUNT).forEach((film) => render(siteMostCommentsFilmElement, Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_6__["createFilmCardTemplate"])(film), `beforeend`));

// Статистика футер
const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, Object(_components_statistics_js__WEBPACK_IMPORTED_MODULE_10__["createStatisticsFilmTemplate"])(), `beforeend`);

// Подробная информация о фильме (попап).
render(siteFooterElement, Object(_components_detail_film_js__WEBPACK_IMPORTED_MODULE_11__["createFilmDetailTemplate"])(films[1]), `afterend`);

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
    .forEach((film) => render(siteFilmListContainerElement, Object(_components_film_card_js__WEBPACK_IMPORTED_MODULE_6__["createFilmCardTemplate"])(film), `beforeend`));
  // Обновляем список карточек и добавлем обработчик
  filmCard = document.querySelectorAll(`.film-card__poster`);
  for (let i = 0; i < filmCard.length; i++) {
    filmCard[i].addEventListener(`click`, openPopup);
  }

  if (showingFilmCount >= films.length) {
    loadMoreButton.remove();
  }
});


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomIntInclusive, getRandomElement, getRandomArrayElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntInclusive", function() { return getRandomIntInclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElement", function() { return getRandomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayElements", function() { return getRandomArrayElements; });
// Функция возвращающая случайное число от min до max (Максимум и минимум включаются)
let getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция выбора случайного элемента из массива
let getRandomElement = function (array) {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

// Функция возвращающая в массив случайное кол-во элементов другого массива
let getRandomArrayElements = function (array) {
  let arrayCopy = array.slice(0, array.length);
  let numberElements = getRandomIntInclusive(1, arrayCopy.length);
  let getElements = [];

  for (let i = 0; i < numberElements; i++) {
    let arrayRandomIndex = getRandomIntInclusive(0, arrayCopy.length - 1);
    getElements.push(arrayCopy.splice(arrayRandomIndex, 1)[0]);
  }
  return getElements;
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map