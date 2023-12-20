/*
  @file: array4.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "array4"
*/

let listadoEstudiantes = [
  {nombre: "Juan", edad: 20},
  {nombre: "Alberto", edad: 18},
  {nombre: "Carlos", edad: 19},
  {nombre: "Marta", edad: 17},
];

/* ---------------------------------------- */

// formas de iterar un array
// forma 1
for (let i = 0; i < listadoEstudiantes.length; i++) {
  console.log(`${listadoEstudiantes[i].nombre} con edad ${listadoEstudiantes[i].edad}`);
}

/* -------------------------------- */

// forma 2
listadoEstudiantes.forEach(function(estudiante) {
  console.log(`${estudiante.nombre} con edad ${estudiante.edad}`);
});

/* -------------------------------- */

// forma 3
listadoEstudiantes.map(function(estudiante) {
  console.log(`${estudiante.nombre} con edad ${estudiante.edad}`);
});

// alternativa
listadoEstudiantes.map(function(estudiante) {
  return estudiante; // esto no muestra nada por consola, pero se puede utilizar con otro fin
});

/* -------------------------------- */

// forma 4
let arrayNumeros1 = [1, 2, 3, 4, 5];

let arrayNumeros2 = arrayNumeros1.map(function(num) {
  return num;
})

console.table(arrayNumeros2);