"use strict"

const MODAL_BUTTONS = document.querySelectorAll(".show-modal")

const MODAL_CONTAINER = document.querySelector(".modal")
const MODAL_CLOSE_BUTTON = document.querySelector(".close-modal")
const OVERLAY_CONTAINER = document.querySelector(".overlay")

const showModal = function (e) {
  e.preventDefault() // evita que se ejecute el comportamiento por defecto, en este caso es "#", lo que lleva el view a la parte de arriba de la página
  MODAL_CONTAINER.classList.remove("hidden")
  OVERLAY_CONTAINER.classList.remove("hidden")
}

const closeModal = function () {
  MODAL_CONTAINER.classList.add("hidden")
  OVERLAY_CONTAINER.classList.add("hidden")
}

/* MODAL_BUTTONS.forEach(function (button) {
  button.addEventListener("click", showModal)
}) */

MODAL_BUTTONS.forEach(button => button.addEventListener("click", showModal))

MODAL_CLOSE_BUTTON.addEventListener("click", closeModal)
OVERLAY_CONTAINER.addEventListener("click", closeModal)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !MODAL_CONTAINER.classList.contains("hidden")) {
    closeModal()
  }
})