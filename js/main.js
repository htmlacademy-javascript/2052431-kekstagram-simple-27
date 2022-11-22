// import './render-thumbnail.js';
// import './upload-form.js';
// import './image-resize.js';
// import './effect.js';
// import './api.js';
// import './alerts.js';
import {RenderSimilarthumbnails} from './render-thumbnail.js';
import {setUserFormSubmit, closeModal} from './upload-form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData(RenderSimilarthumbnails, showAlert);
setUserFormSubmit(closeModal);


