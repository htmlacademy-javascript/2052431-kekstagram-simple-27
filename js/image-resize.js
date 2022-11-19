
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const textScaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
// изменение масшатба фото и запись выбранного значения
const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  textScaleInput.value = `${value}%`;
};
// коллбэк при меньшении масштаба
const onReduceButtonClick = () => {
  const currentValue = parseInt(textScaleInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};
// коллбэк при увелечении масштаба
const onIncreaseButtonClick = () => {
  const currentValue = parseInt(textScaleInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue =  MAX_SCALE;
  }
  scaleImage(newValue);
};
// сброс
const resetScale = () => {
  scaleImage();
}
// обработчики
reduceButton.addEventListener('click', onReduceButtonClick);
increaseButton.addEventListener('click', onIncreaseButtonClick);

export {resetScale};
