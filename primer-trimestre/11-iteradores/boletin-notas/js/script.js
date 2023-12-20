const STUDENTS = [
  {
    name: "Christian",
    grades: [9.5, 7.8, 6.2, 8.0, 9.3, 7.0, 8.9, 6.7, 8.5, 7.1]
  },
  {
    name: "Óscar",
    grades: [4.7, 5.4, 6.9, 5.1, 5.8, 5.5, 4.2, 6.8, 4.3, 4.9]
  },
  {
    name: "Rocío",
    grades: [3.2, 4.5, 3.0, 4.8, 2.1, 3.6, 3.3, 3.7, 4.0, 2.9]
  },
  {
    name: "David",
    grades: [6.0, 5.5, 4.8, 3.4, 5.2, 3.7, 6.4, 5.9, 4.1, 3.8]
  },
  {
    name: "Víctor",
    grades: [5.8, 5.2, 5.0, 4.9, 6.5, 4.4, 5.2, 6.1, 4.7, 5.3]
  }
];

function showGrades() {
  const STUDENT_NAME = document.getElementById("student-name").value.toLowerCase();
  const GRADES_LIST = document.getElementById("grades-list");
  GRADES_LIST.innerHTML = "";

  const student = STUDENTS.find(student => student.name.toLowerCase() === STUDENT_NAME);

  if (student) {
    student.grades.forEach(grade => {
      const li = document.createElement("li");
      li.textContent = grade;
      GRADES_LIST.appendChild(li);
    });
  } else {
    alert("estudiante no encontrado");
  }
}

function calculateAverage() {
  const STUDENT_NAME = document.getElementById("student-name").value.toLowerCase();
  const student = STUDENTS.find(student => student.name.toLowerCase() === STUDENT_NAME);

  if (student) {
    const GRADES = student.grades;
    const AVERAGE = GRADES.reduce((total, grade) => total + grade, 0) / GRADES.length;
    alert("el promedio es: " + AVERAGE);
  } else {
    alert("estudiante no encontrado");
  }
}

function highestGrade() {
  const STUDENT_NAME = document.getElementById("student-name").value.toLowerCase();
  const student = STUDENTS.find(student => student.name.toLowerCase() === STUDENT_NAME);

  if (student) {
    const HIGHEST = Math.max(...student.grades);
    alert("la nota más alta es: " + HIGHEST);
  } else {
    alert("estudiante no encontrado");
  }
}

function checkFailures() {
  const STUDENT_NAME = document.getElementById("student-name").value.toLowerCase();
  const student = STUDENTS.find(student => student.name.toLowerCase() === STUDENT_NAME);

  if (student) {
    const FAILURES = student.grades.filter(grade => grade < 5);
    if (FAILURES.length > 0) {
      alert("suspensos: " + FAILURES.join(", "));
    } else {
      alert("no hay suspensos para este estudiante.");
    }
  } else {
    alert("estudiante no encontrado");
  }
}