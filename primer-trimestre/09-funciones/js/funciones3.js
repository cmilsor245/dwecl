/*
  @file: funciones3.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "funciones3"
*/

// llamadas entre funciones
function main() {
  console.log("Ejecutando la función \"main\"...");
  saludarProfesores();
};

function saludarProfesores() {
  saludarProfesoresDia("Juan");
  saludarProfesoresDia("Pedro");
  saludarProfesoresTarde("Ana");
};

function saludarProfesoresDia(nombre="\{nombre predefinido\}") {
  console.log(`Buenos días, ${nombre}`);
}

function saludarProfesoresTarde(nombre="\{nombre predefinido\}") {
  console.log(`Buenas tardes, ${nombre}`);
}

main(); // se llama a una función, la cual se encarga de ejecutar todas las demás