/*
  @file: array5.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array5"
*/

// "includes" se utiliza para saber si un elemento se encuentra en un array
let listadoMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

console.log(listadoMeses.includes("Diciembre"));

console.log(listadoMeses.includes("Enero"));

/* ------------------------------------------------------------------------------------------ */

// "some" se utiliza para saber si un elemento se encuentra en un objeto
let listadoEstudiantes = [
  {nombre: "Juan", edad: 20},
  {nombre: "Alberto", edad: 18},
  {nombre: "Carlos", edad: 19},
  {nombre: "Marta", edad: 17},
];

console.log(listadoEstudiantes.some(function(mes) {
  return mes.nombre == "Juan";
}));

console.log(listadoEstudiantes.some(function(estudiante) {
  return estudiante.edad == "31";
}));

/* ---------------------- */

// forma abreviada
console.log(listadoEstudiantes.some(estudiante => estudiante.nombre == "Pepe"));

/* ------------------------------------------------------------------------------------------ */

// "every" se utiliza para comprobar que todos cumplen la condición
let todosMayoresEdad = listadoEstudiantes.every(estudiante => estudiante.edad >= 18);

console.log(todosMayoresEdad);