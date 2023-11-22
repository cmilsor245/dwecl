window.addEventListener("load", () => {
  TODOS = JSON.parse(localStorage.getItem("todos")) || [];
  const NAME_INPUT = document.querySelector("#name");
  const NEW_TODO_FORM = document.querySelector("#new-todo-form");
  const USERNAME = localStorage.getItem("username") || "";

  NAME_INPUT.value = USERNAME;

  NAME_INPUT.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  NEW_TODO_FORM.addEventListener("submit", (e) => {
    e.preventDefault();

    const TODO = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime()
    }

    TODOS.push(TODO);

    localStorage.setItem("todos", JSON.stringify(TODOS));

    e.target.reset();

    displayTodos();
  });

  displayTodos();
});

function displayTodos() {
  const TODO_LIST = document.querySelector("#todo-list");

  TODO_LIST.innerHTML = "";

  TODOS.forEach(todo => {
    const TODO_ITEM = document.createElement("div");
    TODO_ITEM.classList.add("todo-item");

    const LABEL = document.createElement("label");
    const INPUT = document.createElement("input");
    const SPAN = document.createElement("span");
    const CONTENT = document.createElement("div");
    const ACTIONS = document.createElement("div");
    const EDIT = document.createElement("button");
    const DELETE_BUTTON = document.createElement("button");

    INPUT.type = "checkbox";
    INPUT.checked = todo.done;
    SPAN.classList.add("bubble");

    if (todo.category == "business") {
      SPAN.classList.add("business");
    } else if (todo.category == "personal") {
      SPAN.classList.add("personal");
    }

    CONTENT.classList.add("todo-content");
    ACTIONS.classList.add("actions");
    EDIT.classList.add("edit");
    DELETE_BUTTON.classList.add("delete");

    CONTENT.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    EDIT.innerHTML = "edit";
    DELETE_BUTTON.innerHTML = "delete";

    LABEL.appendChild(INPUT);
    LABEL.appendChild(SPAN);
    ACTIONS.appendChild(EDIT);
    ACTIONS.appendChild(DELETE_BUTTON);
    TODO_ITEM.appendChild(LABEL);
    TODO_ITEM.appendChild(CONTENT);
    TODO_ITEM.appendChild(ACTIONS);

    TODO_LIST.appendChild(TODO_ITEM);

    if (todo.done) {
      TODO_ITEM.classList.add("done");
    }

    INPUT.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(TODOS));

      if (todo.done) {
        TODO_ITEM.classList.add("done");
      } else {
        TODO_ITEM.classList.remove("done");
      }

      displayTodos();
    });

    EDIT.addEventListener("click", () => {
      const INPUT = CONTENT.querySelector("input");
      INPUT.removeAttribute("readonly");
      INPUT.focus();
      INPUT.addEventListener("blur", (e) => {
        INPUT.setAttribute("readonly", "readonly");
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(TODOS));
        displayTodos();
      });
    });

    DELETE_BUTTON.addEventListener("click", () => {
      TODOS = TODOS.filter(t => t != todo);
      localStorage.setItem("todos", JSON.stringify(TODOS));
      displayTodos();
    });
  });
}