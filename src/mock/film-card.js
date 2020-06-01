import {getRandomIntInclusive, getRandomElement, getRandomArrayElements, cutText, getRundomBoolean, getRandomDate, getRandomDuration} from "../utils/common.js";
import {MONTH_NAMES, COUNTRY, ACTORS, WRITERS, DIRECTOR, DESCRIPTIONS, POSTERS, GENRES, TITLES} from "../const.js";
import {generateComments} from "./comments.js";
import moment from "moment";

const RATING_MIN = 0;
const RATING_MAX = 9;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 5;
const RATING_AGE_MIN = 0;
const RATING_AGE_MAX = 18;
const TEXT_CUT_COUNT = 139;

const generateFilmCard = () => {

  return {
    title: getRandomElement(TITLES),
    rating: getRandomIntInclusive(RATING_MIN, RATING_MAX) + `.` + getRandomIntInclusive(RATING_MIN, RATING_MAX),
    month: getRandomElement(MONTH_NAMES),
    year: moment(getRandomDate(new Date(2010), new Date())),
    duration: moment(getRandomDuration(getRandomIntInclusive(30, 300)), `h mm`).format(`h[h] mm[m]`),
    genres: getRandomArrayElements(GENRES),
    poster: getRandomElement(POSTERS),
    fullDescription: getRandomArrayElements(DESCRIPTIONS).join(` `),
    description: cutText(getRandomArrayElements(DESCRIPTIONS).join(` `), TEXT_CUT_COUNT),
    comments: generateComments(getRandomIntInclusive(COMMENTS_MIN, COMMENTS_MAX)),
    isAddedToWatch: getRundomBoolean(`film-card__controls-item--active`, ``),
    isWatched: getRundomBoolean(`film-card__controls-item--active`, ``),
    isFavorite: getRundomBoolean(`film-card__controls-item--active`, ``),
    originalTitle: getRandomElement(TITLES),
    director: getRandomElement(DIRECTOR),
    writers: getRandomArrayElements(WRITERS).join(`, `),
    actors: getRandomArrayElements(ACTORS).join(`, `),
    country: getRandomElement(COUNTRY),
    ratingAge: getRandomIntInclusive(RATING_AGE_MIN, RATING_AGE_MAX),
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCard);
};


export {generateFilmCard, generateFilmCards};
