const BUTTONS_CONTAINER = document.querySelector("#buttons-container");
const CONTENT = document.querySelector("#content");

BUTTONS_CONTAINER.addEventListener("click", async (event) => {
  const BUTTON = event.target;

  if (BUTTON.id === "txt-button") {
    await obtainTXT();
  } else if (BUTTON.id === "object-button") {
    await obtainJSON("employee");
  } else if (BUTTON.id === "array-button") {
    await obtainJSON("employees");
  } else if (BUTTON.id === "api-button") {
    await obtainAPI();
  }
});