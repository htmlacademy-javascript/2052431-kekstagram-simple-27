//Функция, возвращающая случайное целое число из переданного диапазона включительно (источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomnumber(min, max) {
  if(min < 0 || min > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomnumber(5,10);
//Функция для проверки максимальной длины строки
function checkStrockeLength(stringLength, minLength, maxLength) {
  if(stringLength >= minLength && stringLength <= maxLength) {
    return true;
  }
  return false;
}
checkStrockeLength(10, 20, 140);
/*
function checkStrockeLength() {
  const MIN_LENGTH_STRING = 20;
  const MAX_LENGTH_STRING = 140;
  const textarea = document.querySelector('.text__description');
  textarea.addEventListener('input',() => {
    const textLength = textarea.value.length;
    if(textLength >= MIN_LENGTH_STRING && textLength <= MAX_LENGTH_STRING) {
      return true;
    }
    return false;
  });
}

checkStrockeLength();
*/
