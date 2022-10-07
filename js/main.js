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
randomNumber();
stringLength();
