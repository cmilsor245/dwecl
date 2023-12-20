const API_KEY = ""; // insert api key for https://openweathermap.org
const URL = "https://api.openweathermap.org/data/2.5/weather";

const CITY_INPUT = document.querySelector("#ciudad");
const COUNTRY_INPUT = document.querySelector("#pais");

const SUBMIT_BUTTON = document.querySelector("#submit");

const CONTENT_ELEMENT = document.querySelector("#resultado");

const ALL_CONTENT_WRAPPER = document.querySelector("#content-wrapper");

let error_displayed = false;

SUBMIT_BUTTON.addEventListener("click", async (e) => {
  e.preventDefault();

  const CITY = CITY_INPUT.value;
  const COUNTRY = COUNTRY_INPUT.value;

  if (CITY === "" || COUNTRY === "") {
    if (!error_displayed) {
      displayError("empty");
      error_displayed = true;
    }
  } else {
    const URL_FINAL = `${URL}?q=${CITY},${COUNTRY}&appid=${API_KEY}`;

    obtainData(URL_FINAL);
  }
})

async function obtainData(url) {
  const DATA = await fetch(url);
  const DATA_JSON = await DATA.json();
  displayData(DATA_JSON);
}

function displayData(data) {
  if (data.cod === "404") { // la api siempre devuelve un atributo "cod", pero cuando la ciudad es incorrecta el error es un 404
    if (!error_displayed) {
      displayError("not_found");
      error_displayed = true;
    }
  } else {
    clearContentElement(CONTENT_ELEMENT);

    CONTENT_ELEMENT.innerHTML = `
      <div id = "content">
        <h2>Clima en ${data.name}, ${data.sys.country}</h2>
        <p id = "current-temp">${Math.round(data.main.temp - 273.15)} °C</p>
        <p class "max-min">Max ${Math.round(data.main.temp_max - 273.15)} °C</p>
        <p class "max-min">Min ${Math.round(data.main.temp_min - 273.15)} °C</p>
      </div>
    `;
  }
}

function clearContentElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function displayError(error_type) {
  const ERROR_DIV = document.createElement("div");

  if (error_type === "empty") {
    ERROR_DIV.innerHTML = `
      <p id = "error-title">Error!</p>
      <p id = "error-description">AMBOS CAMPOS SON OBLIGATORIOS</p>
    `;
  } else if (error_type === "not_found") {
    ERROR_DIV.innerHTML = `
      <p id = "error-title">Error!</p>
      <p id = "error-description">CIUDAD NO ENCONTRADA</p>
    `;
  }

  ERROR_DIV.id = "error-div";
  ALL_CONTENT_WRAPPER.appendChild(ERROR_DIV);
  setTimeout(() => {
    ERROR_DIV.remove();
    error_displayed = false;
  }, 2000);
}