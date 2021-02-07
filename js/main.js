'use strict';

const SIMILAR_RENT_ADS_COUNT = 10;
const LOCATION_MIN_LATITUDE = 35.65;
const LOCATION_MAX_LATITUDE = 35.7;
const LOCATION_MIN_LONGITUDE = 139.7;
const LOCATION_MAX_LONGITUDE = 139.8;
const MAX_RENT_PRICE = 1000000;
const MAX_ROOMS = 20;
const MAX_GUESTS = 40;
const APARTMENT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKIN_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const POSSIBLE_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]
const PHOTO_URLS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]
const MAX_PHOTOS_NUMBER = 20;
const DESCRIPTION_COMPONENTS = [
  'Срочно',
  'Чистое жильё',
  'Метро в пешей доступности',
  'Развитая инфраструктура: магазины, поликлиники, школа, детский сад',
  'Тихие соседи',
  'Спокойный район',
  'Красивый вид на город',
  'Возможен торг',
]
const AVATAR_URL_PARTS = [
  'img/avatars/user0',
  '.png',
]

//2task
// возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNum = function (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * ((max - min) + 1) + min); //Максимум и минимум включаются
  }
  throw ('Ошибка ввода данных');
}

// возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloatPoint = function (min, max, fix) {
  if (min >= 0 && max > min) {
    return (Math.random() * ((max - min) + 1) + min).toFixed(fix);
  }
  throw ('Ошибка ввода данных');
}

//3task
//генерирует рандомный массив
const getRandomArrayElement = (array) => array[getRandomNum(0, (array.length - 1))];

//создает генерируемую цифру в адресе изображения вида
const createAuthor = () => {
  return {
    avatar: AVATAR_URL_PARTS[0] + getRandomNum(1, 8).toString() + AVATAR_URL_PARTS[1],
  }
}

//гененрирует массив строк— массив случайной длины из значений
const createFeatures = () => {
  const features = [];
  POSSIBLE_FEATURES.forEach((possibleFeature) => {
    if (getRandomNum(0, 1) === 1) {
      features.push(possibleFeature);
    }
  })
  return features;
}

//строка — описание помещения
const createDescription = () => {
  let description = '';
  DESCRIPTION_COMPONENTS.forEach((descriptionComponent) => {
    if (getRandomNum(0, 1) === 1) {
      description = description + descriptionComponent + '. ';
    }
  })
  return description.trim();
}

//массив строк — массив случайной длины из значений..
//Метод push присоединяет значения к массиву.
const createPhotos = () => {
  const photosNumber = getRandomNum(1, MAX_PHOTOS_NUMBER);
  const photos = [];
  for (let i = 0; i <= photosNumber; i++) {
    photos.push(getRandomArrayElement(PHOTO_URLS));
  }
  return photos;
}

//собираем в один объект — содержит информацию об объявлении
const createOffer = ([latitude, longitude]) => {
  return {
    title: 'Заголовок',
    address: latitude.toString() + ', ' + longitude.toString(),
    price: getRandomNum(1, MAX_RENT_PRICE),
    type: getRandomArrayElement(APARTMENT_TYPES),
    rooms: getRandomNum(1, MAX_ROOMS),
    guests: getRandomNum(1, MAX_GUESTS),
    checkin: getRandomArrayElement(CHECKIN_CHECKOUT_TIMES),
    checkout: getRandomArrayElement(CHECKIN_CHECKOUT_TIMES),
    features: createFeatures(),
    description: createDescription(),
    photos: createPhotos(),
  }
}

//объект — местоположение в виде географических координат
const createLocation = ([latitude, longitude]) => {
  return {
    x: latitude,
    y: longitude,
  }
}
const createLocationCoordinates = () => {
  return [
    getRandomFloatPoint(LOCATION_MIN_LATITUDE, LOCATION_MAX_LATITUDE, 5),
    getRandomFloatPoint(LOCATION_MIN_LONGITUDE, LOCATION_MAX_LONGITUDE, 5),
  ]
}

//Собираем все в один массив
const createRentAd = () => {
  const locationCoordinates = createLocationCoordinates();
  return {
    author: createAuthor(),
    offer: createOffer(locationCoordinates),
    location: createLocation(locationCoordinates),
  }
}

//Для генерации массива заданной длины воспользуемся ключевым словом new вместе с конструктором объекта Array.
//Затем с помощью метода массивов fill мы заполним его значениями null.
//А после, методом массивов map,
//заполним наш массив похожих волшебников результатом выполнения функции createRentAd,
//то есть объектами. SIMILAR_RENT_ADS_COUNT в константу количество необходимых объектов для генерации.
const similarRentAds = new Array(SIMILAR_RENT_ADS_COUNT).fill(null).map(() => createRentAd())

const useSomethingUnusedWithoutConsole = (somethingUnused) => somethingUnused;
useSomethingUnusedWithoutConsole(similarRentAds);
