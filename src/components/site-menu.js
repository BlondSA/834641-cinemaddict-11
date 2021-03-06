import AbstractComponent from "./abstract-component.js";

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<a href="#${name}" class="main-navigation__item
    ${isChecked ? `main-navigation__item--active` : ``}">
    ${name}
    ${count ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
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

export default class Menu extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createMenuTemplate(this._filters);
  }
}

