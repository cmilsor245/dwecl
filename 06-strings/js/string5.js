/*
  @file: string5.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "string5"
*/

let frase = "Érase una vez...";

/* --------------------------------------------------------------------------------------------- */

// "replace" para reemplazar
console.log(frase.replace("Érase", "Solo"));

/* -------------------------------------------------------------------------- */

// "slice" o "substring" para extraer
console.log(frase.substring(2)); // extrae los 2 primeros caracteres
console.log(frase.slice(2)); // extrae los 2 primeros caracteres

console.log(frase.substring(6, 9)); // deja solo los caracteres desde la posición 6 (no incluida) hasta la posición 9 (incluida)

console.log(frase.substring(6, 7)); // deja solo los caracteres desde la posición 6 (no incluida) hasta la posición 7 (incluida)

// "charAt"
console.log(frase.charAt(6)); // obtiene el carácter en la posición 6

/* -------------------------------------------------------------------------- */

// "repeat" para repetir
let coche = "peugeot 207";

console.log(coche.repeat(2)); // repite la frase 3 veces

/* -------------------------------------------------------------------------- */

// "split" para dividir
let ciclos = "daw, dam, asir";

console.log(ciclos.split(",")); // devuelve un array con 3 elementos