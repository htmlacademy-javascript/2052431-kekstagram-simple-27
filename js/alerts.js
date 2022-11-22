import {isEscape} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successButton = successTemplate.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');
const body = document.querySelector('body');

//колбэк закрытия при успехе по кнопке

const onSuccessButtonClick = () => {
  closeMessage();
};
//колбэк закрытия при ошибке по кнопке
const onErrorButtonClick = () => {
  closeMessage();
};
//колбэк закрытия по клику на область
const onOverlayClick = () => {
  closeMessage();
};
//колбэк закрытия по эксейпу
const onMessageEscKeydown = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};
//показать сообщение при успехе
const showSuccessMessage = function () {
  const successMessage = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  successButton.addEventListener('click', onSuccessButtonClick);
  body.append(successMessage);
  body.style.overflow = 'hidden';
};
//показать сообщение при ошибке
const showErrorMessage = function () {
  const errorMessage = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  body.append(errorMessage);
  body.style.overflow = 'hidden';
};
// закрыть сообщение
function closeMessage () {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  body.style.overflow = 'auto';
}

export {showSuccessMessage, showErrorMessage};
