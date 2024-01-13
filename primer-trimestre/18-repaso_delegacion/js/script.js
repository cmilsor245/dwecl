const DESTINOS_CARDS_COMPONENT = document.querySelector("section.destinos .contenedor-cards");
const WHAT_TO_DO_NY_COMPONENT = document.querySelectorAll("main.contenido");

/* ------------------------------------------------------------------------------------------------- */

console.log(DESTINOS_CARDS_COMPONENT.children[0].children[0].getAttribute("img-id"));

/* ------------------------------------------------------------------------------------------------- */

DESTINOS_CARDS_COMPONENT.addEventListener("click", (event) => {
  console.log(`coordenada x: ${event.clientX}`);
  console.log(`coordenada y: ${event.clientY}`);
  console.log(`botón: ${event.buttons}`);
  console.log(`componente: ${event.target}`);
})

/* ------------------------------------------------------------------------------------------------- */

DESTINOS_CARDS_COMPONENT.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    showTitleContent(event);
  }
})

function showTitleContent(event) {
  alert(event.target.textContent);
}

/* ------------------------------------------------------------------------------------------------- */

WHAT_TO_DO_NY_COMPONENT.addEventListener("click", whatToDoNYTitle);

function whatToDoNYTitle(event) {
  console.log("testing");
}