export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

// Функция возвращающая случайное число от min до max (Максимум и минимум включаются)
let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция выбора случайного элемента из массива
let getRandomElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

// Функция возвращающая в массив случайное кол-во элементов другого массива
let getRandomArrayElements = (array) => {
  let arrayCopy = array.slice(0);
  let numberElements = getRandomIntInclusive(1, arrayCopy.length);
  let getElements = [];

  for (let i = 0; i < numberElements; i++) {
    let arrayRandomIndex = getRandomIntInclusive(0, arrayCopy.length - 1);
    getElements.push(arrayCopy.splice(arrayRandomIndex, 1)[0]);
  }
  return getElements;
};


// Функция возврщающая текст длинной не более 139 символов, если текст больше, он обрезается и в конец добавляется троеточие
let cutText = (text, limit) => {
  text = text.trim();
  if (text.length <= limit) {
    return text;
  }
  text = text.slice(0, limit);
  return text.trim() + `...`;
};


// Функция генерирующая булево значение
let getRundomBoolean = (a, b) => (Math.random() > 0.5 ? a : b);


const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export {
  getRandomIntInclusive,
  getRandomElement,
  getRandomArrayElements,
  cutText,
  getRundomBoolean,
  createElement,
  render,
};
