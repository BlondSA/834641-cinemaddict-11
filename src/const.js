const SHOWING_FILM_ON_START = 5;
const SHOWING_FILM_BY_BUTTON = 5;
const SHOWING_EXTRA_FILMS = 2;

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
  `In rutrum ac purus sit amet tempus. `,
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
  `Jack Lemmon`,
];

const COUNTRY = [
  `USA`,
  `CANADA`,
  `AUSTRIA`,
  `ALBANIA`,
  `CAMBODIA`,
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

const EMOJIS = [`smile`, `angry`, `puke`, `sleeping`];

const COMMENT_TEXT = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];

const ESCAPE_BUTTON = `Escape`;
const ESC_BUTTON = `Esc`;

const Mode = {
  DEFAULT: `default`,
  POPUP: `opened`,
};

const DurationTime = {
  MINUTES_IN_HOUR: 60,
  SECONDS_IN_MINUTE: 60,
  MILESECS_IN_SECOND: 1000
};

const ControlButton = {
  WATCHLIST: `watchlist`,
  WATCHED: `watched`,
  FAVORITE: `favorite`,
};

export {
  SHOWING_FILM_ON_START,
  SHOWING_FILM_BY_BUTTON,
  SHOWING_EXTRA_FILMS,
  MONTH_NAMES,
  COUNTRY,
  ACTORS,
  WRITERS,
  DIRECTOR,
  DESCRIPTIONS,
  POSTERS,
  GENRES,
  TITLES,
  NAMES,
  EMOJIS,
  COMMENT_TEXT,
  ESCAPE_BUTTON,
  ESC_BUTTON,
  ControlButton,
  Mode,
  DurationTime,
};

