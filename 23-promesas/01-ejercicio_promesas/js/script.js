const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    obtainTXT();
  } else if (BUTTON.id === "object-button") {
    obtainJSON();
  } else if (BUTTON.id === "array-button" || BUTTON.id === "api-button") {
    obtainAPI();
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

async function obtainAPI() {
  const DATA = await fetch("data/employees.json");
  const DATA_JSON = await DATA.json();
  const dataString = JSON.stringify(DATA_JSON, null, 2);
  displayResult(dataString);
}

function displayResult(result) {
  CONTENT.innerHTML = result;
}