/*
  @file: condicionales4.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales4" - programa que pide al usuario el tipo de coche que quiere comprar. según la marca de coche que haya puesto, se mostrará por pantalla el valor del mismo. si no ha introducido una marca de coche existente, se mostrará un mensaje default
*/

// TODO: (WSL command to execute) -> node ./10-condicionales/condicionales4.js

/* ------------- */

const prompt = require('prompt-sync')();

let tipoCoche = prompt("Introduce el tipo de coche que quieres comprar: ");

let marcas = [
  { nombre: "bmw", valor: "$50,000" },
  { nombre: "mercedes", valor: "$60,000" },
  { nombre: "audi", valor: "$55,000" },
  { nombre: "toyota", valor: "$30,000" },
  { nombre: "honda", valor: "$28,000" },
  { nombre: "ford", valor: "$32,000" },
  { nombre: "chevrolet", valor: "$31,000" },
  { nombre: "nissan", valor: "$29,000" },
  { nombre: "volkswagen", valor: "$35,000" },
  { nombre: "hyundai", valor: "$27,000" }
];

function valorCoche(marca) {
  let marcaEncontrada = marcas.find(m => m.nombre === marca.toLowerCase());
  if (marcaEncontrada) {
    console.log(`El valor del ${marcaEncontrada.nombre.toUpperCase()} es de ${marcaEncontrada.valor}`);
  } else {
    console.log("No tenemos información sobre el valor de esa marca de coche.");
  }
};

valorCoche(tipoCoche);