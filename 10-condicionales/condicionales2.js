/*
  @file: condicionales2.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales2"
*/

// TODO: (WSL command to execute) -> node ./10-condicionales/condicionales2.js

/* ------------- */

// programa que pide la edad de dos personas y muestra por pantalla quién es menor
const prompt = require("prompt-sync")();

let edad1 = Number.parseInt(prompt("Introduce la primera edad: "));
let edad2 = Number.parseInt(prompt("Introduce la segunda edad: "));

if (edad1 < edad2) {
  console.log("La primera edad es menor");
} else if (edad1 > edad2) {
  console.log("La segunda edad es menor");
} else {
  console.log("Las edades son iguales");
};