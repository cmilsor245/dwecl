// hito 7 -> local storage
export function loadCart(array) {
  const SAVED_COURSES = localStorage.getItem("selected_courses")
  if (SAVED_COURSES) {
    array.push(...JSON.parse(SAVED_COURSES))
  }
}

export function displayStoredCourses(table, array) {
  array.forEach((cardInfoArray) => {
    updateExistingRow(table, cardInfoArray[4], cardInfoArray) // le paso la id de la card actual para evitar duplicidad
  })
}

/* -------------------------------------------------------------------------------------------------------- */

// hito 9 -> json - cards dinámicas
export async function fetchData(json_path, list_element) {
  try {
    const RESPONSE = await fetch(json_path)
    const DATA = await RESPONSE.json()

    let row_div

    DATA.forEach(({ src, title, author, previous_price, current_price, id }, index) => { // uso el parámetro opcional para el index de cada elemento
      if (index % 3 === 0) { // si el index es multiplo de 3 creo una nueva row
        row_div = document.createElement("div")
        row_div.classList.add("row")
        list_element.appendChild(row_div)
      }

      const DIV_CARD = document.createElement("div")
      DIV_CARD.classList.add("four", "columns")
      DIV_CARD.innerHTML = `
        <div class = "card">
          <img src = "${src}" class = "imagen-curso u-full-width" />
          <div class = "info-card">
            <h4>${title}</h4>
            <p>${author}</p>
            <img src = "img/estrellas.png" />
            <p class = "precio">${previous_price} <span class = "u-pull-right">${current_price}</span></p>
            <a href = "#" class = "u-full-width button-primary button input agregar-carrito" data-id = "${id}">Agregar Al Carrito</a>
          </div>
        </div>
      `

      row_div.appendChild(DIV_CARD)
    })
  } catch (error) {
    console.error(`error: ${error}`)
  }
}

/* -------------------------------------------------------------------------------------------------------- */


export function addToCart(event, table, array) {
  const CLICKED_ELEMENT = event.target

  if (CLICKED_ELEMENT.classList.contains("agregar-carrito")) {
    // hito 3 -> agregar curso seleccionado al carrito -> actualizar array local
    const TARGET_ID = CLICKED_ELEMENT.dataset.id
    const PARENT_ELEMENT = CLICKED_ELEMENT.parentElement.parentElement
    const CARD_INFO_ARRAY = obtainCardInfo(PARENT_ELEMENT)

    CARD_INFO_ARRAY.push(TARGET_ID)
    array.push(CARD_INFO_ARRAY)

    /* -------------------------- */

    // hito 7 -> local storage
    localStorage.setItem("selected_courses", JSON.stringify(array))

    /* -------------------------- */

    // hito 6 -> mejora del hito 3 -> se incrementa el contador en lugar de replicar el elemento
    updateExistingRow(table, TARGET_ID, CARD_INFO_ARRAY) // le paso la id de la card actual para evitar duplicidad
  }
}

function obtainCardInfo(card_wrapper) {
  const IMG_SRC = card_wrapper.querySelector("img").src
  const TITLE = card_wrapper.querySelector("h4").textContent
  const AUTHOR = card_wrapper.querySelector("p").textContent
  const CURRENT_PRICE = card_wrapper.querySelector(".precio span").textContent

  const CARD_INFO_ARRAY = [IMG_SRC, TITLE, AUTHOR, CURRENT_PRICE]
  return CARD_INFO_ARRAY
}

/* -------------------------------------------------------------------------------------------------------- */

// hito 6 -> mejora del hito 3 -> se incrementa el contador en lugar de replicar el elemento
function updateExistingRow(table, targetId, cardInfoArray) {
  const EXISTING_ROW = table.querySelector(`tr[data-id="${targetId}"]`) // creo una constante para comprobar si existe una fila con un atributo "data-id" igual a TARGET_ID, en cuyo caso ya hay un producto con ese id en el carrito y no debe crearse otra fila, sino aumentar la cantidad

  if (EXISTING_ROW) {
    const QUANTITY_CELL = EXISTING_ROW.querySelector("td:nth-child(4)") // con esto de aquí consigo la cuarta columna de mi tabla, que en mi caso corresponde a la cantidad del producto (https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
    QUANTITY_CELL.textContent = parseInt(QUANTITY_CELL.textContent) + 1 // * la primera vez que creo la fila el contenido de esta celda es texto plano ("1") así que la forma de hacerlo que me fue más fácil es pasarlo a entero y sumarle 1
  } else {
    const ROW = createRow(cardInfoArray)
    table.appendChild(ROW)
  }
}

/* -------------------------------------------------------------------------------------------------------- */

// hito 3 -> agregar curso seleccionado al carrito
function createRow(card_info_array) {
  const ROW = document.createElement("tr")
  ROW.setAttribute('data-id', card_info_array[4]) // aquí creo una fila de la tabla con el atributo de la id para que cuando se agrege el mismo producto más de una vez, arriba pueda comprobar si esta fila ya existe y no se repita, sino que se aumente la cantidad de la cuarta columna
  ROW.innerHTML = `
    <td>
      <img src = "${card_info_array[0]}" width = "100">
    </td>
    <td>${card_info_array[1]}</td>
    <td>${card_info_array[3]}</td>
    <td>1</td>
    <td>
      <a href = "#" class = "borrar-curso" data-id = "${card_info_array[4]}">X</a>
    </td>
  `
  return ROW
}

/* -------------------------------------------------------------------------------------------------------- */

// hito 5 -> vaciar carrito -> eliminación de los elementos de la tabla de forma dinámica y eficiente, eliminación de los objetos dentro del array local, y eliminación de los registros en el local storage
export function emptyCartDynamically(table, array) {
  while (table.firstChild) {
    table.removeChild(table.firstChild)
  }

  array.length = 0

  localStorage.clear()
}