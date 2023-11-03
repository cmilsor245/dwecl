/*
  @file: iteradores7.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores7"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores7.js

/* ------------- */

let carrito = [
  {nombre: "Televisión 27 Pulgadas", precio: 500},
  {nombre: "Televisión 50 Pulgadas", precio: 700},
  {nombre: "Tablet", precio: 300},
  {nombre: "Auriculares", precio: 200},
  {nombre: "Teclado", precio: 50},
  {nombre: "Móvil", precio: 500}
];

// recorrer el array de objetos con "for in"
for (let i in carrito) {
  console.log(`producto: ${i}`);
  console.log(`nombre: ${carrito[i].nombre}`);
  console.log(`precio: ${carrito[i].precio}`);
};