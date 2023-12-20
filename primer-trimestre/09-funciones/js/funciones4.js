/*
  @file: funciones4.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "funciones4"
*/

let total = 0;
let totalConImpuestos = 0;

/* ------------------------------------ */

function carrito(precio) {
  total += precio;
};

function calcularImpuestos(cantidad) {
  return cantidad += cantidad * 0.21;
};

/* ------------------------------------ */

carrito(200);
carrito(300);

totalConImpuestos = calcularImpuestos(total);

console.log(total);
console.log(`Total a pagar: ${totalConImpuestos}`);