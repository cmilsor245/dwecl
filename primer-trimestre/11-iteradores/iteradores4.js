/*
  @file: iteradores4.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores4"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores4.js

/* ------------- */

// "forEach" para recorrer un array
let arrayModulos = ["dam", "daw", "asir"];

/* ------------------------------------------------------------ */

// forma 1
arrayModulos.forEach((elemento, posicion) => {
  console.log(elemento);
  console.log(posicion);
});

/* ---------------------------------- */

// forma 2
arrayModulos.forEach((elemento) => console.log(elemento));

/* ---------------------------------- */

// forma 3
arrayModulos.forEach(elemento => console.log(elemento));