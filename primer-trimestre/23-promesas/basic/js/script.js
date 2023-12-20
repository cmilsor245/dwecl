const URL = "https://jsonplaceholder.typicode.com/posts";

/* fetch(URL)
  .then((response) => response.json())
  .then((result) => displayJSON(result))
  .catch((err) => displayError(err)); */

async function obtainPOST() {
  const DATA = await fetch(URL);
  const DATA_JSON = await DATA.json();

  displayJSON(DATA_JSON);
}

obtainPOST();

function displayJSON(json) {
  console.log("primero");
  console.log(json);
}

function displayError(err) {
  console.log(err);
}

console.log("segundo");