/*
  @file: variables.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: muestra de variables por consola
*/

var var1 = "ejemplo1"; // variable "var1" declarada con "var" para poder cambiar su contenido mas adelante

console.log(var1); // se puede ver en consola el contenido original

setTimeout(function reasignar1() { // de esta forma se ve primero el contenido original y después el reasignado
  var1 = "ejemplo1 reasignado";
  console.log(var1);
}, 3000);

setTimeout(function reasignar2() {
  var1 = 13; // cambio de tipo de variable
  console.log(var1);
}, 5000);

/* ------------------------------------------------------------------------------------------------------------ */

let boolean = false;

console.log(boolean); // esto y el último "console.log" se muestran antes que los "console.log's" que están dentro de los timeouts"

/* ------------------------------------------------------------------------------------------------------------ */

let var2 = "contenido \"var2\"", var3 = "contenido \"var3\"", var4 = "contenido \"var4\"";

console.log(var2, var3, var4);