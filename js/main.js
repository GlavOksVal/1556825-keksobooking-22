'use strict';
// возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNum = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * ((max - min) + 1) + min); //Максимум и минимум включаются
  }
  throw ('Ошибка ввода данных');
}
getRandomNum(0, 10);

// возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloatPoint = function (min, max, fix) {
  if (min >= 0 && max > min) {
    return (Math.random() * ((max - min) + 1) + min).toFixed(fix);
  }
  throw ('Ошибка ввода данных');
}

getRandomFloatPoint(1, 7, 2);
