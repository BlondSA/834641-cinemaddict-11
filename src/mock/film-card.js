import {getRandomIntInclusive, getRandomElement, getRandomArrayElements, cutText, getRundomBoolean} from "../utils.js";
import {MONTH_NAMES, COUNTRY, ACTORS, WRITERS, DIRECTOR, DESCRIPTIONS, POSTERS, GENRES, TITLES, NAMES, EMOJIS, COMMENT_TEXT} from "../const.js";

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
const TEXT_CUT_COUNT = 139;

const generateFilmCard = () => {

  return {
    title: getRandomElement(TITLES),
    rating: getRandomIntInclusive(RATING_MIN, RATING_MAX) + `.` + getRandomIntInclusive(RATING_MIN, RATING_MAX),
    month: getRandomElement(MONTH_NAMES),
    year: getRandomIntInclusive(DATE_MIN, DATE_MAX),
    duration: `${getRandomIntInclusive(HOUR_MIN, HOUR_MAX)}h ${getRandomIntInclusive(MINUTE_MIN, MINUTE_MAX)}m`,
    genres: getRandomElement(GENRES),
    poster: getRandomElement(POSTERS),
    fullDescription: getRandomArrayElements(DESCRIPTIONS).join(` `),
    description: cutText(getRandomArrayElements(DESCRIPTIONS).join(` `), TEXT_CUT_COUNT),
    comments: getRandomIntInclusive(COMMENTS_MIN, COMMENTS_MAX),
    isAddedToWatch: getRundomBoolean(`film-card__controls-item--active`, ``),
    isWatched: getRundomBoolean(`film-card__controls-item--active`, ``),
    isFavorite: getRundomBoolean(`film-card__controls-item--active`, ``),
    originalTitle: getRandomElement(TITLES),
    director: getRandomElement(DIRECTOR),
    writers: getRandomArrayElements(WRITERS).join(`, `),
    actors: getRandomArrayElements(ACTORS).join(`, `),
    country: getRandomElement(COUNTRY),
    ratingAge: getRandomIntInclusive(RATING_AGE_MIN, RATING_AGE_MAX),
    emoji: getRandomElement(EMOJIS),
    text: getRandomElement(COMMENT_TEXT),
    author: getRandomElement(NAMES),
    date: getRandomIntInclusive(DATE_MIN, DATE_MAX),
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCard);
};


export {generateFilmCard, generateFilmCards};
