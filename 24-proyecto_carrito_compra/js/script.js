// hito 8 -> import/export
import * as functions from "./imports/functions.js"

/* -------------------------------------------------------------------------------------------------------- */

// hito 1 -> carga de dom
const COURSES_LIST = document.querySelector("#lista-cursos")
const JSON_PATH = "data/data.json"

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas
functions.fetchData(JSON_PATH, COURSES_LIST)