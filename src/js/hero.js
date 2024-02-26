const refs = {
  formEl: document.querySelector('.hero-form[data-id="2"]'),
  infoEl: document.querySelector('.hero-block'),
};

function searchHero(hero) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/api/';
  const PARAMS = `?hero=${hero}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const name = e.target.elements.query.value;
  searchHero(name).then(data => renderHero(data));

  e.target.reset();
}

function heroTemplate(hero) {
  return `
  <div class="hero-card">
    <div class="image-container">
      <img src="${hero.images.sm}" alt="${hero}">
      <p>${hero.name}</p>
    </div>
  </div>
  `;
}

function renderHero(hero) {
  const markup = heroTemplate(hero);
  console.log(markup);
  refs.infoEl.insertAdjacentHTML('beforeend', markup);
}
