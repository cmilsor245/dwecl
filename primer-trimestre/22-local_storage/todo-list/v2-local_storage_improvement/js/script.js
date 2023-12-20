const ITEMS_ARRAY = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(ITEMS_ARRAY);

document.querySelector("#enter").addEventListener("click", () => {
  const ITEM = document.querySelector("#item");
  createItem(ITEM);
})

function displayItems() {
  let items = "";
  for (let i = 0; i < ITEMS_ARRAY.length; i++) {
    items += `
      <div class = "item">
        <div class = "input-controller">
          <textarea disabled>${ITEMS_ARRAY[i]}</textarea>

          <div class = "edit-controller">
            <i class="fa-solid fa-check delete-btn"></i>
            <i class="fa-solid fa-pen-to-square edit-btn"></i>
          </div>
        </div>

        <div class = "update-controller">
          <button class = "save-btn">save</button>
          <button class = "cancel-btn">cancel</button>
        </div>
      </div>
    `;
  }
  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
}

function activateDeleteListeners() {
  let delete_btn = document.querySelectorAll(".delete-btn");
  delete_btn.forEach((btn, i) => {
    btn.addEventListener("click", () => {deleteItem(i)});
  })
}

function activateEditListeners() {
  const EDIT_BTN = document.querySelectorAll(".edit-btn");
  const UPDATE_CONTROLLER = document.querySelectorAll(".update-controller");
  const INPUTS = document.querySelectorAll(".input-controller textarea");
  EDIT_BTN.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      UPDATE_CONTROLLER[i].style.display = "block";
      INPUTS[i].disabled = false;
    })
  })
}

function activateSaveListeners() {
  const SAVE_BTN = document.querySelectorAll(".save-btn");
  const INPUTS = document.querySelectorAll(".input-controller textarea");
  SAVE_BTN.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      updateItem(INPUTS[i].value, i);
    })
  })
}

function activateCancelListeners() {
  const CANCEL_BTN = document.querySelectorAll(".cancel-btn");
  const UPDATE_CONTROLLER = document.querySelectorAll(".update-controller");
  const INPUTS = document.querySelectorAll(".input-controller textarea");
  CANCEL_BTN.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      UPDATE_CONTROLLER[i].style.display = "none";
      INPUTS[i].disabled = true;
    })
  })
}

function updateItem(text, i) {
  ITEMS_ARRAY[i] = text;
  localStorage.setItem("items", JSON.stringify(ITEMS_ARRAY));
  location.reload();
}

function deleteItem(i) {
  ITEMS_ARRAY.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(ITEMS_ARRAY));
  location.reload();
}

function createItem(item) {
  ITEMS_ARRAY.push(item.value);
  localStorage.setItem("items", JSON.stringify(ITEMS_ARRAY));
  location.reload();
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

window.onload = function() {
  displayDate();
  displayItems();
}