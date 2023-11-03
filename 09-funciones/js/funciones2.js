/*
  @file: funciones2.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "funciones2"
*/

// funciones nativas
// "Number.parseInt"
console.log(Number.parseInt("123"));

/* ------------------------------------- */

// funciones con parámetros
function sumar(x, y) {
  console.log(x+ y);
}

sumar(2, 3);

/* -------------- */

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Christian");
saludar(); // devuelve "undefined"

/* ------------------------------------- */

// funciones con parámetros default
function saludo(nombre="\{nombre predefinido\}", apellidos="\{apellidos predefinidos\}") {
  console.log(`Hola ${nombre} ${apellidos}`);
}

saludo(); // devuelve "Hola {nombre predefinido} {apellidos predefinidos}"
saludo("Christian", "Millán Soria"); // sustituye los valores predeterminados en la función por los introducidos aquí