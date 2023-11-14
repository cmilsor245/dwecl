// * ampliación de christian

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
const ALGUN_SUSPENSO_BOTON = document.getElementById("algun-suspenso-boton");

const PROMEDIO_TEXTO_ELEMENTO = document.getElementById("promedio-texto");
const NOTA_MAS_ALTA_TEXTO_ELEMENTO = document.getElementById("nota-mas-alta-texto");
const ALGUN_SUSPENSO_TEXTO_ELEMENTO = document.getElementById("algun-suspenso-texto");

const CONTENEDOR_BOTONES = document.querySelector(".contenedor-botones");
const RESET_BOTON = document.getElementById("reset-boton");

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

// eventos
COMPROBAR_BOTON.addEventListener("click", () => {
  comprobarNombreAlumno();
});

/* PROMEDIO_BOTON.addEventListener("click", mostrarPromedio);

NOTA_MAS_ALTA_BOTON.addEventListener("click", mostrarNotaMasAlta);

ALGUN_SUSPENSO_BOTON.addEventListener("click", mostrarAlgunSuspenso); */

CONTENEDOR_BOTONES.addEventListener("click", (event) => {
  const BOTON_PRESIONADO = event.target;

  switch (BOTON_PRESIONADO.id) {
    case "promedio-boton":
      mostrarPromedio();
      break;
    case "nota-mas-alta-boton":
      mostrarNotaMasAlta();
      break;
    case "algun-suspenso-boton":
      mostrarAlgunSuspenso();
      break;
  }
});

RESET_BOTON.addEventListener("click", () => {
  resetearBotones();
});

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

// funciones
function comprobarNombreAlumno() {
  const NOMBRE_ALUMNO = NOMBRE_ALUMNO_INPUT.value.toLowerCase();

  if (NOMBRE_ALUMNO === "") {
    alert("Por favor, introduce un nombre válido");
  } else {
    deshabilitarBoton(COMPROBAR_BOTON);
    habilitarBotones();
    mostrarNotas(NOMBRE_ALUMNO);
  }
}

function mostrarNotas(nombreAlumno) {
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === nombreAlumno);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    borrarContenidoLista(NOTAS_LISTA_ELEMENTO);

    NOTAS.forEach((nota) => {
      const LI_ELEMENTO = document.createElement("li");
      LI_ELEMENTO.textContent = nota;
      NOTAS_LISTA_ELEMENTO.appendChild(LI_ELEMENTO);
    });
  } else {
    alert("No existe un alumno con ese nombre");
  }
}

/* ----------------------------------------------------------------------------------------------- */

function mostrarPromedio() {
  const NOMBRE_ALUMNO = obtenerNombre();
  mostrarEstadistica(NOMBRE_ALUMNO, calcularPromedio, PROMEDIO_TEXTO_ELEMENTO);
}

function calcularPromedio(notas) {
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / notas.length;
  return promedio.toFixed(2);
}

/* ------------------------------------------------------------- */

function mostrarNotaMasAlta() {
  const NOMBRE_ALUMNO = obtenerNombre();
  mostrarEstadistica(NOMBRE_ALUMNO, (notas) => Math.max(...notas), NOTA_MAS_ALTA_TEXTO_ELEMENTO);
}

/* ----------------------------------------------------------------------------------------------- */

function mostrarAlgunSuspenso() {
  const NOMBRE_ALUMNO = obtenerNombre();
  mostrarEstadistica(NOMBRE_ALUMNO, obtenerSuspensos, ALGUN_SUSPENSO_TEXTO_ELEMENTO);
}

function obtenerSuspensos(notas) {
  const SUSPENSOS = notas.filter((nota) => nota < 5);

  if (SUSPENSOS.length > 0) {
    const SUSPENSOS_STRING = SUSPENSOS.join(", ");
    return SUSPENSOS_STRING;
  } else {
    return "No hay suspensos";
  }
}

/* ----------------------------------------------------------------------------------------------- */

function mostrarEstadistica(nombreAlumno, calcularEstadistica, elementoTexto) {
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === nombreAlumno);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    const ESTADISTICA = calcularEstadistica(NOTAS);
    elementoTexto.innerHTML += ESTADISTICA;
  } else {
    alert("No existe un alumno con ese nombre");
  }
}

/* ----------------------------------------------------------------------------------------------- */

function obtenerNombre() {
  const NOMBRE_ALUMNO = NOMBRE_ALUMNO_INPUT.value.toLowerCase();
  return NOMBRE_ALUMNO;
}

/* ----------------------------------------------------------------------------------------------- */

function resetearBotones() {
  NOMBRE_ALUMNO_INPUT.value = "";
  borrarContenidoLista(NOTAS_LISTA_ELEMENTO);
  PROMEDIO_TEXTO_ELEMENTO.innerHTML = "promedio: ";
  NOTA_MAS_ALTA_TEXTO_ELEMENTO.innerHTML = "nota más alta: ";
  ALGUN_SUSPENSO_TEXTO_ELEMENTO.innerHTML = "¿hubo algún suspenso? ";

  habilitarBoton(COMPROBAR_BOTON);
  deshabilitarBotones();
}

function habilitarBotones() {
  habilitarBoton(RESET_BOTON);
  habilitarBoton(PROMEDIO_BOTON);
  habilitarBoton(NOTA_MAS_ALTA_BOTON);
  habilitarBoton(ALGUN_SUSPENSO_BOTON);
}

function deshabilitarBotones() {
  deshabilitarBoton(RESET_BOTON);
  deshabilitarBoton(PROMEDIO_BOTON);
  deshabilitarBoton(NOTA_MAS_ALTA_BOTON);
  deshabilitarBoton(ALGUN_SUSPENSO_BOTON);
}

function habilitarBoton(boton) {
  boton.disabled = false;
  boton.classList.remove("boton-deshabilitado");
}

function deshabilitarBoton(boton) {
  boton.disabled = true;
  boton.classList.add("boton-deshabilitado");
}

/* ----------------------------------------------------------------------------------------------- */

function borrarContenidoLista(elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}