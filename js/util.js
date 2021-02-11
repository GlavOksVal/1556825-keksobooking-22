//Нахождение случайного целого числа от и до включительно

const getRandomNum = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * ((max - min) + 1) + min);
  }
  throw new Error('Ошибка ввода данных');
}

//Нахождение случайного дробного числа с указанной точностью знаков после запятой.

const getRandomFloatPoint = function (min, max, fix) {
  if (min >= 0 && max > min) {
    return (Math.random() * (max - min) + min).toFixed(fix);
  }
  throw new Error('Ошибка ввода данных');
}

// Функция нахождения случайного элемента в массиве

const getRandomArrElement = function (array) {
  const element = array[getRandomNum(0, array.length - 1)];
  return element;
}

export { getRandomNum, getRandomFloatPoint, getRandomArrElement };
