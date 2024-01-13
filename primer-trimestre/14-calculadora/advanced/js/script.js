/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 16/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "calculadora basic"
*/

document.addEventListener("DOMContentLoaded", () => {
  // variables
  const operador1 = document.querySelector("#operador1");
  const operador2 = document.querySelector("#operador2");
  const sumButton = document.querySelector("#sumButton");
  const powButton = document.querySelector("#powButton");
  const resultadoGeneral = document.querySelector("#result");

  /* ----------------------------------- */

  // listener events
  sumButton.addEventListener("click", () => {
    let resultadoSuma = operacion(operador1, operador2, "suma");
    imprimir(resultadoSuma, resultadoGeneral);
  });

  powButton.addEventListener("click", () => {
    let resultadoPotencia = operacion(operador1, operador2, "potencia");
    imprimir(resultadoPotencia, resultadoGeneral);
  });

  /* ----------------------------------- */

  // funciones
  function operacion(operador1, operador2, tipoOperacion) {
    switch (tipoOperacion) {
      case "suma":
        return parseInt(operador1.value) + parseInt(operador2.value); // no hace falta "break" porque se hace un "return"

      case "potencia":
        return parseInt(operador1.value) ** parseInt(operador2.value);
    }
  }

  function imprimir(mensaje, resultadoGeneral) {
    resultadoGeneral.textContent = mensaje;
  }
});