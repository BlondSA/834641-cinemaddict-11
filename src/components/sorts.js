import AbstractComponent from "./abstract-component.js";

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`,
};

const removeClassSort = (elem) => {
  const sorts = elem.querySelectorAll(`.sort__button`);
  sorts.forEach((sort) => sort.classList.remove(`sort__button--active`));
};

const createSortsTemplate = () => {
  return `<ul class="sort">
      <li><a href="#" data-sort-type="${SortType.DEFAULT}" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" data-sort-type="${SortType.DATE}" class="sort__button">Sort by date</a></li>
      <li><a href="#" data-sort-type="${SortType.RATING}" class="sort__button">Sort by rating</a></li>
    </ul>`;
};

export default class Sorts extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }
  getTemplate() {
    return createSortsTemplate();
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }
      removeClassSort(this.getElement());
      const sortType = evt.target.dataset.sortType;
      evt.target.classList.add(`sort__button--active`);
      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;


      handler(this._currentSortType);
    });
  }
}
