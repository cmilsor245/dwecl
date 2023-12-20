const CONTENT_DIV = document.querySelector("#content");

// localStorage.clear();

// localStorage.removeItem("nombre");
// localStorage.removeItem("array");
// localStorage.removeItem("object");

saveInLocalStorage();

loadFromLocalStorage();

function saveInLocalStorage() {
  // string
  const NOMBRE = "christian";
  localStorage.setItem("nombre", NOMBRE);

  // array
  const array = [1, 2, 3, 4, 5];
  localStorage.setItem("array", JSON.stringify(array));

  // object
  const object = {
    name: "christian",
    age: 22
  }
  localStorage.setItem("object", JSON.stringify(object));
}

function loadFromLocalStorage() {
  const NOMBRE = localStorage.getItem("nombre");
  const ARRAY = JSON.parse(localStorage.getItem("array"));
  const OBJECT = JSON.parse(localStorage.getItem("object"));

  const P_ELEMENT = document.createElement("p");

  P_ELEMENT.innerHTML = `
    nombre: ${NOMBRE}<br /><br />
    array: ${ARRAY.join(" | ")}<br /><br />
    object: ${OBJECT.name} - ${OBJECT.age}
  `;

  CONTENT_DIV.appendChild(P_ELEMENT);
}