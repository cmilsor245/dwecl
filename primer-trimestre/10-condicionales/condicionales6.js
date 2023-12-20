/*
  @file: condicionales6.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales6"
*/

// TODO: (WSL command to execute) -> node ./10-condicionales/condicionales6.js

/* ------------- */

// operador ternario
const prompt = require('prompt-sync')();

let edad = Number.parseInt(prompt("Introduce tu edad: "));

function mensaje(termino) {
  console.log(`Eres ${termino} de edad.`);
};

/* ---------------------------------------------------------------- */

if (Number.isNaN(edad)) {
  console.log("No es un número.");
} else {
  (edad >= 18) ? mensaje("mayor") : mensaje("menor"); // si la condición es "true", se ejecuta el primer caso y si la condición es "false", se ejecuta el segundo caso
};