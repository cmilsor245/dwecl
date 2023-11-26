const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", async (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    await obtainTXT();
  } else if (BUTTON.id === "object-button") {
    await obtainJSON();
  } else if (BUTTON.id === "array-button") {
    await obtainArray();
  } else if (BUTTON.id === "api-button") {
    await obtainAPI();
  }
});

async function obtainTXT() {
  const DATA = await fetch("data/data.txt");
  const DATA_TEXT = await DATA.text();
  displayResult(DATA_TEXT);
}

async function obtainJSON() {
  const DATA = await fetch("data/employee.json");
  const DATA_JSON = await DATA.json();
  const dataString = JSON.stringify(DATA_JSON, null, 2);
  displayResult(dataString);
}

async function obtainArray() {
  const DATA = await fetch("data/employees.json");
  const DATA_JSON = await DATA.json();
  const dataString = JSON.stringify(DATA_JSON, null, 2);
  displayResult(dataString);
}

async function obtainAPI() {
  const DATA = await fetch("https://jsonplaceholder.typicode.com/users");
  const DATA_JSON = await DATA.json();
  const dataString = JSON.stringify(DATA_JSON, null, 2);
  displayResult(dataString);
}

function displayResult(result) {
  const formattedResult = document.createElement("pre");
  formattedResult.textContent = result;

  while (CONTENT.firstChild) {
    CONTENT.removeChild(CONTENT.firstChild);
  }

  CONTENT.appendChild(formattedResult);
}