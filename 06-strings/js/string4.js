/*
  @file: string4.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "string4"
*/

// eliminar espacios en blanco
let correo = " lala@gmail.com";

console .log(correo); // sin eliminarlos

// forma 1
console.log(correo.trimStart()); // elimina los espacios al inicio

// forma 2
console.log(correo.trimEnd()); // elimina los espacios al final

// forma 3
console.log(correo.trimStart().trimEnd()); // elimina los espacios al inicio y al final

// forma 4
console.log(correo.trim()); // elimina los espacios