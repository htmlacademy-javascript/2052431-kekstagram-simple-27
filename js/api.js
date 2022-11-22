// запрос к серверу на получение данных
const getDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const sendDataUrl = 'https://27.javascript.pages.academy/kekstagram-simple';
const getData = (onSuccess, onFail) => {
  fetch(getDataUrl)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((photos) => {
            onSuccess(photos);
          });
      } else {
        onFail('Не удалось загрузить данные. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось загрузить. Попробуйте ещё раз');
    });
};
//запрос к серверу отправка данных
const sendData = (onSuccess, onFail, body) => {
  fetch(
    sendDataUrl,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }

      onFail();
    })
    .catch(onFail);
};

export {getData, sendData};
