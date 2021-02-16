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

const getRandomArray = (array) => {
  const newArray = [];
  array.forEach((element) => {
    if (Math.random() > 0.5) {
      newArray.push(element);
    }
  })
  return newArray;
}

const getWordForm = (number, wordForms) => {
  let lastTwoCharsNum = number % 100;
  let lastChar = lastTwoCharsNum % 10;

  if (lastTwoCharsNum > 10 && lastTwoCharsNum < 20) { return wordForms[2]; }
  if (lastChar === 1) { return wordForms[0]; }
  if (lastChar > 1 && lastChar < 5) { return wordForms[1]; }
  if (lastChar > 6 && lastChar < 9 && wordForms[3]) { return wordForms[3]; }
  if (lastTwoCharsNum === 40 && wordForms[4]) { return wordForms[4]; }
  if ((lastTwoCharsNum === 90 || lastTwoCharsNum === 0) && wordForms[5]) { return wordForms[5]; }
  return wordForms[2];
}

export { getRandomNum , getRandomFloatPoint, getRandomArrElement, getRandomArray, getWordForm };
