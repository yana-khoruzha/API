const refs = {
  formEl: document.querySelector('.binance-form[data-id="1"]'),
  infoEl: document.querySelector('.binance-block'),
};

function getPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = `?symbol=${symbol}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

refs.formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.elements.query.value;
  getPrice(query).then(data => renderSymbol(data));

  e.target.reset();
}

function symbolTemplate({ price, symbol }) {
  return `
        <span>${price}</span>
        <span>${symbol}</span>
  `;
}

function renderSymbol(symbol) {
  const markup = symbolTemplate(symbol);
  refs.infoEl.innerHTML = markup;
}