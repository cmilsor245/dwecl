/*
  @file: iteradores2.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores2"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores2.js

/* ------------- */

// "break" y "continue"
let carrito = [
  {nombre: "Televisión 27 Pulgadas", precio: 500},
  {nombre: "Televisión 50 Pulgadas", precio: 700},
  {nombre: "Tablet", precio: 300},
  {nombre: "Auriculares", precio: 200},
  {nombre: "Teclado", precio: 50},
  {nombre: "Móvil", precio: 500}
];

let elemento, precio;

for (let i = 0; i < carrito.length; i++) {
  elemento = carrito[i].nombre;
  precio = carrito[i].precio;

  if (elemento.toLowerCase().includes("auriculares")) break; // si se cumple la condición se detiene
  if (elemento.toLowerCase().includes("televisión")) continue; // si se cumple la condición se salta

  console.log(`${elemento} cuesta: ${precio}`);
};