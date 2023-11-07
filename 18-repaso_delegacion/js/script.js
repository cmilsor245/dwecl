const DESTINOS_CARDS_COMPONENTES = document.querySelector("section.destinos .contenedor-cards");

/* ------------------------------------------------------------------------------------------------- */

console.log(DESTINOS_CARDS_COMPONENTES.children[0].children[0].getAttribute("img-id"));

/* ------------------------------------------------------------------------------------------------- */

DESTINOS_CARDS_COMPONENTES.addEventListener("click", (event) => {
  console.log(`coordenada x: ${event.clientX}`);
  console.log(`coordenada y: ${event.clientY}`);
  console.log(`botón: ${event.buttons}`);
  console.log(`componente: ${event.target}`);
});

/* ------------------------------------------------------------------------------------------------- */

DESTINOS_CARDS_COMPONENTES.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    showTitleContent(event);
  }
});

function showTitleContent(event) {
  alert(event.target.textContent);
}

/* ------------------------------------------------------------------------------------------------- */

