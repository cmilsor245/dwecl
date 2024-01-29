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

const BUTTON_SCROLL_TO = document.querySelector(".btn--scroll-to")

const H1 = document.querySelector("h1")
/* console.log(H1.querySelectorAll(".highlight"))
console.log(H1.childNodes)
console.log(H1.children)
console.log(H1.firstElementChild)
console.log(H1.lastElementChild)
console.log(H1.parentElement)
console.log(H1.closest(".header"))
console.log(H1.previousElementSibling)
console.log(H1.nextElementSibling)
console.log([...H1.parentElement.children]) */

const TABS = document.querySelectorAll(".operations__tab")
const TABS_CONTAINER = document.querySelector(".operations__tab-container")
const TABS_CONTENT = document.querySelectorAll(".operations__content")

const NAV = document.querySelector(".nav")
const NAV_LINKS = document.querySelector(".nav__link")
const NAV_LINK = document.querySelectorAll(".nav__link")

const INITIAL_COORDS =SECTION_1.getBoundingClientRect()
// console.log(INITIAL_COORDS.y)

const OBS_OPTIONS = {
  root: null, // el root es el target con el que section_1 intersecta, si no se especifica se usa el viewport
  threshold: 0.1 // threshold se refiere al procentaje de intersección donde se ejecutará la función callback - el 10% se representa con un 0.1 - se ejecutará cuando se vea un mínimo de 10% de intersección. entre 0.1 y 1 será true. si ponemos threshold 0 será true entre 0 y 1. si ponemos threshold 1 se ejecutará cuando esté toda la section 1 ocupando el viewport por completa, mientras tanto será false - si ponemos threshold: [0.1, 0.2...] podemos utilizar varios ratios
}

const NAV_HEIGHT = NAV.getBoundingClientRect().height

const SLIDER_CONTAINER = document.querySelector(".slider")
SLIDER_CONTAINER.style.overflow = "hidden"
const SLIDE_ELEMENTS = document.querySelectorAll(".slide")
/* SLIDE_ELEMENTS[0].style.transform = "translate(0%)"
SLIDE_ELEMENTS[1].style.transform = "translate(100%)"
SLIDE_ELEMENTS[2].style.transform = "translate(200%)" */

SLIDE_ELEMENTS.forEach((item, pos) => {
  item.style.transform = `translateX(${pos * 100}%)`
})

const BUTTON_NEXT = document.querySelector(".slider__btn--right")
const BUTTON_PREV = document.querySelector(".slider__btn--left")

const DOTS_CONTAINER = document.querySelector(".dots")

goToSlide(0)
displayDots()
activateDot(0)

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

const handleOver = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const ENLACE_ACTUAL = e.target

    NAV_LINK.forEach(link => {
      if (link !== ENLACE_ACTUAL) {
        link.style.opacity = opacity
      }
    })

    LOGO.style.opacity = opacity
  }
}

const obsCallback = function (entries, observer) {
  // entries es un array de trheshold, en este caso solo tiene un valor
  entries.forEach(entry => console.log(entry))
  const [entry] = entries
  console.log(entry)
}

const OBSERVER = new IntersectionObserver(obsCallback, OBS_OPTIONS)
OBSERVER.observe(SECTION_1)

const stickyNav = function (entries) {
  const [entry] = entries
  if (entry.isIntersecting) {
    NAV.classList.add("sticky")
  } else {
    NAV.classList.remove("sticky")
  }
}

