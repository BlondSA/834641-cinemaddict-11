import AbstractSmartComponent from "./abstract-smart-component.js";
import {EMOJIS} from "../const.js";

const createButtonMarkup = (name, descr, isActive = true) => {
  return `<input type="checkbox" class="film-details__control-input visually-hidden" id="${name}" name="${name}" ${isActive ? `checked` : ``}>
  <label for="${name}" class="film-details__control-label film-details__control-label--${name}">${descr}</label>`;
};

const createEmojiTemplate = (emojis) => {
  return emojis
    .map((emoji) => {
      return (
        `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
        <label class="film-details__emoji-label" for="emoji-${emoji}">
        <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
        </label>`
      );
    })
    .join(`\n`);
};

const createCommentTemplate = (commentData) => {``
  const {commentId, commentEmotion, commentText, commentAuthor, commentDate} = commentData;

  return (
    `<li class="film-details__comment" id="${commentId}">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${commentEmotion}.png" width="55" height="55" alt="emoji-${commentEmotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${commentAuthor}</span>
        <span class="film-details__comment-day">${commentDate}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  );
};

const createGenresTemplate = (genres) => {
  return genres.map((it) => `<span class="film-details__genre">${it}</span>`).join(`\n`);
};

const createAddEmojiTemplate = (emoji) => {
  return emoji ? `<img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">` : ``;
};

const createFilmDetailTemplate = (filmDetails) => {
  const {
    title,
    originalTitle,
    poster,
    actors,
    rating,
    genres,
    country,
    duration,
    director,
    ratingAge,
    writers,
    month,
    year,
    comments,
    fullDescription,
  } = filmDetails;

  const commentItems = comments.map((it) => createCommentTemplate(it)).join(`\n`);
  const commentsCount = comments.length;
  const emojisTemplate = createEmojiTemplate(EMOJIS);
  const genresList = createGenresTemplate(genres);

  const buttonAddWatchList = createButtonMarkup(`watchlist`, `Add to watchlist`, !filmDetails.isAddedToWatch);
  const buttonMarkAsWatches = createButtonMarkup(`watched`, `Already watched`, !filmDetails.isWatched);
  const buttonMarkAsFavorite = createButtonMarkup(`favorite`, `Add to favorites`, !filmDetails.isFavorite);

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
                  ${genresList}
              </tr>
            </table>

            <p class="film-details__film-description">
              ${fullDescription}
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          ${buttonAddWatchList}
          ${buttonMarkAsWatches}
          ${buttonMarkAsFavorite}
        </section>
      </div>

      <div class="form-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsCount}</span></h3>

          <ul class="film-details__comments-list">
            ${commentItems}
          </ul>

          <div class="film-details__new-comment">
            <div for="add-emoji" class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              ${emojisTemplate}
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

export default class FilmDetail extends AbstractSmartComponent {
  constructor(filmDetails) {
    super();
    this._filmDetails = filmDetails;
    this._clickHandler = null;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilmDetailTemplate(this._filmDetails);
  }

  recoveryListeners() {
    this.setClickHandler(this._clickHandler);
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
  }

  setClickHandler(handler) {
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, handler);
    this._clickHandler = handler;
  }


  recoveryListeners() {
    this._subscribeOnEvents();
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`#watchlist`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._isAddedToWatch = !this._isAddedToWatch;
      this.rerender();
    });

    element.querySelector(`#watched`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._isWatched = !this._isWatched;
      this.rerender();
    });

    element.querySelector(`#favorite`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this._isFavorite = !this._isFavorite;
      this.rerender();
    });

    element.querySelector(`.film-details__emoji-list`)
    .addEventListener(`change`, (evt) => {
      evt.preventDefault();
    });
  }

  clearFormData() {
    const form = this.getElement().querySelector(`form`);
    const emoji = form.querySelector(`.film-details__add-emoji-label`);

    if (emoji.firstChild) {
      emoji.removeChild(emoji.firstChild);
    }

    form.reset();
  }

  setOnDeleteButtonCLickHandler(handler) {
    const comments = this.getElement().querySelectorAll(
        `.film-details__comment`
    );

    comments.forEach((comment) => {
      const deleteButton = comment.querySelector(
          `.film-details__comment-delete`
      );

      deleteButton.addEventListener(`submit`, (evt) => {
        evt.preventDefault();

        handler(comment.id);
        comment.remove();
      });
    });
  }

  setOnDeleteButtonCLickHandler(handler) {
    const deleteButton = this.getElement().querySelectorAll(`.film-details__comment-delete`);

    deleteButton.forEach((button) => button.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      button.disabled = true;
      button.textContent = `Deleting...`;

      const commentId = button.closest(`.film-details__comment`).id;

      handler(commentId, button);
    }));
  }

  setOnInputCommentHandler(handler) {
    const commentField = this.getElement().querySelector(`.film-details__comment-input`);
    commentField.addEventListener(`input`, handler);
  }

  emojiChange(handler) {
    const element = this.getElement();

    element.querySelector(`.film-details__emoji-list`).addEventListener(`click`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      handler();
      this.getElement().querySelector(`.film-details__add-emoji-label`).innerHTML = createAddEmojiTemplate(evt.target.value);
    });
  }
}
