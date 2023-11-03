/*
  @file: saludo1.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script saludo inicial
*/

function saludo1() {
  alert("hola mundo (desde \"saludo1.js\")");
}

/* ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", function() { // este evento ejecuta la función "saludo1" una vez el archivo se ha cargado completamente, eliminando la necesidad de implementar la llamada a dicha función en el "index.html"
  saludo1();
});