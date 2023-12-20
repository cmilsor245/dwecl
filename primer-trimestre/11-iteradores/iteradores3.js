/*
  @file: iteradores3.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores3" - programa que pide un límite de valores al usuario. se muestran los números desde el 1 hasta dicho límite, indicando si cada uno de ellos es múltiplo de 2, de 3, de los dos o de ninguno
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores3.js

/* ------------- */

const prompt = require("prompt-sync")();

let limite = parseInt(prompt("Introduce un límite de valores: "));

console.log(limite);

for (let i = 1; i <= limite; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(`${i} es múltiplo de 2 y de 3`);
  } else if (i % 2 === 0) {
    console.log(`${i} es múltiplo de 2`);
  } else if (i % 3 === 0) {
    console.log(`${i} es múltiplo de 3`);
  } else {
    console.log(`${i} no es múltiplo de 2 ni de 3`);
  }
};