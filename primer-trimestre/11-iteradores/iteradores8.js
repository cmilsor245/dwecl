/*
  @file: iteradores8.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores8"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores8.js

/* ------------- */

// simplifica el siguiente código con un "for" o un "while"
const prompt = require("prompt-sync")();

let valor1 = Number.parseInt(prompt("Introduce un dato: "));
let valor2 = Number.parseInt(prompt("Introduce otro dato: "));
let valor3 = Number.parseInt(prompt("Introduce otro dato: "));
let valor4 = Number.parseInt(prompt("Introduce otro dato: "));
let valor5 = Number.parseInt(prompt("Introduce otro dato: "));

let suma = valor1 + valor2 + valor3 + valor4 + valor5;
let media = suma/5;

console.log(`suma: ${suma}`);
console.log(`media: ${media}`);

/* ------------------------------------------------------------- */

// solución
let suma2 = 0;

for (let i = 0; i < 5; i++) {
  let valor = Number.parseInt(prompt("Introduce un dato: "));
  suma2 += valor;
};

let media2 = suma/5;

console.log(`suma: ${suma2}`);
console.log(`media: ${media2}`);