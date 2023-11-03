/*
  @file: condicionales3.js
  @author: Christian Millán Soria
  @created: 04/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "condicionales3"
*/

// TODO: (WSL command to execute) -> node ./10-condicionales/condicionales3.js

/* ------------- */

const prompt = require('prompt-sync')();

let entrada = prompt("Introduce tus estudios: ");

function estudios(modulo) {
  switch (modulo) {
    case "daw":
      console.log("Estás matriculado en DAW.");
      break;

    case "dam":
      console.log("Estás matriculado en DAM.");
      break;

    default:
      console.log("Estás matriculado en otro módulo.");
  };
};

estudios(entrada.toLowerCase());