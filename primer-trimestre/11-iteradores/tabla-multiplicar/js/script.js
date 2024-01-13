const NUMBER_INPUT = document.getElementById("number_chosen");
const SUBMIT_BUTTON = document.getElementById("submit");
const TABLE_LIST_ELEMENT = document.getElementById("table_list");

SUBMIT_BUTTON.addEventListener("click", function(e) {
  e.preventDefault();

  const NUMBER = parseInt(NUMBER_INPUT.value);

  if (isNaN(NUMBER)) {
    alert("ingresa un número válido.");
    return;
  }

  while (TABLE_LIST_ELEMENT.firstChild) {
    TABLE_LIST_ELEMENT.removeChild(TABLE_LIST_ELEMENT.firstChild);
  }

  for (let i = 1; i <= 10; i++) {
    let result = NUMBER * i;
    let list_item = document.createElement("li");
    list_item.textContent = `${NUMBER} x ${i} = ${result}`;
    TABLE_LIST_ELEMENT.appendChild(list_item);
  }
});