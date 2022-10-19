//Функция, возвращающая случайное целое число из переданного диапазона включительно (источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

const randomNumber = (min, max) => {
  if(min < 0 || min > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

//Функция для проверки максимальной длины строки

const stringLength = (string, maxLength) => string.length <= maxLength;
randomNumber(5, 15);
stringLength('hbhhbh', 140);

// Генерация объектов
const likesCount = {
  min : 25,
  max: 200,
};
const commentsCount = {
  min: 0,
  max: 200,
};
const photoDescription = [
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
const similarPhotoDataCount = 25;

// Получает список чисел от 1 до 25

const getListElements = (counter) => {
  const newArray = [];
  for(let i = 1; i <= counter; i++) {
    newArray.push(i);
  }
  return newArray;
};

const IdNumbersArray = getListElements(25);

// Получает рандомный элемент массива

const getRandomArrayElement = (elements) =>
  elements[randomNumber(0, elements.length - 1)];

// Создает один объект с описанием фотографии

const createPhotoDataArr = () => ({
  id: getRandomArrayElement(IdNumbersArray),
  url: `photos/${getRandomArrayElement(IdNumbersArray)}.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: randomNumber(likesCount.min, likesCount.max),
  comments: randomNumber(commentsCount.min, commentsCount.max),
});

// Создает 25 объектов с описанием фотографии

const similarPhotoDataArr = Array.from({length: similarPhotoDataCount},createPhotoDataArr );
// eslint-disable-next-line no-console
console.log(similarPhotoDataArr);
