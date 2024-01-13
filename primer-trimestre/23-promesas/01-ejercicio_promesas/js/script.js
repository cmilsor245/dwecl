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
    addHiddenClass(CONTENT_ELEMENT);
  }
});

async function obtainTXT() {
  removeHiddenClass(CONTENT_ELEMENT);

  const DATA = await fetch("data/data.txt");
  const DATA_TEXT = await DATA.text();

  clearContentElement(CONTENT_ELEMENT);

  CONTENT_ELEMENT.innerHTML = `<pre>${DATA_TEXT}</pre>`;
}

async function obtainFetch(source) {
  removeHiddenClass(CONTENT_ELEMENT);

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
    <div>
      <p><span class = "attribute-title">id</span><img src = "icons/right-arrow.svg" /><span class = "attribute-value">${employee.id}</span></p>
      <p><span class = "attribute-title">name</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${employee.name}</span></p>
      <p><span class = "attribute-title">company</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${employee.company}</span></p>
      <p><span class = "attribute-title">job</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${employee.job}</span></p>
    </div>
  `;
}

function displayArray(elements) {
  clearContentElement(CONTENT_ELEMENT);

  elements.forEach((item) => {
    let content;

    if ("download_url" in item) { // esto diferencia el array de objetos de la api, ya que los objetos del archivo local no tienen el atributo "download_url"
      content = `
        <div>
          <p><span class = "attribute-title">id</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.id}</span></p>
          <p><span class = "attribute-title">author</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.author}</span></p>
          <p><span class = "attribute-title">width</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.width}</span></p>
          <p><span class = "attribute-title">height</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.height}</span></p>
          <p><a href = "${item.url}" target = "_blank">visitar post</a></p>
          <p><a href = "${item.download_url}" target = "_blank">ver imagen</a></p>
        </div>
      `;
    } else {
      content = `
        <div>
          <p><span class = "attribute-title">id</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.id}</span></p>
          <p><span class = "attribute-title">name</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.name}</span></p>
          <p><span class = "attribute-title">company</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.company}</span></p>
          <p><span class = "attribute-title">job</span><img src = "icons/right-arrow.svg"  /><span class = "attribute-value">${item.job}</span></p>
        </div>
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

function removeHiddenClass(element) {
  element.classList.remove("hidden");
}

function addHiddenClass(element) {
  element.classList.add("hidden");
}