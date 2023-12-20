const MY_PROMISE = new Promise((resolve, reject) => {
  setTimeout(() => {
    const SUCCESS = true;

    if (SUCCESS) {
      resolve("success");
      console.log("success");
    } else {
      reject("failure");
      console.log("failure");
    }
  }, 2000)
})

/* ----------------------------------------------------------------------- */

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    if (!response.ok) {
      throw new error("an error has ocurred");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("error:", error);
  })

/* ----------------------------------------------------------------------- */

function obtainData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

function proccessData(data) {
  console.log("processed data:", data);
}

obtainData()
  .then(response => {
    if (!response.ok) {
      throw new error("an error has ocurred");
    }
    return response.json();
  })
  .then(data => {
    proccessData(data);
  })
  .catch(error => {
    console.error("error:", error);
  })