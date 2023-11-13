// * parte de víctor

// inicialización de variables
// array de alumnos/notas
const LISTA_ALUMNOS = [
  { nombre: "christian", notas: [7.5, 8.2, 3.8, 9.1, 9.9, 8.6, 7.3, 4.9, 6.5, 2.8, 7.0, 5.5] },
  { nombre: "rocío", notas: [6.4, 7.9, 9.1, 7.2, 9.9, 7.8, 8.3, 7.6, 6.7, 6.5, 5.5, 8.4] },
  { nombre: "óscar", notas: [7.9, 7.6, 9.2, 2.4, 7.8, 8.5, 0.1, 7.9, 8.2, 9.0, 3.8, 4.3] },
  { nombre: "víctor", notas: [7.2, 6.8, 7.9, 6.5, 7.1, 2.9, 7.8, 6.7, 4.3, 6.6, 4.2, 3.7] },
  { nombre: "safaa", notas: [1.5, 8.8, 9.2, 9.7, 8.9, 9.4, 9.1, 8.7, 9.3, 8.5, 4.1, 4.0] }
];

const NOMBRE_ALUMNO_INPUT = document.getElementById("nombre-alumno-input");
const COMPROBAR_BOTON = document.getElementById("comprobar-boton");
const NOTAS_LISTA_ELEMENTO = document.getElementById("notas-lista");

const PROMEDIO_BOTON = document.getElementById("promedio-boton");
const NOTA_MAS_ALTA_BOTON = document.getElementById("nota-mas-alta-boton");

const PROMEDIO_TEXTO_ELEMENTO = document.getElementById("promedio-texto");
const NOTA_MAS_ALTA_TEXTO_ELEMENTO = document.getElementById("nota-mas-alta-texto");

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

// eventos
COMPROBAR_BOTON.addEventListener("click", () => {
  comprobarNombreAlumno();
});

PROMEDIO_BOTON.addEventListener("click", mostrarPromedio);

NOTA_MAS_ALTA_BOTON.addEventListener("click", mostrarNotaMasAlta);

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

// funciones
function comprobarNombreAlumno() {
  const NOMBRE_ALUMNO = NOMBRE_ALUMNO_INPUT.value.toLowerCase();

  if (NOMBRE_ALUMNO === "") {
    alert("Por favor, introduce un nombre válido");
  } else {
    mostrarNotas(NOMBRE_ALUMNO);
  }
}

function mostrarNotas(nombreAlumno) {
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === nombreAlumno);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    NOTAS_LISTA_ELEMENTO.innerHTML = "";

    for (const nota of NOTAS) {
      const LI_ELEMENTO = document.createElement("li");
      LI_ELEMENTO.textContent = nota;
      NOTAS_LISTA_ELEMENTO.appendChild(LI_ELEMENTO);
    }
  } else {
    alert("No existe un alumno con ese nombre");
  }
}

/* ----------------------------------------------------------------------------------------------- */

function mostrarPromedio() {
  const NOMBRE_ALUMNO = NOMBRE_ALUMNO_INPUT.value.toLowerCase();
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === NOMBRE_ALUMNO);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    const suma = NOTAS.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / NOTAS.length;
    PROMEDIO_TEXTO_ELEMENTO.innerHTML += promedio.toFixed(2);
  } else {
    alert("No existe un alumno con ese nombre");
  }
}

/* ----------------------------------------------------- */

function mostrarNotaMasAlta() {
  const NOMBRE_ALUMNO = NOMBRE_ALUMNO_INPUT.value.toLowerCase();
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === NOMBRE_ALUMNO);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    const notaMasAlta = Math.max(...NOTAS);
    NOTA_MAS_ALTA_TEXTO_ELEMENTO.innerHTML += notaMasAlta;
  } else {
    alert("No existe un alumno con ese nombre");
  }
}