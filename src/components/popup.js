import AbstractSmartComponent from "./abstract-smart-component.js";
import {EMOJIS} from "../const.js";

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

const createCommentTemplate = (commentData) => {
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

const createControlsTemplate = (control) => {
  const {addedToWatchList, markedAsWatched, isFavorite} = control;
  const selectedWatchList = addedToWatchList ? `checked` : ``;
  const selectedWatched = markedAsWatched ? `checked` : ``;
  const selectedFavorite = isFavorite ? `checked` : ``;

  return (
    `<input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${selectedWatchList}>
    <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${selectedWatched}>
    <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${selectedFavorite}>
    <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>`
  );
};

const createPopupTemplate = (filmDetails) => {
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
    year,
    comments,
    fullDescription,
  } = filmDetails;

  const buttonsMarks = createControlsTemplate(filmDetails);
  const commentItems = comments.map((it) => createCommentTemplate(it)).join(`\n`);
  const commentsCount = comments.length;
  const emojisTemplate = createEmojiTemplate(EMOJIS);
  const genresList = createGenresTemplate(genres);

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
                <td class="film-details__cell">${year.format(`DD MMMM YYYY`)}</td>
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
          ${buttonsMarks}
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

export default class Popup extends AbstractSmartComponent {
  constructor(film) {
    super();
    this._film = film;

    this._controlButtonsChangeHandler = null;

    this._emoji = null;
    this._setCommentsEmoji();
  }

  getTemplate() {
    return createPopupTemplate(this._film, this._emogi);
  }

  rerender() {
    super.rerender();
  }

  recoveryListeners() {
    this.setControlButtonsChangeHandler(this._controlButtonsChangeHandler);
    this.setPopupCloseButtonClickHandler(this.popupCloseButtonClickHandler);
    this.removePopupCloseButtonClickHandler(this._removeButtonHandler);
    this._setCommentsEmoji();
  }

  setControlButtonsChangeHandler(handler) {
    this.getElement().querySelector(`.film-details__controls`).addEventListener(`click`, (evt) => {
      handler(evt.target.name);
    });
    this._controlButtonsChangeHandler = handler;
  }

  clearPopupEmojiContainer() {
    this.getElement().querySelector(`.film-details__add-emoji-label`).innerHTML = ``;
  }

  setPopupCloseButtonClickHandler(handler) {
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, handler);

    this.popupCloseButtonClickHandler = handler;
  }

  removePopupCloseButton(handler) {
    this.getElement().querySelector(`.film-details__close-btn`).removeEventListener(`click`, handler);

    this.removeButtonHandler = handler;
  }

  _setCommentsEmoji() {
    const emojiList = this.getElement().querySelector(`.film-details__emoji-list`);
    const emojiPlace = this.getElement().querySelector(`.film-details__add-emoji-label`);

    emojiList.addEventListener(`click`, (evt) => {
      const emojiLabel = evt.target.closest(`.film-details__emoji-label img`);

      if (emojiLabel) {
        const selectedEmoji = emojiLabel.cloneNode(true);
        selectedEmoji.style.width = `55px`;
        selectedEmoji.style.height = `55px`;


        if (emojiPlace.children.length === 0) {
          emojiPlace.append(selectedEmoji);
        }

        if (emojiPlace.children.length === 1) {
          emojiPlace.replaceChild(selectedEmoji, emojiPlace.querySelector(`img`));
        }
      }

    });
  }
}
