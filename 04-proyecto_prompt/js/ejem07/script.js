/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "ejem07"
*/

var nombre;

function prompt7() {
  nombre = prompt('Por favor, introduce tu nombre:', 'Christian');
}

function saludo7() {
  alert(`Hola ${nombre}`);
}

function despedida7() {
  alert(`Adiós ${nombre}`);
}

window.onload = prompt7;