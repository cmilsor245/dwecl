/*
  @file: funciones5.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "funciones5"
*/

// "arrow functions"
let aprendiendo1 = function(asignatura1, asignatura2) {
  console.log(`Aprendiendo: ${asignatura1} y ${asignatura2}`);
};

aprendiendo1("Inglés", "Francés");

/* ------------------------------------------------------------- */

let aprendiendo2 = (asignatura1, asignatura2) => {
  console.log(`Aprendiendo: ${asignatura1} y ${asignatura2}`);
};

aprendiendo2("Inglés", "Francés");

/* ------------------------------------------------------------- */

let aprendiendo3 = asignatura1 => {
  console.log(`Aprendiendo: ${asignatura1}`);
};

aprendiendo3("Inglés");