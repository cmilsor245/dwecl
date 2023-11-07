const contenedorCardsDestinos = document.querySelector("section.destinos .contenedor-cards");
const contenedorCardsHospedaje = document.querySelector("section.hospedaje .contenedor-cards");
const componenteCardsHospedaje = document.querySelectorAll("section.hospedaje .contenedor-cards .card");

contenedorCardsDestinos.addEventListener("click", (event) => {
  console.log(`coordenada x: ${event.clientX}`);
  console.log(`coordenada y: ${event.clientY}`);
  console.log(`botón: ${event.buttons}`);
  console.log(`componente: ${event.target}`);
  console.log(`contenido: ${event.target.textContent}`);
})