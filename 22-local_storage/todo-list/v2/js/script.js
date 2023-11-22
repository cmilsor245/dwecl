const ITEMS_ARRAY = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

window.onload = function() {
  displayDate();
}