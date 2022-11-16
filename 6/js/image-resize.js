
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const textScaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  textScaleInput.value = `${value}%`;
};

const onReduceButtonClick = () => {
  const currentValue = parseInt(textScaleInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue =  MIN_SCALE;
  }
  scaleImage(newValue);
};

const onIncreaseButtonClick = () => {
  const currentValue = parseInt(textScaleInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue =  MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
}

reduceButton.addEventListener('click', onReduceButtonClick);
increaseButton.addEventListener('click', onIncreaseButtonClick);

export {resetScale};
