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
  } else if (BUTTON.id === "clear-button") {
    clearContentElement(CONTENT_ELEMENT);
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

  CONTENT_ELEMENT.innerHTML = `
    <br />
    id -> ${employee.id}<br />
    name -> ${employee.name}<br />
    company -> ${employee.company}<br />
    job -> ${employee.job}
  `;
}

function displayArray(elements) {
  clearContentElement(CONTENT_ELEMENT);

  elements.forEach((item) => {
    let content;

    if ("download_url" in item) { // esto diferencia el array de objetos de la api, ya que los objetos del archivo local no tienen el atributo "download_url"
      content = `
        <br />
        id -> ${item.id}<br />
        author -> ${item.author}<br />
        width -> ${item.width}<br />
        height -> ${item.height}<br />
        url -> <a href = "${item.url}" target = "_blank">${item.url}</a><br />
        download_url -> <a href = "${item.download_url}" target = "_blank">${item.download_url}</a><br /><br />
        ----------------------------------------------------<br />
      `;
    } else {
      content = `
        <br />
        id -> ${item.id}<br />
        name -> ${item.name}<br />
        company -> ${item.company}<br />
        job -> ${item.job}<br /><br />
        ----------------------------------------------------<br />
      `;
    }

    CONTENT_ELEMENT.innerHTML += content;
  });
}

function clearContentElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}