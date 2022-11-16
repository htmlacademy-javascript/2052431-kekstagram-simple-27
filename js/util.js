
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

// Получает список чисел от 1 до 25

const getListElements = (counter) => {
  const newArray = [];
  for(let i = 1; i <= counter; i++) {
    newArray.push(i);
  }
  return newArray;
};

// Получает рандомный элемент массива

const getRandomArrayElement = (elements) =>
  elements[randomNumber(0, elements.length - 1)];

//Проверка нажатия клавиши escape
const isEscape = (evt) => evt.key === 'Escape';


export {randomNumber, getListElements, getRandomArrayElement, isEscape};

