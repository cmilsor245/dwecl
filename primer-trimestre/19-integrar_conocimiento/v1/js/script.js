// he utilizado el método de carga "defer", así no se altera el flujo de la página web y además la inicialización de variables se puede llevar a cabo una vez se han cargado todos los elementos del html

// variable initialization
const JOB_ELEMENT = document.getElementById("job");
const CHECK_BUTTON = document.getElementById("check");
const ANSWER_ELEMENT = document.getElementById("answer");

/* -------------------------------------------------------------------------------------------- */

// event listeners
CHECK_BUTTON.addEventListener("click", (event) => {
  handleClick(event);
});

/* -------------------------------------------------------------------------------------------- */

// functions
function handleClick(event) {
  event.preventDefault(); // evitar que se recargue la página debido al form

  let job = JOB_ELEMENT.value.toLowerCase();

  if (checkEmptyJob(job)) {
    return;
  }

  let result = checkJobSalary(job);
  displayResult(job, result);
}

/* --------------------------------------------------- */

function checkJobSalary(job) {
  let salary;
  let error = false;

  switch (job) {
    case "dba job":
    case "dba":
      salary = 70000;
      break;
    case "front-end developer":
    case "front-end":
    case "frontend developer":
    case "frontend":
    case "front end":
    case "front":
      salary = 45000;
      break;
    case "back-end developer":
    case "back-end":
    case "backend developer":
    case "backend":
    case "back end":
    case "back":
      salary = 50000;
      break;
    default:
      error = true;
      break;
  }

  return { salary, error };
}

/* --------------------------------------------------- */

function checkEmptyJob(job) {
  let empty = false;
  if (job === "") {
    ANSWER_ELEMENT.textContent = "el campo de trabajo no puede estar vacío";
    empty = true;
  }

  return empty;
}

/* --------------------------------------------------- */

function displayResult(job, result) {
  if (result.error) {
    ANSWER_ELEMENT.innerHTML = `el trabajo de "<span class = "incorrect-job">${job}</span>" no está contemplado en nuestra base de datos`;
  } else {
    ANSWER_ELEMENT.innerHTML = `el salario del puesto de trabajo de <span class = "correct-job">${job}</span> es de ${result.salary} €`;
  }
}