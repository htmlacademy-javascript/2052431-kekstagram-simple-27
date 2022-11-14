
При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно изменяться значение поля
.scale__control--value;
Значение должно изменяться с шагом в 25.
 Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%.
 Максимальное значение — 100%, минимальное — 25%. Значение по умолчанию — 100%;
При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться
соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.
Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).
const STEPSCALE = 25;
const MINSCALE = 25;
const MAXSCALE = 100;
const DEFAULTSCALE = 100;

const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const textScale = document.querySelector('.scale__control--value');

const reduceTextScale = () => {
  textScale.value = DEFAULTSCALE - STEPSCALE;
}
