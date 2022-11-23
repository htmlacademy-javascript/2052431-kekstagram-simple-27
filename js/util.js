const ALERT_SHOW_TIME = 5000;

//Проверка нажатия клавиши escape
const isEscape = (evt) => evt.key === 'Escape';

//сообщение
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '20px 20px';
  alertContainer.style.fontSize = '48px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'violet';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscape, showAlert};

