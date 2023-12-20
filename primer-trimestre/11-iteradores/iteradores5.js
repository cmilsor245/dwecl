/*
  @file: iteradores5.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores5"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores5.js

/* ------------- */

let carrito = [
  {nombre: "Televisión 27 Pulgadas", precio: 500},
  {nombre: "Televisión 50 Pulgadas", precio: 700},
  {nombre: "Tablet", precio: 300},
  {nombre: "Auriculares", precio: 200},
  {nombre: "Teclado", precio: 50},
  {nombre: "Móvil", precio: 500}
];

/* --------------------------------------------------------------- */

// formas de iterarlo con "forEach"
// forma 1
carrito.forEach((producto, posicion) => {
  console.log(`${producto.nombre} cuesta: ${producto.precio}`);
  console.log(posicion);
});

/* --------------------------------------- */

// forma 2
carrito.forEach((producto) => console.log(`${producto.nombre} cuesta: ${producto.precio}`));

/* --------------------------------------- */

// forma 3
carrito.forEach(producto => console.log(`${producto.nombre} cuesta: ${producto.precio}`));