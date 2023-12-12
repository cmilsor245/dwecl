// hito 8 -> import/export
import * as functions from "./imports/functions.js"

/* -------------------------------------------------------------------------------------------------------- */

// hito 1 -> carga de dom
const CART_TABLE = document.querySelector("#lista-carrito tbody")
const EMPTY_CART_BUTTON = document.querySelector("#vaciar-carrito")
const COURSES_LIST_ELEMENT = document.querySelector("#lista-cursos")
const JSON_PATH = "data/data.json"

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas
functions.fetchData(JSON_PATH, COURSES_LIST_ELEMENT)

/* -------------------------------------------------------------------------------------------------------- */

// hito 2 -> event listeners
COURSES_LIST_ELEMENT.addEventListener("click", (event) => {
  functions.addToCart(event, CART_TABLE)
})

EMPTY_CART_BUTTON.addEventListener("click", () => {
  functions.emptyCartDynamically(CART_TABLE)
})