/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "ejem01"
*/

var nombre;

function prompt1() {
  nombre = prompt('Por favor, introduce tu nombre:', 'Christian');
}

window.onload = prompt1;

/* ----------------------------------------------------------------------------------------- */

// event handler ("onclick")
  function handler() { // función que ingresa el texto (no se invoca a esta función todavía)
    document.getElementById('aux').textContent = `¡Hola, ${nombre}!`;
  }

  document.getElementById('handler').onclick = handler; // se llama a la función "handler" cuando se hace click en el botón

/* ----------------------------------------------------------------------------------------- */

// event listener ("addEventListener")
  function listener() {
    document.getElementById('aux').textContent += ` ¡Adiós, ${nombre}!`
  }

  document.getElementById('listener').addEventListener('click', listener);