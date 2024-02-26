const refs = {
  formEl: document.querySelector('.searchIP[data-id="3"]'),
  infoEl: document.querySelector('.geolocation-block'),
};

function searchHero(ip) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/json/';
  const PARAMS = `?ip=${ip}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const ip = e.target.elements.query.value;
  searchHero(ip).then(data => renderLocation(data));

  e.target.reset();
}

function locationTemplate(ip) {
  return `
    <div class="location-card"
    <div class="location-img-container">
      <img src="${ip.country_flag}" alt="${ip}>
    </div>
    <div class="location-description-container">
    <ul>
    <li>Country: ${ip.country}</li>
    <li>City: ${ip.city}</li>
    <li>Find on the map: <a href="https://maps.google.com/?q=${ip.latitude},${ip.longitude}">Click here</a></li>
    </ul>
    </div>
    </div>
  `;
}

function renderLocation(ip) {
  const markup = locationTemplate(ip);
  refs.infoEl.insertAdjacentHTML('beforeend', markup);
}