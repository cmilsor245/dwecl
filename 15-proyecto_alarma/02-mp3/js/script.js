/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 16/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "alarma (mp3)"
*/

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault(); // evita que el form recargue la página al enviarse

  // variable initialization
  const temporizadorIntroducido = document.getElementById("temporizador");
  const submitTemporizador = document.getElementById("submitTemporizador");
  const estadoTexto = document.getElementById("estado");
  const resetButton = document.getElementById("reset");
  const alarmaAudio = document.getElementById("alarmaAudio");

  /* ---------------------------------------------------------------------------- */

  // functions
  function comprobacionDeValidez() {
    if (temporizadorIntroducido.value === "" || temporizadorIntroducido.value <= 0) {
      alert("Introduce un valor válido para el temporizador");

      temporizadorIntroducido.focus(); // se hace focus automático al salir del alert
      temporizadorIntroducido.select(); // se selecciona el contenido del input al salir del alert, si es que lo hay

      return false;
    }
    return true;
  }

  /* ---------------------- */

  function cambiarEstadoAlarma(validez) {
    if (validez) {
      setTimeout(() => {
        estadoTexto.textContent = "ENCENDIDA";
        estadoTexto.style.color = "rgb(0, 190, 16)";
        temporizadorIntroducido.value = ""; // resetear el contenido del input para que no se quede el valor introducido (se resetea cuando se haga en timeout)
        alarmaAudio.play();
      }, temporizadorIntroducido.value * 1000); // se multiplica el valor introducido por 1000 para pasarlo a milisegundos
    }
  }

  /* ---------------------- */

  function resetearAlarma() {
    estadoTexto.textContent = "APAGADA";
    estadoTexto.style.color = "rgb(255, 0, 0)";
    alarmaAudio.pause();
    alarmaAudio.currentTime = 0;
  }

  /* ---------------------------------------------------------------------------- */

  // events
  submitTemporizador.addEventListener("click", (e) => {
    e.preventDefault(); // evita que el form recargue la página al enviarse
    let validez = comprobacionDeValidez();
    cambiarEstadoAlarma(validez);
  })

  /* -------------------- */

  resetButton.addEventListener("click", () => {
    resetearAlarma();
  })
});