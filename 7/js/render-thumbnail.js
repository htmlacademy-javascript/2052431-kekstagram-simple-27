import {createPhotoDataArr} from './data.js';
const thumbnailsUsersList = document.querySelector('.pictures');
const thumbnailsOtherUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');

const newThumbnails = createPhotoDataArr();
const thumbnailsUsersListFragment = document.createDocumentFragment();
newThumbnails.forEach(({url, likes, comments}) => {
  const newThumbnailElement = thumbnailsOtherUsersTemplate.cloneNode(true);
  newThumbnailElement.querySelector('.picture__img').src = url;
  newThumbnailElement.querySelector('.picture__likes').textContent = likes;
  newThumbnailElement.querySelector('.picture__comments').textContent = comments;
  thumbnailsUsersListFragment.appendChild(newThumbnailElement);
});

thumbnailsUsersList.appendChild(thumbnailsUsersListFragment);
