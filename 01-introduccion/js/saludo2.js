/*
  @file: saludo2.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: saludo final mediante prompt
*/

setTimeout(function saludo2() {
  const nombre = prompt("¿cuál es tu nombre?");
  document.querySelector(".contenido").innerHTML = `<h1>buenos días ${nombre}</h1>`;
}, 2000);

document.addEventListener("DOMContentLoaded", function() {
  saludo2();
});

/* --------------------------------------------------------------------------------------------- */

// la siguiente sería una forma de poner lo mismo que antes pero de forma más acortada
/*
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function saludo() {
      const nombre = prompt("¿cuál es tu nombre?");
      document.querySelector(".contenido").innerHTML = `<h1>Buenos días ${nombre}</h1>`;
    }, 2000);
  });
*/