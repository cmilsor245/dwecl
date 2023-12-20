/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 23/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: ejercicio de condicionales - version 1
*/

const CHOICE = document.getElementById("choice");
const BTN = document.getElementById("btn");
const RESULT = document.getElementById("result");

/* ------------------------------------------- */

BTN.addEventListener("click", () => {
  const INT_CHOICE = parseInt(CHOICE.value);
  checkingFruit(INT_CHOICE);
})

/* ------------------------------------------- */

function checkingFruit(choice) {
  switch (choice) {
    case 1:
      RESULT.innerHTML = "el precio de la manzana es de 1.5€";
      break;
    case 2:
      RESULT.innerHTML = "el precio de la naranja es de 2€";
      break;
    case 3:
      RESULT.innerHTML = "el precio de la banana es de 1.5€";
      break;
    case 4:
      RESULT.innerHTML = "el precio de la pera es de 3€";
      break;
    case 5:
      RESULT.innerHTML = "el precio de la sandía es de 2.5€";
      break;
    default:
      RESULT.innerHTML = "elige una opción válida";
  }
}