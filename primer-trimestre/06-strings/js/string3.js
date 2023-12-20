/*
  @file: string3.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "string3"
*/

let producto1 = "monitor de 24 pulgadas";
let producto2 = String("monitor de 24 pulgadas");
let producto3 = new String("monitor de 24 pulgadas");

/* -------------------------------------------------------------- */

// concatenación de strings
let precio = "48€";

// forma 1
console.log(producto1 + " + " + producto2 + " cuesta: " + precio);

// forma 2
console.log(`${producto1} + ${producto2} cuesta: ${precio}`);