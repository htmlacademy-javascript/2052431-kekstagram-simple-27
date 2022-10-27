import {randomNumber, getListElements, getRandomArrayElement} from './util.js';

// Генерация объектов
const likesCount = {
  MIN : 25,
  MAX: 200,
};
const commentsCount = {
  MIN: 0,
  MAX: 200,
};
const PHOTODESCRIPTION = [
  'Природа',
  'Города',
  'Животные',
  'Люди',
  'Цветы',
  'Спорт',
  'Макросъемка',
  'Страны',
  'Ночь',
  'День',
  'Фоторепортаж',
  'Коллаж',
  'Фанатазия',
  'Море',
];
const SIMILARPHOTODATACOUNT = 25;

const idNumbersArray = getListElements(SIMILARPHOTODATACOUNT);

// Создает один объект с описанием фотографии

const createPhotoData = () => ({
  id: getRandomArrayElement(idNumbersArray),
  url: `photos/${getRandomArrayElement(idNumbersArray)}.jpg`,
  description: getRandomArrayElement(PHOTODESCRIPTION),
  likes: randomNumber(likesCount.MIN, likesCount.MAX),
  comments: randomNumber(commentsCount.MIN, commentsCount.MAX),
});

// Создает 25 объектов с описанием фотографий
const createPhotoDataArr = () => Array.from({length: SIMILARPHOTODATACOUNT},createPhotoData);

export {createPhotoDataArr};
