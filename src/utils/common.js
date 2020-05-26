// Функция возвращающая случайное число от min до max (Максимум и минимум включаются)
export let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция выбора случайного элемента из массива
export let getRandomElement = (array) =>
  array[getRandomIntInclusive(0, array.length - 1)];

// Функция возвращающая в массив случайное кол-во элементов другого массива
export let getRandomArrayElements = (array) => {
  let arrayCopy = array.slice(0);
  let numberElements = getRandomIntInclusive(1, arrayCopy.length);
  let getElements = [];

  for (let i = 0; i < numberElements; i++) {
    let arrayRandomIndex = getRandomIntInclusive(0, arrayCopy.length - 1);
    getElements.push(arrayCopy.splice(arrayRandomIndex, 1)[0]);
  }
  return getElements;
};

export let sortMinToMax = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

export let getRandomDateTime = () => {
  const targetDateTime = new Date();
  targetDateTime.setDate(targetDateTime.getDate() - getRandomIntInclusive(0, 10));
  targetDateTime.setHours(targetDateTime.getHours() - getRandomIntInclusive(0, 24));
  targetDateTime.setMinutes(targetDateTime.getMinutes() - getRandomIntInclusive(0, 60));
  return targetDateTime;
};


// Функция возврщающая текст длинной не более 139 символов, если текст больше, он обрезается и в конец добавляется троеточие
export let cutText = (text, limit) => {
  text = text.trim();
  if (text.length <= limit) {
    return text;
  }
  text = text.slice(0, limit);
  return text.trim() + `...`;
};


// Функция генерирующая булево значение
export let getRundomBoolean = (a, b) => (Math.random() > 0.5 ? a : b);
