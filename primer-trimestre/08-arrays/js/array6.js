/*
  @file: array6.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array6"
*/

// "findIndex" para encontrar la primera posición en la que se encuentra un elemento
let listadoMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.log(listadoMeses.findIndex(mes => {return mes == "Enero"}));

/* --------------------------------- */

let listadoEstudiantes = [
  {nombre: "Juan", edad: 20},
  {nombre: "Alberto", edad: 18},
  {nombre: "Carlos", edad: 19},
  {nombre: "Marta", edad: 17},
];

console.log(listadoEstudiantes.findIndex(estudiante => {return estudiante.nombre == "Marta"}));

console.log(listadoEstudiantes.findIndex(estudiante => {return estudiante.nombre == "Pablo"})); // devuelve "-1"

/* ------------------------------------------------------------------------------------------------------------------ */

// "filter" para encontrar todas las coincidencias de un elemento en un array
console.log(listadoEstudiantes.filter(estudiante => estudiante.edad == 20));

/* ------------------------------------------------------------------------------------------------------------------ */

// "find" para encontrar la primera coincidencia de un elemento en un array
console.log(listadoEstudiantes.find(estudiante => estudiante.nombre == "Juan"));