async function loadData() {
  try {
    const RESPONSE = await fetch('../js/busqueda/data/busqueda.json')
    const DATA = await RESPONSE.json()

    const WRAPPER = document.querySelector('.productos-busqueda-contenido')

    DATA.forEach(item => {
      const ITEM_ARTICLE = document.createElement('article')
      ITEM_ARTICLE.classList.add('busqueda-item')

      const IMG = document.createElement('img')
      IMG.src = item.img_src
      IMG.alt = item.pais

      const H1 = document.createElement('h1')
      H1.textContent = item.pais

      const P = document.createElement('p')
      P.textContent = item.descripcion

      ITEM_ARTICLE.appendChild(IMG)
      ITEM_ARTICLE.appendChild(H1)
      ITEM_ARTICLE.appendChild(P)

      WRAPPER.appendChild(ITEM_ARTICLE)
    })
  } catch (error) {
    console.error('Error al cargar los datos del archivo JSON:', error)
  }
}

window.onload = loadData