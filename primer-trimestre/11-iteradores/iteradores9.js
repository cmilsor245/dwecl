/*
  @file: iteradores9.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores9"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores9.js

/* ------------- */

// programa que comprueba si un número es primo
const prompt = require("prompt-sync")();

let valor1 = Number.parseInt(prompt("Introduce un número: "));

/* ---------------------------------------------------------------- */

// solución
function esPrimo(valor) {
  if (valor <= 1) {
    return false;
  };

  for (let i = 2; i < valor; i++) {
    if (valor % i === 0) {
      return false;
    };
  };

  return true;
};

/* ---------------------------------------------------------------- */

var booleanPrimo = esPrimo(valor1);

if (booleanPrimo) {
  console.log(`El número ${valor1} es primo`);
} else {
  console.log(`El número ${valor1} no es primo`);
};