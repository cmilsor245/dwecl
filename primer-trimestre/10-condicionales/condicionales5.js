/*
  @file: condicionales5.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales5"
*/

// TODO: (WSL command to execute) -> node ./10-condicionales/condicionales5.js

/* ------------- */

// operadores lógicos "&&" y "||"
const prompt = require("prompt-sync")();

let estudios = prompt("Introduce tus estudios: ");

if (estudios.toLowerCase() === "daw" || estudios.toLowerCase() === "dam" || estudios.toLowerCase() === "asir") {
  console.log("Estás cursando unos estudios de Grado Superior de Informática.");
} else {
  console.log("No estás cursando estudios de Grado Superior de Informática.");
};

let paro = prompt("¿Estás en paro? -> ");

if ((["si", "sí"].includes(paro.toLowerCase())) && (estudios.toLowerCase() === "daw" || estudios.toLowerCase() === "dam" || estudios.toLowerCase() === "asir")) { // se usa un array para comprobar que la variable "paro" coincide con alguno de los elementos
  console.log("Tienes derecho a una beca.");
} else {
  console.log("No tienes derecho a una beca.");
};