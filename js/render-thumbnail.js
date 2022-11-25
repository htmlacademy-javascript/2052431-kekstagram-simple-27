const thumbnailsUsersList = document.querySelector('.pictures');
const thumbnailsOtherUsersTemplate = document.querySelector('#picture').content.querySelector('.picture');
// отрисовка миниатюр
const renderSimilarthumbnails = (thumbnails) => {
  const thumbnailsListFragment = document.createDocumentFragment();
  thumbnails.forEach(({url, likes, comments}) => {
    const newThumbnailElement = thumbnailsOtherUsersTemplate.cloneNode(true);
    newThumbnailElement.querySelector('.picture__img').src = url;
    newThumbnailElement.querySelector('.picture__likes').textContent = likes;
    newThumbnailElement.querySelector('.picture__comments').textContent = comments;
    thumbnailsListFragment.appendChild(newThumbnailElement);
    return newThumbnailElement;
  });

  thumbnailsUsersList.appendChild(thumbnailsListFragment);
};

export {renderSimilarthumbnails};
