const getRandomNum = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * ((max - min) + 1) + min);
  }
  throw new Error('Ошибка ввода данных');
}

const getRandomFloatPoint = function (min, max, fix) {
  if (min >= 0 && max > min) {
    return (Math.random() * (max - min) + min).toFixed(fix);
  }
  throw new Error('Ошибка ввода данных');
}

const getRandomArrElement = function (array) {
  const element = array[getRandomNum(0, array.length - 1)];
  return element;
}

const getRandomАrr = function (array) {
  const index = getRandomNum(0, array.length - 1);
  const newArr = array.slice(index, index + getRandomNum(1, array.length - 1));
  return newArr;
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export { getRandomNum, getRandomFloatPoint, getRandomArrElement, getRandomАrr, isEscEvent };
