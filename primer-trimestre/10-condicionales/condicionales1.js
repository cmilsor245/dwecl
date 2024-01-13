/*
  @file: condicionales1.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales1"
*/

// TODO: ejecutar el comando "npm install prompt-sync"
// TODO: ejecutar el comando "node ./10-condicionales/condicionales1.js" para ejecutar el archivo

/* ------------- */

const prompt = require("prompt-sync")(); // importación de la librería "prompt-sync"

let edad = Number.parseInt(prompt("Introduce tu edad: "));

if (edad < 15) {
  console.log("Edad menor que 15.");
} else {
  console.log("Edad mayor o igual a 15.");
};