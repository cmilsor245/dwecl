/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 16/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "repaso dom con 'contentLoad'"
*/

document.addEventListener("DOMContentLoaded", () => { // script content inside this event
  // declaración de variables
  const button1 = document.getElementById("addEventListenerButton");
  const parrafo1 = document.getElementById("parrafo1");

  const button2 = document.getElementById("onclickButton");
  const parrafo2 = document.getElementById("parrafo2");

  /* ------------------------------------------------------------------ */

  // eventos listener
  button1.addEventListener("click", () => {
    let texto = "hello world! (from \"addEventListener\")";
    escribirEnParrafo(parrafo1, texto);
  });

  button2.onclick = () => {
    let texto = "hello world! (from \"onclick\")";
    escribirEnParrafo(parrafo2, texto);
  };

  /* ------------------------------------------------------------------ */

  // funciones
  function escribirEnParrafo(parrafo, texto) {
    parrafo.textContent = texto;
  }
})