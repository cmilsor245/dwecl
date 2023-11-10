const STUDENTS_LIST = [
  { name: "christian", grades: [7.5, 8.2, 6.8, 9.1, 3.9, 8.6, 7.3, 8.9, 6.5, 6.8, 4.0, 3.5] },
  { name: "rocío", grades: [6.4, 7.9, 1.1, 7.2, 3.9, 7.8, 8.3, 7.6, 6.7, 4.5, 4.5, 4.4] },
  { name: "óscar", grades: [7.9, 7.6, 9.2, 2.4, 7.8, 8.5, 0.1, 7.9, 8.2, 9.0, 3.8, 4.3] },
  { name: "víctor", grades: [7.2, 6.8, 7.9, 6.5, 7.1, 2.9, 7.8, 6.7, 4.3, 6.6, 4.2, 3.7] },
  { name: "safaa", grades: [1.5, 8.8, 9.2, 9.7, 8.9, 9.4, 9.1, 8.7, 9.3, 8.5, 4.1, 4.0] }
];

const STUDENT_NAME = document.getElementById("student-name");
const CHECK_BUTTON = document.getElementById("check-button");

CHECK_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkEmptyInput()) {
    alert("por favor, introduce un nombre válido");
  } else {
    removeCheckButton();
    createGradeList();
  }
});

function removeCheckButton() {
  CHECK_BUTTON.remove();
}

function checkEmptyInput() {
  return STUDENT_NAME.value === "";
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