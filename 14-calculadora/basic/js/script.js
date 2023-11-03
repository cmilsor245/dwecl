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
    let resultadoSuma = sumar(operador1, operador2);
    imprimir(resultadoSuma, resultadoGeneral);
  });

  powButton.addEventListener("click", () => {
    let resultadoPotencia = potencia(operador1, operador2);
    imprimir(resultadoPotencia, resultadoGeneral);
  });

  /* ----------------------------------- */

  // funciones
  function sumar(operador1, operador2) {
    return parseInt(operador1.value) + parseInt(operador2.value); // se recoge en string, por lo que lo convierto a número
  }

  function potencia(operador1, operador2) {
    return parseInt(operador1.value) ** parseInt(operador2.value);
  }

  function imprimir(mensaje, resultadoGeneral) {
    resultadoGeneral.textContent = mensaje;
  }
});