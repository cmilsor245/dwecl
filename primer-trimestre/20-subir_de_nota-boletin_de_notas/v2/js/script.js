// ! el reseteo de todo no me funciona correctamente, los botones de acción no se me eliminan

// variables inizialization
const STUDENTS_LIST = [
  { name: "christian", grades: [7.5, 8.2, 6.8, 9.1, 9.9, 8.6, 7.3, 8.9, 6.5, 6.8, 7.0, 5.5] },
  { name: "rocío", grades: [6.4, 7.9, 1.1, 7.2, 3.9, 7.8, 8.3, 7.6, 6.7, 4.5, 4.5, 4.4] },
  { name: "óscar", grades: [7.9, 7.6, 9.2, 2.4, 7.8, 8.5, 0.1, 7.9, 8.2, 9.0, 3.8, 4.3] },
  { name: "víctor", grades: [7.2, 6.8, 7.9, 6.5, 7.1, 2.9, 7.8, 6.7, 4.3, 6.6, 4.2, 3.7] },
  { name: "safaa", grades: [1.5, 8.8, 9.2, 9.7, 8.9, 9.4, 9.1, 8.7, 9.3, 8.5, 4.1, 4.0] }
];

const STUDENT_NAME = document.getElementById("student-name");
const CHECK_BUTTON = document.getElementById("check-button");
const RESET_BUTTON = document.getElementById("reset-button");

/* -------------------------------------------------------------------------------------------- */

// event listeners
CHECK_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkEmptyInput()) {
    alert("Por favor, introduce un nombre válido");
  } else {
    changeLayout();
  }
});

RESET_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

  removeGradesTree();
})

/* -------------------------------------------------------------------------------------------- */

// functions
function checkEmptyInput() {
  return STUDENT_NAME.value === "";
}

function changeLayout() {
  hideCheckButton();
  createGradeList();
  createActionButtons();
  enableButton(RESET_BUTTON);
  disableButton(CHECK_BUTTON);
}

function hideCheckButton() {
  CHECK_BUTTON.classList.add("disabled-button");
}

function createGradeList() {
  const GRADES_HEADER = document.createElement("h4");
  GRADES_HEADER.textContent = "notas:";
  GRADES_HEADER.id = "grades-header";
  GRADES_HEADER.classList.add("grades-container");

  const GRADES_LIST = document.createElement("ul");
  GRADES_LIST.id = "grades-list";
  GRADES_LIST.classList.add("grades-container");

  STUDENTS_LIST.forEach((student) => {
    if (student.name.toLowerCase() === STUDENT_NAME.value.toLowerCase()) {
      student.grades.forEach((grade) => {
        const GRADE_ITEM = document.createElement("li");
        GRADE_ITEM.textContent = grade;
        GRADE_ITEM.classList.add("grade-item");
        GRADES_LIST.appendChild(GRADE_ITEM);
      });
    }
  });

  document.body.appendChild(GRADES_HEADER);
  document.body.appendChild(GRADES_LIST);
}

function createActionButtons() {
  createAverageButton();
  createHighestGradeButton();
  createAnyFailuresButton();
}

function createAverageButton() {
  createResultParagraphAboveButton("average-result-paragraph", "average");
  const AVERAGE_BUTTON = generateButtonConfiguration("average-button", "calcular promedio");
  document.body.appendChild(AVERAGE_BUTTON);

  createElementsAndEventListeners("average-result-paragraph", "average-button", "average");
}

function createHighestGradeButton() {
  createResultParagraphAboveButton("highest-grade-result-paragraph", "highest-grade");
  const HIGHEST_GRADE_BUTTON = generateButtonConfiguration("highest-grade-button", "buscar nota más alta");
  document.body.appendChild(HIGHEST_GRADE_BUTTON);

  createElementsAndEventListeners("highest-grade-result-paragraph", "highest-grade-button", "highest-grade");
}

function createAnyFailuresButton() {
  createResultParagraphAboveButton("any-failures-result-paragraph", "any-failures");
  const ANY_FAILURES_BUTTON = generateButtonConfiguration("any-failures-button", "¿hay algún suspenso?");
  document.body.appendChild(ANY_FAILURES_BUTTON);

  createElementsAndEventListeners("any-failures-result-paragraph", "any-failures-button", "any-failures");
}

