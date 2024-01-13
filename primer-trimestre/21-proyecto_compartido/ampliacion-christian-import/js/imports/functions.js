export function mostrarEstadistica(nombreAlumno, calcularEstadistica, elementoTexto) {
  const ALUMNO = LISTA_ALUMNOS.find((alumno) => alumno.nombre === nombreAlumno);

  if (ALUMNO) {
    const NOTAS = ALUMNO.notas;
    const ESTADISTICA = calcularEstadistica(NOTAS);
    elementoTexto.innerHTML += ESTADISTICA;
  } else {
    alert("No existe un alumno con ese nombre");
  }
}