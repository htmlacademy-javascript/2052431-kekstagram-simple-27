import {renderSimilarthumbnails} from './render-thumbnail.js';
import {setUserFormSubmit, closeModal} from './upload-form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(renderSimilarthumbnails, showAlert);
setUserFormSubmit(closeModal);


