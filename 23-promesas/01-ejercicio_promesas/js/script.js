const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT_ELEMENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    obtainTXT();
  } else if (BUTTON.id === "object-button") {
    obtainFetch("employee");
  } else if (BUTTON.id === "array-button") {
    obtainFetch("employees");
  } else if (BUTTON.id === "api-button") {
    obtainFetch("https://picsum.photos/v2/list");
  }
});

async function obtainTXT() {
  const DATA = await fetch("data/data.txt");
  const DATA_TEXT = await DATA.text();

  clearContentElement(CONTENT_ELEMENT);

  CONTENT_ELEMENT.innerHTML = `<pre>${DATA_TEXT}</pre>`;
}

async function obtainFetch(source) {
  let url;

  if (source.startsWith("https")) {
    url = source;
  } else {
    url = `data/${source}.json`;
  }

  const DATA = await fetch(url);
  const DATA_JSON = await DATA.json();

  if (Array.isArray(DATA_JSON)) { // el archivo con varios empleados y el enlace a la api devuelven los dos un array
    displayArray(DATA_JSON);
  } else if (typeof DATA_JSON === "object") { // el archivo con un único empleado devuelve un objeto
    displayEmployee(DATA_JSON);
  }
}

function displayEmployee(employee) {
  clearContentElement(CONTENT_ELEMENT);

  CONTENT_ELEMENT.innerHTML = `<pre>${JSON.stringify(employee, null, 2)}</pre>`;
}

function displayArray(elements) {
  clearContentElement(CONTENT_ELEMENT);

  elements.forEach((element) => {
    CONTENT_ELEMENT.innerHTML += `<pre>${JSON.stringify(element, null, 2)}</pre>`;
  });
}

function clearContentElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}