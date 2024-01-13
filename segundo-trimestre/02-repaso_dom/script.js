"use strict"

const MODAL_BUTTONS = document.querySelectorAll(".btn--show-modal")

const MODAL_CONTAINER = document.querySelector(".modal")
const MODAL_CLOSE_BUTTON = document.querySelector(".btn--close-modal")
const OVERLAY_CONTAINER = document.querySelector(".overlay")

const HEADER = document.querySelector(".header")
const SECTION = document.querySelectorAll(".section")
const SECTION_1 = document.querySelector("#section--1")
const LINK = document.querySelector(".nav__link--btn")

// console.log(HEADER)
// console.log(SECTION)
// console.log(SECTION_1)

const ALL_BUTTONS_1 = document.getElementsByTagName("button") // devuelve un htmlCollection, mientras que querySelectorAll devuelve un nodeList - htmlCollection es una colección "viva": si se cambia algo en el dom se cambia automáticamente, mientras que el nodeList es una colección estática
// console.log(ALL_BUTTONS_1)

const ALL_BUTTONS_2 = document.getElementsByClassName("button")
// console.log(ALL_BUTTONS_2)

const LOGO = document.querySelector(".nav__logo")
/* console.log(LOGO.alt)
console.log(LOGO.src)
console.log(LOGO.className) */
/* console.log(LOGO.designer) // no funciona porque es un atributo personalizado ("data-designer")
console.log(LOGO.getAttribute("designer")) // así se recogen los atributos personalizados - * devuelve null, no sépor qué
console.log(LOGO.dataset.designer) */

// formas de actualizar un atributo
LOGO.alt = "logo interesante"
// console.log(LOGO.alt)

LOGO.setAttribute("alt", "logo")
// console.log(LOGO.alt)

LOGO.setAttribute("designer", "test cambio")
// console.log(LOGO.getAttribute("designer"))

LOGO.setAttribute("nuevi_atributo", "test nuevo")
// console.log(LOGO.getAttribute("nuevi_atributo"))

/* console.log(LOGO.src) // devuelve la ruta absoluta
console.log(LOGO.getAttribute("src")) // devuelve la ruta relativa */

/* console.log(LINK.href) // devuelve la ruta absoluta
console.log(LINK.getAttribute("href")) // devuelve la ruta relativa */

/* console.log(LOGO.dataset.versionNumber) // si el atributo se llama "data-version-number" se recupera de esta manera
console.log(LOGO.getAttribute("data-version-number")) // esta es otra forma */

LOGO.classList.add("c", "j") // así se añaden las clases "c" y "j" al elemento logo
LOGO.classList.remove("c") // así se elimina una clase
/* console.log(LOGO.classList)
console.log(`c: ${LOGO.classList.contains("c")}`) // devuelve false
console.log(`j: ${LOGO.classList.contains("j")}`) // devuelve true */

/* console.log(LOGO.classList.toggle("c")) // si la clase ya existe se elimina, si no existe se añade - además, devuelve true si se añade y false si se elimina
console.log(LOGO.classList)
console.log(LOGO.classList.toggle("j"))
console.log(LOGO.classList) */

/* LOGO.className = "clase-nueva" // sobreescribe todas las clases del nodo por las establecidas aquí
console.log(LOGO.classList) */

const showModal = function (e) {
  e.preventDefault() // evita que se ejecute el comportamiento por defecto, en este caso es "#", lo que lleva el view a la parte de arriba de la página
  MODAL_CONTAINER.classList.remove("hidden")
  OVERLAY_CONTAINER.classList.remove("hidden")
}

const closeModal = function () {
  MODAL_CONTAINER.classList.add("hidden")
  OVERLAY_CONTAINER.classList.add("hidden")
}

/* const MESSAGE = document.createElement("div")
MESSAGE.classList.add("cookie-message")
MESSAGE.innerHTML = `
  cookie message <button class ="btn btn--close-cookie">Got it!></button>
` */

// HEADER.prepend(MESSAGE) // añade el elemento al nodo header como primer elemento
// HEADER.append(MESSAGE) // añade el elemento al nodo header como último elemento

// HEADER.prepend(MESSAGE.cloneNode(true)) // añade el elemento dos veces

// HEADER.before(MESSAGE) // añade el elemento antes del nodo header
// HEADER.after(MESSAGE) // añade el elemento después del nodo header

MODAL_BUTTONS.forEach(button => button.addEventListener("click", showModal))

MODAL_CLOSE_BUTTON.addEventListener("click", closeModal)
OVERLAY_CONTAINER.addEventListener("click", closeModal)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !MODAL_CONTAINER.classList.contains("hidden")) {
    closeModal()
  }
})

/* document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  MESSAGE.parentNode.removeChild(MESSAGE)
}) */

/* MESSAGE.style.backgroundColor = "#37383d"
MESSAGE.style.width = "120%" */

// console.log(MESSAGE.style.backgroundColor) // funciona porque el estilo es inline
// console.log(MESSAGE.style.color) // ! no funciona porque el estilo no es inline
// console.log(getComputedStyle(MESSAGE).color) // * esta es la forma de obtener este estilo que no es inline

// console.log(`height antes: ${getComputedStyle(MESSAGE).height}`)

/* MESSAGE.style.height = Number.parseFloat(getComputedStyle(MESSAGE).height, 10) + 30 + "px"
console.log(`height después: ${getComputedStyle(MESSAGE).height}`) */

// document.documentElement.style.setProperty("--color-primary", "orange") // esta es la forma de acceder a una variable css para alterar su valor, esta variable está en :root