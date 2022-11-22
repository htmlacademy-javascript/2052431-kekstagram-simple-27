import {isEscape} from './util.js';
import { resetScale } from './image-resize.js';
import { resetEffects } from './effect.js';
import {sendData} from './api.js';
import {showSuccessMessage, showErrorMessage} from './alerts.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const overlayForm = uploadForm.querySelector('.img-upload__overlay');
const uploadFile = uploadForm.querySelector('#upload-file');
const cancelButton = overlayForm.querySelector('#upload-cancel');
const imageComment = overlayForm.querySelector('.text__description');
const uploadButton = uploadForm.querySelector('.img-upload__submit');


//Пристин
const pristine = new Pristine(uploadForm,
  {
    classTo: 'img-upload__wrapper',
    errorTextParent: 'img-upload__wrapper',
    errorTextClass: 'errortxt'
  },
  true
);
// колбэки блокировки и разблокировки кнопки при отправке
const blockUploadButton = () => {
  uploadButton.disabled = true;
};

const unblockUploadButton = () => {
  uploadButton.disabled = false;
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockUploadButton();
      sendData(
        () => {
          onSuccess();
          showSuccessMessage();
          unblockUploadButton();
        },
        () => {
          showErrorMessage();
          unblockUploadButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

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
  uploadForm.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onModalEscKeydown);
};


// коллбэк изменение инпута
const onFileInputChange = () => {
  showModal();
};
// коллбэк отправки формы
const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
};
// коллбэк закрытия кнопкой
const onCancelButtonClick = () => {
  closeModal();
};
//коллбэкк ескейп
const onModalEscKeydown = (evt) => {
  if(isEscape(evt)){
    evt.preventDefault();
    closeModal();
  }
};
// обработчики
uploadFile.addEventListener('change', onFileInputChange);
uploadForm.addEventListener('submit', onFormSubmit);
cancelButton.addEventListener('click', onCancelButtonClick);

export { setUserFormSubmit };
export { closeModal };