function createResultParagraphAboveButton(id, operation) {
  const RESULT_PARAGRAPH = document.createElement("p");
  RESULT_PARAGRAPH.id = id;
  RESULT_PARAGRAPH.classList.add("result-paragraph");
  RESULT_PARAGRAPH.classList.add("hidden-result-paragraph");

  switch (operation) {
    case "average":
      RESULT_PARAGRAPH.innerHTML = "promedio: ";
      break;
    case "highest-grade":
      RESULT_PARAGRAPH.innerHTML = "nota más alta: ";
      break;
    case "any-failures":
      RESULT_PARAGRAPH.innerHTML = "¿hubo algún suspenso? ";
      break;
  }

  document.body.appendChild(RESULT_PARAGRAPH);
}

function generateButtonConfiguration(id, text) {
  const BUTTON = document.createElement("button");
  BUTTON.id = id;
  BUTTON.textContent = text;
  BUTTON.classList.add("action-button");
  return BUTTON;
}

function createElementsAndEventListeners(paragraph_id, button_id, operation) {
  const PARAGRAPH = document.getElementById(paragraph_id);
  const BUTTON = document.getElementById(button_id);

  BUTTON.addEventListener("click", () => {
    switch (operation) {
      case "average":
        if (!PARAGRAPH.textContent.includes(calculateAverage())) {
          PARAGRAPH.classList.remove("hidden-result-paragraph");
          PARAGRAPH.textContent += calculateAverage();
          disableButton(BUTTON);
        }
        break;
      case "highest-grade":
        if (!PARAGRAPH.textContent.includes(checkHighestGrade())) {
          PARAGRAPH.classList.remove("hidden-result-paragraph");
          PARAGRAPH.textContent += checkHighestGrade();
          disableButton(BUTTON);
        }
        break;
      case "any-failures":
        if (!PARAGRAPH.textContent.includes(checkAnyFailures())) {
          PARAGRAPH.classList.remove("hidden-result-paragraph");
          PARAGRAPH.textContent += checkAnyFailures();
          disableButton(BUTTON);
        }
        break;
    }
  })
}

function calculateAverage() {
  const studentName = STUDENT_NAME.value.toLowerCase();
  const student = STUDENTS_LIST.find((student) => student.name.toLowerCase() === studentName);

  let totalGrades = 0;

  for (let i = 0; i < student.grades.length; i++) {
    totalGrades += student.grades[i];
  }

  const AVERAGE = totalGrades / student.grades.length;
  const TRUNCATED_AVERAGE = AVERAGE.toFixed(2);
  return TRUNCATED_AVERAGE;
}

function checkHighestGrade() {
  const studentName = STUDENT_NAME.value.toLowerCase();
  const student = STUDENTS_LIST.find((student) => student.name.toLowerCase() === studentName);

  let highestGrade = Number.MIN_VALUE;

  student.grades.forEach(grade => {
    if (grade > highestGrade) {
      highestGrade = grade;
    }
  });

  return highestGrade;
}

function checkAnyFailures() {
  const studentName = STUDENT_NAME.value.toLowerCase();
  const student = STUDENTS_LIST.find((student) => student.name.toLowerCase() === studentName);

  const failures = student.grades.filter((grade) => grade < 5.0);

  return failures.length > 0 ? `Suspendidas: ${failures.join(", ")}` : "Ningún suspenso";
}

function enableButton(button) {
  button.removeAttribute("disabled");
}

function disableButton(button) {
  button.setAttribute("disabled", "true");
}

function removeGradesTree() {
  const gradesHeader = document.getElementById("grades-header");
  const gradesList = document.getElementById("grades-list");
  const averageButton = document.getElementById("average-button");
  const highestGradeButton = document.getElementById("highest-grade-button");
  const anyFailuresButton = document.getElementById("any-failures-button");

  if (gradesHeader) {
    removeSubtree(gradesHeader);
  }

  if (gradesList) {
    removeSubtree(gradesList);
  }

  resetResults();

  if (averageButton) {
    removeSubtree(averageButton);
  }

  if (highestGradeButton) {
    removeSubtree(highestGradeButton);
  }

  if (anyFailuresButton) {
    removeSubtree(anyFailuresButton);
  }
}

function removeSubtree(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function resetResults() {
  resetResultParagraph("average-result-paragraph");
  resetResultParagraph("highest-grade-result-paragraph");
  resetResultParagraph("any-failures-result-paragraph");
  enableButton(CHECK_BUTTON);
  disableButton(RESET_BUTTON);
}

function resetResultParagraph(id) {
  const resultParagraph = document.getElementById(id);

  if (resultParagraph) {
    resultParagraph.classList.add("hidden-result-paragraph");
    resultParagraph.textContent = "";
  }
}