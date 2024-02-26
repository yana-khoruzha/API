(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function c(e){const t="https://jsonplaceholder.typicode.com",n="/comments",s=`?id=${e}`,o=t+n+s;return fetch(o,{headers:{header1:"hello",header2:"hi"}}).then(i=>i.json()).then(i=>{console.log(i)})}c(1);c(2);const a={formEl:document.querySelector('.binance-form[data-id="1"]'),infoEl:document.querySelector(".binance-block")};function u(e){const t="https://binance43.p.rapidapi.com",n="/ticker/price",s=`?symbol=${e}`,o=t+n+s;return fetch(o,{headers:{"X-RapidAPI-Key":"818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2","X-RapidAPI-Host":"binance43.p.rapidapi.com"}}).then(i=>i.json())}a.formEl.addEventListener("submit",p);function p(e){e.preventDefault();const t=e.target.elements.query.value;u(t).then(n=>f(n)),e.target.reset()}function m({price:e,symbol:t}){return`
        <span>${e}</span>
        <span>${t}</span>
  `}function f(e){const t=m(e);a.infoEl.innerHTML=t}const d={formEl:document.querySelector('.hero-form[data-id="2"]'),infoEl:document.querySelector(".hero-block")};function h(e){const t="https://binance43.p.rapidapi.com",n="/api/",s=`?hero=${e}`,o=t+n+s;return fetch(o,{headers:{"X-RapidAPI-Key":"818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2","X-RapidAPI-Host":"superhero-search.p.rapidapi.com"}}).then(i=>i.json())}d.formEl.addEventListener("submit",y);function y(e){e.preventDefault();const t=e.target.elements.query.value;h(t).then(n=>g(n)),e.target.reset()}function b(e){return`
  <div class="hero-card">
    <div class="image-container">
      <img src="${e.images.sm}" alt="${e}">
      <p>${e.name}</p>
    </div>
  </div>
  `}function g(e){const t=b(e);console.log(t),d.infoEl.insertAdjacentHTML("beforeend",t)}const l={formEl:document.querySelector('.searchIP[data-id="3"]'),infoEl:document.querySelector(".geolocation-block")};function E(e){const t="https://binance43.p.rapidapi.com",n="/json/",s=`?ip=${e}`,o=t+n+s;return fetch(o,{headers:{"X-RapidAPI-Key":"818d641a62mshdf126610083b813p11e3bajsn7daad05c42d2","X-RapidAPI-Host":"ip-geolocation-ipwhois-io.p.rapidapi.com"}}).then(i=>i.json())}l.formEl.addEventListener("submit",v);function v(e){e.preventDefault();const t=e.target.elements.query.value;E(t).then(n=>P(n)),e.target.reset()}function A(e){return`
    <div class="location-card"
    <div class="location-img-container">
      <img src="${e.country_flag}" alt="${e}>
    </div>
    <div class="location-description-container">
    <ul>
    <li>Country: ${e.country}</li>
    <li>City: ${e.city}</li>
    <li>Find on the map: <a href="https://maps.google.com/?q=${e.latitude},${e.longitude}">Click here</a></li>
    </ul>
    </div>
    </div>
  `}function P(e){const t=A(e);l.infoEl.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
