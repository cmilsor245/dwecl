/*
  @file: iteradores6.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "iteradores6"
*/

// TODO: (WSL command to execute) -> node ./11-iteradores/iteradores6.js

/* ------------- */

// "for of" y "for in" para arrays
let modules = ["dam", "daw", "asir"];

// para valores
for (let module of modules) console.log(module);

// para índices
for (let module in modules) console.log(module);

/* ----------------------------------------------------- */

// con un objeto...
let objetoDaw = {
  modulo1: "DIEWB",
  modulo2: "DWECL",
  modulo3: "HLC",
  modulo4: "DWESE",
  modulo5: "DAWEB"
};

/* -------------------------- */

for (let modulo in objetoDaw) console.log(modulo); // devuelve los índices

/* -------------------------- */

// for (let modulo of objetoDaw) console.log(modulo); // da error, dado que no funciona con objetos

/* -------------------------- */

// alternativa
for (let [modulo, valor] of Object.entries(objetoDaw)) {
  console.log(`${modulo}: ${valor}`);
};

/* -------------------------- */

for (let modulo in objetoDaw) console.log(`${modulo}: ${objetoDaw[modulo]}`);