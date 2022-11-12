import {isEscape} from './util.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const overlayForm = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('.img-upload__cancel');

//Пристин
const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
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
  document.removeEventListener('keydown', onModalEscKeydown);
};
// обработчик изменение инпута
const onFileInputChange = () => {
  showModal();
};
// обработчик отправки формы
const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
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

