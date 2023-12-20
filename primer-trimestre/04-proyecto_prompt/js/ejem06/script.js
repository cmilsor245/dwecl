/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "ejem06"
*/

var nombre;

function prompt6() {
  nombre = prompt('Por favor, introduce tu nombre:', 'Christian');
}

function saludo6() {
  document.getElementById('saludo').onclick = function() {
    alert(`Hola ${nombre}`);
  }
}

function despedida6() {
  document.getElementById('despedida').onclick = function() {
    alert(`Adiós ${nombre}`);
  }
}

window.onload = function() {
  prompt6();
  saludo6();
  despedida6();
};