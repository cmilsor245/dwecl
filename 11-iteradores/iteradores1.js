/*
  @file: iteradores1.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores1"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores1.js

/* ------------- */

const carrito = [
  {nombre: "TV", precio: 100},
  {nombre: "Tablet", precio: 50},
  {nombre: "Auriculares", precio: 30},
  {nombre: "Teclado", precio: 20}
];

console.table(carrito);

/* -------------------------------------------- */

// función para el "for"
function paraElFor() {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
  };
};

/* -------------------- */

// función para el "while"
function paraElWhile() {
  let i = 0;
  while (i < carrito.length) {
    console.log(carrito[i].nombre);
    i++;
  };
}

/* -------------------- */

// función para el "do-while"
function paraElDoWhile() {
  let i = 0;
  do {
    console.log(carrito[i].nombre);
    i++;
  } while (i < carrito.length);
}

/* -------------------------------------------- */

paraElFor();
paraElWhile();
paraElDoWhile();