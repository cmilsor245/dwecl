/*
  @file: script.js
  @author: Christian Millán Soria
  @created: 20/10/2023
  @license: MIT
  @contact: christiaanmillaan1313@gmail.com
  @info: script for "preguntas"
*/

// variable initialization
const ANSWERS = [];
const CORRECT_ANSWERS = ["2", "2", "1", "2", "2", "2", "3", "2", "3", "3"];
let score = 0;
let not_answered = 0;
const NOT_ANSWERED_QUESTIONS = [];
const TIMER_PARAGRAPH = document.getElementById("time-paragraph");
let time_limit = 45; // tiempo total en segundos
const TIME_INTERVAL = 1000; // intervalo de tiempo en milisegundos
const SUBMIT_BUTTON = document.getElementById("submit-button");
const RESET_BUTTON = document.getElementById("reset-button");
const CURRENT_DATE = new Date();
const FORMATTED_DATE = CURRENT_DATE.toLocaleDateString();

/* --------------------------------------------------------------------------------------------------------------- */

// functions

/*
  @name: handleResetButtonClick
  @created: 21/10/2023
  @info: maneja el evento de clic en el botón de reinicio y recarga de la página
  @param:
    - none
  @return:
    - none
*/
function handleResetButtonClick() {
  reloadPage();
}

/* ---------------------------------------------------- */

/*
  @name: reloadPage
  @created: 21/10/2023
  @info: recarga la página
  @param:
    - none
  @return:
    - none
*/
function reloadPage() {
  location.reload();
  window.scrollTo(0, 0); // lleva el scroll de la página al inicio para mayor comodidad
}

/* ---------------------------------------------------- */

/*
  @name: endGame
  @created: 22/10/2023
  @info: realiza todos los pasos para terminar el juego
  @param:
    - none
  @return:
    - none
*/
function endGame() {
  const ENTERED = obtainAnswers();
  checkAnswers(ENTERED, CORRECT_ANSWERS);
  showResult();
}

/* ---------------------------------------------------- */

/*
  @name: obtainAnswers
  @created: 21/10/2023
  @info: almacena las respuestas introducidas en el html en un array
  @param:
    - none
  @return:
    - ANSWERS -> array de respuestas
*/
function obtainAnswers() {
  ANSWERS.length = 0;
  for (let i = 1; i <= 10; i++) {
    const QUESTION_ANSWER = document.querySelector(`input[name="question${i}answer"]:checked`); // obtiene el radio elegido, si existe
    if (QUESTION_ANSWER) {
      ANSWERS.push(QUESTION_ANSWER.value);
    } else {
      ANSWERS.push("0"); // si no se selecciona ninguna respuesta se sustituye por un 0
    }
  }

  return ANSWERS;
}

/* ---------------------------------------------------- */

/*
  @name: checkAnswers
  @created: 22/10/2023
  @info: comprueba las respuestas introducidas por el usuario con las correctas
  @param:
    - answers_entered -> array de respuestas introducidas por el usuario
    - correct_answers -> array de respuestas correctas
  @return:
    - none
*/
function checkAnswers(answers_entered, correct_answers) {
  for (let i = 0; i < answers_entered.length; i++) {
    if (answers_entered[i] === correct_answers[i]) {
      score++;
    }
    if (answers_entered[i] === "0") {
      not_answered++;
      NOT_ANSWERED_QUESTIONS.push(i + 1);
    }
  }
}

/* ---------------------------------------------------- */

/*
  @name: startTimer
  @created: 22/10/2023
  @info: inicializa el temporizador para las preguntas
  @param:
    - none
  @return:
    - none
*/
function startTimer() {
  updateTimerDisplay(time_limit);

  const TIMER_INTERVAL_ID = setInterval(function () {
    if (time_limit <= 0) {
      TIMER_PARAGRAPH.style.color = "red";
      clearInterval(TIMER_INTERVAL_ID);
      endGame();
      reloadPage();
    } else {
      time_limit--;
      updateTimerDisplay(time_limit);
    }
  }, TIME_INTERVAL);
}

/* ------------------ */

/*
  @name: updateTimerDisplay
  @created: 22/10/2023
  @info: actualiza el temporizador mostrado
  @param:
    - time_limit -> tiempo total
  @return:
    - none
*/
function updateTimerDisplay(seconds) {
  TIMER_PARAGRAPH.textContent = formatTime(seconds);
}

/* ------------------ */

/*
  @name: formatTime
  @created: 22/10/2023
  @info: formatea el tiempo en formato "00:00"
  @param:
    - seconds -> tiempo total
  @return:
    - segundos totales formateados a "00:00"
*/
function formatTime(seconds) {
  const MINUTES = Math.floor(seconds / 60);
  const SECONDS_LEFT = seconds % 60;
  return `${MINUTES.toString().padStart(2, '0')}:${SECONDS_LEFT.toString().padStart(2, '0')}`;
}

/* ---------------------------------------------------- */

/*
  @name: showResult
  @created: 22/10/2023
  @info: muestra el resultado del ejercicio mediante un alert
  @param:
    - none
  @return:
    - none
*/
function showResult() {
  if (not_answered === 0) {
    alert(`GAME OVER\n\nDATE: ${FORMATTED_DATE}\n\nhas acertado ${score} preguntas!`);
  } else if (not_answered === 1) {
    alert(`GAME OVER\n\nDATE: ${FORMATTED_DATE}\n\n¡has acertado ${score} preguntas!\n\n${not_answered} de las totales no han sido respondidas\n\nla pregunta que no has respondido es la ${NOT_ANSWERED_QUESTIONS[0]}`);
  } else if (not_answered === 10) {
    alert(`GAME OVER\n\nDATE: ${FORMATTED_DATE}\n\nhas acertado ${score} preguntas!\n\n${not_answered} de las totales no han sido respondidas`);
  } else {
    alert(`GAME OVER\n\nDATE: ${FORMATTED_DATE}\n\nhas acertado ${score} preguntas!\n\n${not_answered} de las totales no han sido respondidas\n\nlas preguntas que no has respondido son las ${NOT_ANSWERED_QUESTIONS}`);
  }
}

/* --------------------------------------------------------------------------------------------------------------- */

// events

// reset button
RESET_BUTTON.addEventListener("click", handleResetButtonClick);

// submit button
SUBMIT_BUTTON.addEventListener("click", endGame);

// timer
document.addEventListener("DOMContentLoaded", () => startTimer());