// запрос к серверу на получение данных
const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
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
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Невозможно отправить форму! Попробуйте ещё раз.');
      }
    })
    .catch((error) => {
      onFail(error.message);
    });
};

export {getData, sendData};
