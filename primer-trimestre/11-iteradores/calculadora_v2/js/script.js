const RESULT_ELEMENT = document.getElementById("result");
const OPERATOR_1 = document.getElementById("operator_1");
const OPERATOR_2 = document.getElementById("operator_2");
const CLEAR_BUTTON = document.getElementById("clear");
const BUTTONS_CONTAINER = document.querySelectorAll("#buttons-container");

var message;

BUTTONS_CONTAINER.forEach((button) => {
  button.addEventListener("click", (e) => {
    const BUTTON = e.target;

    switch (BUTTON.id) {
      case "sum":
        calculate(sum());
        break;
      case "sub":
        calculate(sub());
        break;
      case "mul":
        calculate(mul());
        break;
      case "div":
        calculate(div());
        break;
      case "sqrt":
        calculate(sqrt());
        break;
      case "pow":
        calculate(pow());
        break;
      case "abs":
        calculate(abs());
        break;
    }
  });
});

CLEAR_BUTTON.addEventListener("click", () => {
  clear();
});

function calculate(operation) {
  checkOperatorType(operation);
  displayErrorMessage(message);
  if (!message) {
    displayResult(operation);
  }
}

function displayErrorMessage(message) {
  RESULT_ELEMENT.textContent = message;
}

function checkOperatorType(operation) {
  if (operation !== sqrt() && operation !== abs()) {
    if (OPERATOR_1.value === "" || OPERATOR_2.value === "" || isNaN(OPERATOR_1.value) || isNaN(OPERATOR_2.value)) {
      message = "operador inválido";
    } else {
      message = "";
    }
  } else {
    if (OPERATOR_1.value === "" || isNaN(OPERATOR_1.value)) {
      message = "operador inválido";
    } else {
      message = "";
    }
  }
}

function sum() {
  return Number(OPERATOR_1.value) + Number(OPERATOR_2.value);
}

function sub() {
  return Number(OPERATOR_1.value) - Number(OPERATOR_2.value);
}

function mul() {
  return Number(OPERATOR_1.value) * Number(OPERATOR_2.value);
}

function div() {
  return Number(OPERATOR_1.value) / Number(OPERATOR_2.value);
}

function sqrt() {
  return Math.sqrt(Number(OPERATOR_1.value));
}

function pow() {
  return Math.pow(Number(OPERATOR_1.value), Number(OPERATOR_2.value));
}

function abs() {
  return Math.abs(Number(OPERATOR_1.value));
}

function displayResult(operation) {
  RESULT_ELEMENT.textContent = operation;
}

function clear() {
  OPERATOR_1.value = "";
  OPERATOR_2.value = "";
  RESULT_ELEMENT.textContent = "";
}