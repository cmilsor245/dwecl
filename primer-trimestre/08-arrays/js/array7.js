/*
  @file: array7.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array7"
*/

let listadoMeses1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
let listadoMeses2 = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre"];

/* -------------------------------------------------------------------------- */

// "concat" concatena dos arrays
let union1 = listadoMeses1.concat(listadoMeses2);
console.log(union1);

// alternativas
let union2 = [...listadoMeses1, ...listadoMeses2];
console.log(union2);

/* ----------------------------------------- */

let union3 = [...listadoMeses1, ...listadoMeses2, "Noviembre", "Diciembre"];
console.log(union3);

/* -------------------------------------------------------------------------- */

// concatenar objetos
let listadoEstudiantes = [
  {nombre: "Juan", edad: 20},
  {nombre: "Alberto", edad: 18},
  {nombre: "Carlos", edad: 19},
  {nombre: "Marta", edad: 17},
];

let otroEstudiante = {nombre: "Pablo", edad: 21};

console.table([otroEstudiante, ...listadoEstudiantes]);