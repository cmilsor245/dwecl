/*
  @file: string2.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "string2"
*/

let producto1 = "monitor de 24 pulgadas";
let producto2 = String("monitor de 24 pulgadas");
let producto3 = new String("monitor de 24 pulgadas");

/* -------------------------------------------------------- */

// propiedad "length"
console.log(producto1.length);
console.log(producto2.length);
console.log(producto3.length);

/* --------------------------------------- */

// método "includes"
console.log(producto1.includes("monitor"));
console.log(producto2.includes("monitor"));
console.log(producto3.includes("monitor"));

/* --------------------------------------- */

// método "indexOf"
console.log(producto1.indexOf("p"));
console.log(producto2.indexOf("m"));
console.log(producto3.indexOf("2"));