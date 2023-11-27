const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT_ELEMENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", async (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    await obtainTXT();
  } else if (BUTTON.id === "object-button") {
    await obtainFetch("employee");
  } else if (BUTTON.id === "array-button") {
    await obtainFetch("employees");
  } else if (BUTTON.id === "api-button") {
    await obtainFetch("https://picsum.photos/list");
  }
});

async function obtainTXT() {
  const DATA = await fetch("data/data.txt");
  const DATA_TEXT = await DATA.text();
  CONTENT_ELEMENT.innerHTML = `<pre>${DATA_TEXT}</pre>`;
}

async function obtainFetch(source) {
  const DATA = await fetch(`data/${source}.json`);
  const DATA_JSON = await DATA.json();
  CONTENT_ELEMENT.innerHTML = `<pre>${JSON.stringify(DATA_JSON, null, 2)}</pre>`;
}