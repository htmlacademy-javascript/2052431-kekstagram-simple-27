import {isEscape} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');
const body = document.querySelector('body');

const onSuccessButtonClick = () => {
  closeMessage();
};

const onErrorButtonClick = () => {
  closeMessage();
};

const onOverlayClick = () => {
  closeMessage();
};

const onMessageEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const showSuccessMessage = function () {
  const successMessage = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButton.addEventListener('click', onSuccessButtonClick);
  body.append(successMessage);
  body.style.overflow = 'hidden';
};

const showErrorMessage = function () {
  const errorMessage = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  body.append(errorMessage);
  body.style.overflow = 'hidden';
};

function closeMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  errorButton.removeEventListener('click', onErrorButtonClick);
  successButton.removeEventListener('click', onSuccessButtonClick);
  body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};
