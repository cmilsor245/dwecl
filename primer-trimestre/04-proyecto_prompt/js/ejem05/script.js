/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 02/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "ejem05"
*/

function prompt5() {
  let nombre = prompt('Por favor, introduce tu nombre:', 'Christian');
  alert(`Hola ${nombre}`);
}

window.onload = prompt5;