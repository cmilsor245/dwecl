/*
  @file: array3.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array3"
*/

// "destructuring" de objetos
let estudiante1 = {
  nombre: "Juan",
  edad: 20
}

let {nombre, edad} = estudiante1; // se crean las variables "nombre" y "edad" y se asignan los valores de "estudiante1"
console.log(nombre);
console.log(edad);

/* ------------------------------------------------------- */

// "destructuring" de arrays
let arrayNumeros = [1, 2, 3, 4, 5];

let [pos1, pos2] = arrayNumeros; // se crean las variables "pos1" y "pos2" y se asignan los valores de "arrayNumeros"
console.log(pos1);
console.log(pos2);

/* --------------------------- */

let [,, pos3] = arrayNumeros; // se omiten los 2 primeros elementos del array mediante la utilización de las comas
console.log(pos3);

/* --------------------------------------- */

let arrayNumeros2 = [1, 2, 3, 4, 5];

let [pos11,pos12, ...array] = arrayNumeros2; // asigna los dos primeros elementos del array "arrayNumeros2" a las variables "pos11" y "pos12" y los elementos restantes a la variable "array"
console.log(pos11);
console.log(pos12);
console.log(array);