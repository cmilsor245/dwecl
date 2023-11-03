/*
  @file: array1.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array1"
*/

// formas de crear un array simple
const numeros = [1, 2, 3, 4, 5];

const meses = new Array("Enero", "Febrero");

let estudiante = {
  nombre: "Roberto",
  id: 145
};

/* -------------------------------------------------------------- */

console.log(numeros);
console.log(meses);
console.log(estudiante);

/* ------------------ */

console.log(meses[0]); // elemento concreto del array

console.log(meses[2]); // "undefined"

console.table(meses); // la función "console.table()" muestra los datos tabulares en forma de tabla en la consola

/* -------------------------------------------------------------- */

// array bidimensional
const deTodo = ["animales", 100, true, null, {nombre: "Juan", apellido: "López"}, [4, 5, 6], numeros, estudiante];

console.log(deTodo);

console.log(typeof(deTodo[7])); // objeto "estudiante"

// acceder a los elementos de un array
console.log(deTodo[0]);
console.log(deTodo[4].nombre);
console.log(deTodo[5][0]); // primer elemento del elemento con id "5" en el array "deTodo"