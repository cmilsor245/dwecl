const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    obtainTXT();
  } else if (BUTTON.id === "object-button") {
    obtainJSON();
  } else if (BUTTON.id === "array-button") {
    obtainArray();
  } else if (BUTTON.id === "api-button") {
    obtainAPI();
  }
})

async function obtainTXT() {
  const DATA = await fetch("data/data.txt");

  const DATA_TEXT = await DATA.text();

  console.log(DATA_TEXT);

  displaResult(DATA_TEXT);
}

async function obtainJSON() {
  const DATA = await fetch("data/employees.json");

  const DATA_JSON = await DATA.json();

  console.log(DATA_JSON);

  displaResult(DATA_JSON);
}

async function obtainArray() {
  const DATA = await fetch("data/employees.json");

  const DATA_JSON = await DATA.json();

  console.log(DATA_JSON);

  displayResult(DATA_JSON);
}

async function obtainAPI() {
  const DATA = await fetch("data/employees.json");

  const DATA_JSON = await DATA.json();

  console.log(DATA_JSON);

  displayResult(DATA_JSON);
}

function displaResult(result) {
  CONTENT.innerHTML = result;
}