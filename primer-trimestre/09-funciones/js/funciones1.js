/*
  @file: funciones1.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "funciones1"
*/

// declaración de función
// forma 1
function sumar() {
  console.log(2 + 2);
};

sumar();

/* ------------------------------ */

// forma 2
restar();

function restar() {
  console.log(2 - 2);
};

/* ---------------------------------------------------- */

// expresión de función
// forma 1 (funciona)
let suma = function() {
  console.log(3 + 3);
}

suma();

/* ------------------------------ */

// forma 2 (no funciona)
resta()

let resta = function() {
  console.log(3 - 3);
}