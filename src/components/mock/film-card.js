import {getRandomIntInclusive, getRandomElement, getRandomArrayElements} from "../../utils.js";

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
  `In rutrum ac purus sit amet tempus.`
];

const generateFilmCard = () => {
  return {
    title: getRandomElement(TITLES),
    rating: getRandomIntInclusive(RATING_MIN, RATING_MAX) + `.` + getRandomIntInclusive(RATING_MIN, RATING_MAX),
    year: getRandomIntInclusive(DATE_MIN, DATE_MAX),
    duration: `${getRandomIntInclusive(HOUR_MIN, HOUR_MAX)}h ${getRandomIntInclusive(MINUTE_MIN, MINUTE_MAX)}m`,
    genres: getRandomElement(GENRES),
    poster: getRandomElement(POSTERS),
    description: getRandomArrayElements(DESCRIPTIONS),
    comments: getRandomIntInclusive(COMMENTS_MIN, COMMENTS_MAX),
    addWatchClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
    watchedClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
    favoriteClass: Math.random() > 0.5 ? `film-card__controls-item--active` : ``,
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilmCard);
};


export {generateFilmCard, generateFilmCards};
