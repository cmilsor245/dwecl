/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 09/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script para la práctica de operadores lógicos
*/

let edadIntroducida, respuestaAlcohol, respuestaFiesta, respuestaGratis;

function cargarDOM() {
  edadIntroducida = document.getElementById("edad");
  respuestaAlcohol = document.getElementById("alcohol");
  respuestaFiesta = document.getElementById("fiesta");
  respuestaGratis = document.getElementById("gratis");

  comprobacionTipo(edadIntroducida.value);

  edadIntroducida.focus();
}

window.addEventListener("load", cargarDOM);

/* -------------------------------------------------------------------------------------------------------- */

function imprimirResultado(elemento, mensaje) {
  elemento.textContent = mensaje;
}

function reset() {
  imprimirResultado(respuestaAlcohol, "---");
  imprimirResultado(respuestaFiesta, "---");
  imprimirResultado(respuestaGratis, "---");
}

function comprobacionTipo(edadIntroducida) {
  if (edadIntroducida.trim().length == 0 || isNaN(+edadIntroducida)) {
    return false;
  } else {
    return true; // es número
  }
}

function responderPreguntas(edadIntroducida, respuestaAlcohol, respuestaFiesta, respuestaGratis) {
  let edad = +edadIntroducida;

  let men1, men2, men3;

  men1 = edad >= 18 ? "Sí" : "No";
  men2 = edad >= 18 && edad <= 30 ? "Sí" : "No";
  men3 = edad >= 20 && edad <= 25 ? "Sí" : "No";

  imprimirResultado(respuestaAlcohol, men1);
  imprimirResultado(respuestaFiesta, men2);
  imprimirResultado(respuestaGratis, men3);
}

/* -------------------------------------------------------------------------------------------------------- */

function resultado(event) {
  event.preventDefault(); // evita la recargad de la página

  reset(); // el reset siempre se ejecuta

  if (comprobacionTipo(edadIntroducida.value)) {
    responderPreguntas(edadIntroducida.value, respuestaAlcohol, respuestaFiesta, respuestaGratis);
  } else {
    alert("debe introducir un número");
  }

  edadIntroducida.value = ""; // limpia el input
}