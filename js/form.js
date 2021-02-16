// import { apartmentsMap } from './create-array-ads.js';
const apartmentsMap = {
  'flat': {
    ruLabel: 'Квартира',
    price: 1000,
  },
  'bungalow': {
    ruLabel: 'Бунгало',
    price: 0,
  },
  'house': {
    ruLabel: 'Дом',
    price: 5000,
  },
  'palace': {
    ruLabel: 'Дворец',
    price: 10000,
  },
}
const form = document.querySelector('.ad-form');

const type = form.querySelector('#type');
const price = form.querySelector('#price');

const onTypeChange = () => {
  const apartmentPrice = apartmentsMap[type.value].price
  price.min = apartmentPrice;
  price.placeholder = apartmentPrice;
}

onTypeChange();
type.addEventListener('change', onTypeChange)

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const onTimeChange = (select) => {
  return (evt) => {
    select.selectedIndex = evt.target.selectedIndex;
  }
}

timeIn.addEventListener('change', onTimeChange(timeOut))
timeOut.addEventListener('change', onTimeChange(timeIn))
