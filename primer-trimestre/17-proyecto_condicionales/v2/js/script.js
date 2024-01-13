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

const fruits = [
  { id: 1, name: "manzana", price: 1.5 },
  { id: 2, name: "naranja", price: 2 },
  { id: 3, name: "banana", price: 1.5 },
  { id: 4, name: "pera", price: 3 },
  { id: 5, name: "sandía", price: 2.5 }
];

function checkingFruit(choice) {
  const fruit = fruits.find(fruit => fruit.id === choice);
  if (fruit) {
    RESULT.innerHTML = `el precio de la ${fruit.name} es de ${fruit.price}€`;
  } else {
    RESULT.innerHTML = "elige una opción válida";
  }
}
