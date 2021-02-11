import { getRandomNum, getRandomFloatPoint, getRandomArrElement } from './util.js';

const AMOUNT_OBJECTS = 10;
const AVATAR_URL_PARTS = [
  'img/avatars/user0',
  '.png',
];
const TITLE_OFFER = [
  'Квартира на окраине',
  'Квартира в центре',
  'Дом в частном секторе',
  'Бунгало на берегу озера',
];
const PRICE_MIN = 0;
const PRICE_MAX = 10000;

const PROPERTY_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const AMOUNT_ROOMS_MIN = 1;
const AMOUNT_ROOMS_MAX = 5;

const QUANTITY_GUESTS_MIN = 1;
const QUANTITY_GUESTS_MAX = 10;

const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];

const FEATURES_OFFER = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION_OFFER = [
  'Срочно',
  'Чистое жильё',
  'Метро в пешей доступности',
  'Развитая инфраструктура: магазины, поликлиники, школа, детский сад',
  'Тихие соседи',
  'Спокойный район',
  'Красивый вид на город',
  'Возможен торг',
];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const MAX_PHOTOS_NUMBER = 20;

const LATITUDE_MIN_X = 35.65000;
const LATITUDE_MAX_X = 35.70000;

const LONGITUDE_MIN_Y = 139.70000;
const LONGITUDE_MAX_Y = 139.80000;

//создает генерируемую цифру в адресе изображения вида
const createAuthor = () => {
  return {
    avatar: AVATAR_URL_PARTS[0] + getRandomNum(1, 8).toString() + AVATAR_URL_PARTS[1],
  }
}

//гененрирует массив строк — массив случайной длины из значений
const createFeatures = () => {
  const features = [];
  FEATURES_OFFER.forEach((possibleFeature) => {
    if (getRandomNum(0, 1) === 1) {
      features.push(possibleFeature);
    }
  })
  return features;
}

//строка — описание помещения
const createDescription = () => {
  let description = '';
  DESCRIPTION_OFFER.forEach((descriptionComponent) => {
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
    photos.push(getRandomArrElement(PHOTOS));
  }
  return photos;
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
    getRandomFloatPoint(LATITUDE_MIN_X, LATITUDE_MAX_X, 5),
    getRandomFloatPoint(LONGITUDE_MIN_Y, LONGITUDE_MAX_Y, 5),
  ]
}

//собираем в один объект — содержит информацию об объявлении

const createOffer = ([latitude, longitude]) => {
  return {
    title: getRandomArrElement(TITLE_OFFER),
    address: latitude.toString() + ', ' + longitude.toString(),
    price: getRandomNum(PRICE_MIN, PRICE_MAX),
    type: getRandomArrElement(PROPERTY_TYPE),
    rooms: getRandomNum(AMOUNT_ROOMS_MIN, AMOUNT_ROOMS_MAX),
    quests: getRandomNum(QUANTITY_GUESTS_MIN, QUANTITY_GUESTS_MAX),
    checkin: getRandomArrElement(CHECKIN_TIME),
    checkout: getRandomArrElement(CHECKOUT_TIME),
    features: createFeatures(),
    description: createDescription(),
    photos: createPhotos(),
  }
}

//Собираем все в один массив

const createAd = function () {
  const locationCoordinates = createLocationCoordinates();
  return {
    author: createAuthor(),
    offer: createOffer(locationCoordinates),
    location: createLocation(locationCoordinates),
  }
};

//Для генерации массива заданной длины воспользуемся ключевым словом new вместе с конструктором объекта Array.
//Затем с помощью метода массивов fill мы заполним его значениями null.
//А после, методом массивов map,
//заполним наш массив похожих волшебников результатом выполнения функции createRentAd,
//то есть объектами. SIMILAR_RENT_ADS_COUNT в константу количество необходимых объектов для генерации.
const createRentAds = () => new Array(AMOUNT_OBJECTS).fill(null).map(() => createAd());

export { createRentAds };
