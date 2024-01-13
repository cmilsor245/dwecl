/*
  @file: array2.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array2"
*/

let numeros = [1, 2, 3, 4, 5];

/* --------------------------------- */

// loop para recorrer un array
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/* --------------------------------- */

// agregar nuevos elementos
numeros[5] = 6;
console.table(numeros);

/* --------------------------------- */

// "push" para agregar al final
// "pop" para eliminar al final
// "unshift" para agregar al principio
// "shift" para eliminar al principio

let arrayEstudiantes = [];

let estudiante1 = {
  nombre: "Juan",
  edad: 18
}
let estudiante2 = {
  nombre: "Alberto",
  edad: 19
}
let estudiante3 = {
  nombre: "Ana",
  edad: 20
}

/* ------------------- */

arrayEstudiantes.push(estudiante1);
console.table(arrayEstudiantes);

arrayEstudiantes.push(estudiante2);

arrayEstudiantes.unshift(estudiante3);
console.table(arrayEstudiantes);

arrayEstudiantes.shift();
console.table(arrayEstudiantes);

arrayEstudiantes.pop();
console.table(arrayEstudiantes);

/* --------------------------------- */

// "splice" para extraer elementos
let arrayNumeros = [1, 2, 3, 4, 5, 6];

arrayNumeros.splice(1, 2); // extrae los elementos desde la posición 1 (incluida) hasta la posición 2 (incluida)

console.table(arrayNumeros);