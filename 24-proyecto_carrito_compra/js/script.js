// hito 8 -> import/export
import * as functions from "./imports/functions.js"

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas
const COURSES_LIST = document.querySelector("#lista-cursos")
const JSON_PATH = "data/data.json"

functions.fetchData(JSON_PATH, COURSES_LIST)