const HEADER_OBSERVER = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${NAV_HEIGHT}px`
})
HEADER_OBSERVER.observe(HEADER)

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

BUTTON_SCROLL_TO.addEventListener("click", function (e) {
  const BUTTON_COORDS = e.target.getBoundingClientRect() // * develve las coordenadas del objeto que se le pasa, pero relativas al viewport (x relativo al borde izquierdo del vp, y relativo al borde superior del vp)
  // console.log(BUTTON_COORDS)

  const X = window.scrollX // * devuelve el número de píxeles que se ha desplazado horizontalmente
  const Y = window.scrollY // * devuelve el número de píxeles que se ha desplazado verticalmente
  // console.log(X, Y)

  // console.log("height/width viewport: ", document.documentElement.clientHeight, document.documentElement.clientWidth)

  /* ---------------------------------------------------- */

  // opciones para realizar el smooth scrolling
  const SECTION_1_COORDS = SECTION_1.getBoundingClientRect()

  // opción 1
  /* window.scrollTo(
    SECTION_1_COORDS.left + window.scrollX,
    SECTION_1_COORDS.top + window.scrollY
  ) */

  // opción 2
  // window.scrollTo(SECTION_1_COORDS)
  /* window.scrollTo({
    left: SECTION_1_COORDS.left + window.scrollX,
    top: SECTION_1_COORDS.top + window.scrollY,
    behavior: "smooth",
  }) */

  // * opción 3 - simplificada/moderna
  SECTION_1.scrollIntoView({ behavior: "smooth" })
})

/* H1.onmouseenter = function (e) { // una forma de añadir un event listener concreto a un elemento
  alert("leyendo el título")
} */

/* H1.addEventListener("mouseenter", function (e) { // otra forma de añadir un event listener a un elemento
  alert("leyendo el título")
}) */

/* const alertH1 = function (e) {
  alert("leyendo el título")
}
H1.addEventListener("mouseenter", alertH1) // otra forma de añadir un event listener a un elemento */

/* const alert2H1 = function (e) {
  alert("leyendo el título")
  H1.removeEventListener("mouseenter", alert2H1) // el evento se ejcuta una vez y acto seguido se elimina
}
H1.addEventListener("mouseenter", alert2H1) */

/* setTimeout(() => { // el evento se elimina pasado un tiempo específico
  H1.removeEventListener("mouseenter", alertH1)
}, 3000) */

/* document.querySelector(".nav__link").addEventListener("click", function (e) {
  console.log("link", e.target, e.currentTarget)
  console.log(e.currentTarget === this)
  this.style.backgroundColor = "green" // el this es el elemento que ha recibido el evento
  e.stopPropagation() // detiene la propagación del evento
})

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log("container", e.target, e.currentTarget)
  console.log(e.currentTarget === this)
  this.style.backgroundColor = "orange"
}, true)

document.querySelector(".nav").addEventListener("click", function (e) {
  console.log("nav", e.target, e.currentTarget)
  console.log(e.currentTarget === this)
  this.style.backgroundColor = "blue"
}, true) */

// sin delegación
/* document.querySelectorAll(".nav__link").forEach(function (el) {
  e.addEventListener("click", function (e) {
    e.preventDefault()
    const ID = this.getAttribute("href") // devuelve la ruta relativa
    // console.log(ID)
    document.querySelector(ID).scrollIntoView({ behavior: "smooth" })
  })
}) */

// con delegación
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault()
  if (e.target.classList.contains("nav__link")) {
    const ID = e.target.getAttribute("href")
    document.querySelector(ID).scrollIntoView({ behavior: "smooth" })
  }
})

TABS_CONTAINER.addEventListener("click", function (e) {
  const CLICKED = e.target.closest(".operations__tab")
  if (!CLICKED) return

  TABS.forEach((tab) => tab.classList.remove("operations__tab--active"))

  TABS_CONTENT.forEach((content) => content.classList.remove("operations__content--active"))

  CLICKED.classList.add("operations__tab--active")

  const CONTENIDO = document.querySelector(`.operations__content--${CLICKED.dataset.tab}`)
  CONTENIDO.classList.add("operations__content--active")
})

/* NAV.addEventListener("mouseover", handleOver.bind(0.5))
NAV.addEventListener("mouseout", handleOver.bind(1)) */

NAV.addEventListener("mouseover", function (e) {
  handleOver(e, 0.5)
})

NAV.addEventListener("mouseout", function (e) {
  handleOver(e, 1)
})

/* window.addEventListener("scroll", function (e) {
  // console.log(window.scrollY)

  if (window.scrollY > 100) {
    NAV.classList.add("sticky")
  } else {
    NAV.classList.remove("sticky")
  }
}) */

BUTTON_NEXT.addEventListener("click", handleNextSlider)
let TIMES_CLICKED = 0
let MAX_SLIDES = SLIDE_ELEMENTS.length - 1
function handleNextSlider() {
  if (TIMES_CLICKED === MAX_SLIDES) {
    TIMES_CLICKED = 0
  } else {
    TIMES_CLICKED++
  }
  goToSlide(TIMES_CLICKED)
}

BUTTON_PREV.addEventListener("click", handlePrevSlider)
function handlePrevSlider() {
  if (TIMES_CLICKED === 0) {
    TIMES_CLICKED = MAX_SLIDES
  } else {
    TIMES_CLICKED--
  }
  goToSlide(TIMES_CLICKED)
}

document.addEventListener("keydown", handleKeySlider)
function handleKeySlider(e) {
  if (e.key === "ArrowLeft") {
    handlePrevSlider()
  } else if (e.key === "ArrowRight") {
    handleNextSlider()
  }
  activateDot(TIMES_CLICKED)
}

function goToSlide(pos) {
  SLIDE_ELEMENTS.forEach((item, index) => {
    item.style.transform = `translateX(${(index - pos) * 100}%)`
  })
}

function displayDots() {
  SLIDE_ELEMENTS.forEach((_, index) => {
    // DOTS_CONTAINER.innerHTML += `<button class = 'dots__dot' data-slide = "${index}"></button>`

    DOTS_CONTAINER.insertAdjacentHTML(
      "beforeend",
      `<button class = "dots__dot" data-slide = "${index}"></button>`
    )
  })
}

function activateDot(pos) {
  const ACTIVATED_DOT = document.querySelector(`.dots__dot[data-slide = "${pos}"]`)
  document.querySelectorAll(`.dots__dot`).forEach((dot) => {
    dot.classList.remove("dots__dot--active")
  })
  ACTIVATED_DOT.classList.add("dots__dot--active")
}