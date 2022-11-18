import {isEscape} from './util.js';
import { resetScale } from './image-resize.js';
import { resetEffects } from './effect.js';
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const overlayForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('.img-upload__cancel');
const imageComment = document.querySelector('.text__description');


//Пристин
const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__wrapper',
    errorTextParent: 'img-upload__wrapper',
    errorTextClass: 'errortxt'
  },
  true
);
//открыть модальное окно
const showModal = () => {
  overlayForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};
//закрыть модальное окно
const closeModal = () => {
  overlayForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  imageComment.value = '';
  // uploadForm.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onModalEscKeydown);
};


// обработчик изменение инпута
const onFileInputChange = () => {
  showModal();
};
// обработчик отправки формы
const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
};
// обработчик закрытия кнопкой
const onCancelButtonClick = () => {
  closeModal();
};
//обработчик ескейп
const onModalEscKeydown = (evt) => {
  if(isEscape(evt)){
    evt.preventDefault();
    closeModal();
  }
};

uploadFile.addEventListener('change', onFileInputChange);
uploadForm.addEventListener('submit', onFormSubmit);
cancelButton.addEventListener('click', onCancelButtonClick);

