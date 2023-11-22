window.addEventListener("load", () => {
  const FORM = document.querySelector("#new-task-form");
  const INPUT = document.querySelector("#new-task-input");
  const LIST_EL = document.querySelector("#tasks");

  FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const TASK = INPUT.value;

    if (!TASK) {
      alert("Please fill out the task");
      return;
    }

    const TASK_EL = document.createElement("div");
    TASK_EL.classList.add("task");

    const TASK_CONTENT_EL = document.createElement("div");
    TASK_CONTENT_EL.classList.add("content");

    TASK_EL.appendChild(TASK_CONTENT_EL);

    const TASK_INPUT_EL = document.createElement("input");
    TASK_INPUT_EL.classList.add("text");
    TASK_INPUT_EL.type = "text";
    TASK_INPUT_EL.value = TASK;
    TASK_INPUT_EL.setAttribute("readonly", "readonly");

    TASK_CONTENT_EL.appendChild(TASK_INPUT_EL);

    const TASK_ACTIONS_EL = document.createElement("div");
    TASK_ACTIONS_EL.classList.add("actions");

    const TASK_EDIT_EL = document.createElement("button");
    TASK_EDIT_EL.classList.add("edit");
    TASK_EDIT_EL.innerText = "edit";

    const TASK_DELETE_EL = document.createElement("button");
    TASK_DELETE_EL.classList.add("delete");
    TASK_DELETE_EL.innerText = "delete";

    TASK_ACTIONS_EL.appendChild(TASK_EDIT_EL);
    TASK_ACTIONS_EL.appendChild(TASK_DELETE_EL);

    TASK_EL.appendChild(TASK_ACTIONS_EL);

    LIST_EL.appendChild(TASK_EL);

    INPUT.value = "";

    TASK_EDIT_EL.addEventListener("click", (e) => {
      if (TASK_EDIT_EL.innerText.toLowerCase() == "edit") {
        TASK_INPUT_EL.removeAttribute("readonly");
        TASK_INPUT_EL.focus();
        TASK_EDIT_EL.innerText = "save";
      } else {
        TASK_INPUT_EL.setAttribute("readonly", "readonly");
        TASK_EDIT_EL.innerText = "edit";
      }
    })

    TASK_DELETE_EL.addEventListener("click", (e) => {
      LIST_EL.removeChild(TASK_EL);
    })
  })
})