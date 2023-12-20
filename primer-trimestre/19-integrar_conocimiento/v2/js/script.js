// he utilizado el método de carga "defer", así no se altera el flujo de la página web y además la inicialización de variables se puede llevar a cabo una vez se han cargado todos los elementos del html

// variable initialization
const JOB = document.getElementById("job");
const CHECK_BUTTON = document.getElementById("check");
const ANSWER = document.getElementById("answer");

/* ------------------------------------------------------------------------------------------------------------ */

// event listeners
CHECK_BUTTON.addEventListener("click", handleClick);

/* ------------------------------------------------------------------------------------------------------------ */

// functions
function handleClick(event) {
  event.preventDefault(); // evitar que se recargue la página debido al form

  let job = JOB.value.toLowerCase();
  let result = checkJobSalary(job);

  if (!checkEmptyJob(job)) {
    displayResult(job, result);
  }
}

/* --------------------------------------------------- */

function checkJobSalary(job) {
  const jobSalaries = [
    { job: "dba job", salary: 70000 },
    { job: "dba", salary: 70000 },
    { job: "front-end developer", salary: 45000 },
    { job: "front-end", salary: 45000 },
    { job: "frontend developer", salary: 45000 },
    { job: "frontend", salary: 45000 },
    { job: "front end", salary: 45000 },
    { job: "front", salary: 45000 },
    { job: "back-end developer", salary: 50000 },
    { job: "back-end", salary: 50000 },
    { job: "backend developer", salary: 50000 },
    { job: "backend", salary: 50000 },
    { job: "back end", salary: 50000 },
    { job: "back", salary: 50000 },
  ];

  let jobSalary = jobSalaries.find((jobSalary) => jobSalary.job === job.toLowerCase());

  if (!jobSalary) {
    return { salary: null, error: true };
  }

  return { salary: jobSalary.salary, error: false };
}

/* --------------------------------------------------- */

function checkEmptyJob(job) {
  let empty = false;
  if (job === "") {
    ANSWER.textContent = "el campo de trabajo no puede estar vacío";
    empty = true;
  }

  return empty;
}

/* --------------------------------------------------- */

function displayResult(job, result) {
  if (result.error) {
    ANSWER.innerHTML = `el trabajo de "<span class = "incorrect-job">${job}</span>" no está contemplado en nuestra base de datos`;
  } else {
    ANSWER.innerHTML = `el salario del puesto de trabajo de <span class = "correct-job">${job}</span> es de ${result.salary} €`;
  }
}