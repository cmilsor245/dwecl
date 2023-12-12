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