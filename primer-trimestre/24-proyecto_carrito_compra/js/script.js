// hito 8 -> import/export
import * as functions from "./imports/functions.js"

/* -------------------------------------------------------------------------------------------------------- */

// hito 1 -> carga de dom
const CART_TABLE = document.querySelector("#lista-carrito tbody")
const EMPTY_CART_BUTTON = document.querySelector("#vaciar-carrito")
const COURSES_LIST_ELEMENT = document.querySelector("#lista-cursos")

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas -> ruta del archivo de donde se sacan los atributos de cada card
const JSON_PATH = "data/data.json"

/* -------------------------------------------------------------------------------------------------------- */

// hito 3 -> agregar curso seleccionado al carrito -> array local de los cursos seleccionados
const SELECTED_COURSES_ARRAY = []

/* -------------------------------------------------------------------------------------------------------- */

// hito 7 -> local storage
functions.loadCart(SELECTED_COURSES_ARRAY)
functions.displayStoredCourses(CART_TABLE, SELECTED_COURSES_ARRAY) // función para que se muestren los cursos que se hayan seleccionado y esten guardados en local storage, si es que hay cursos seleccionados

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas
functions.fetchData(JSON_PATH, COURSES_LIST_ELEMENT)

/* -------------------------------------------------------------------------------------------------------- */

// hito 2 -> event listeners
COURSES_LIST_ELEMENT.addEventListener("click", (event) => {
  event.preventDefault()

  // hito 3 -> agregar curso seleccionado al carrito
  functions.addToCart(event, CART_TABLE, SELECTED_COURSES_ARRAY)
})

EMPTY_CART_BUTTON.addEventListener("click", () => {
  // hito 5 -> vaciar carrito
  functions.emptyCartDynamically(CART_TABLE, SELECTED_COURSES_ARRAY)
})

CART_TABLE.addEventListener("click", (event) => {
  // hito 4 -> eliminar curso del carrito
  functions.deleteCourse(event, SELECTED_COURSES_ARRAY, CART_TABLE)
})