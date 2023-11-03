/*
  @file: numero4.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "numero4"
*/

let numero = parseInt(prompt("Introduzca un número: "));

/* ------------------------------------------------------------------------------------------------------ */

if (Number.isNaN(numero)) {
  console.log("No es un número");
} else {
  console.log("Es un número");
}

/* ------------------------------- */

if (!Number.isInteger(numero)) {
  console.log("No es un número");
} else {
  console.log("Es un número");
}

/* ------------------------------------------------------------------------------------------------------ */

// formas de convertir a número (si convierten el contenido de una variable no guardan los decimales ninguna de las formas)
let test = "123.13";

// forma 1
test = parseInt(test);

console.log(test + " " + typeof(test));

/* -------------------------- */

// forma 2
test = parseFloat(test);

console.log(test + " " + typeof(test));

/* -------------------------- */

// forma 3
test = +test;

console.log(test + " " + typeof(test));

/* ------------------------------------------------------------------------------------------------------ */

// formas de convertir a número (convirtiendo un valor directamente, donde se ve la diferencia)
// forma 1
console.log(parseInt("123.13")); // si hay decimales los desecha

/* -------------------------- */

// forma 2
console.log(parseFloat("123.13")); // si hay decimales los guarda

/* -------------------------- */

// forma 3
console.log(+("123.13")); // si hay decimales los guarda