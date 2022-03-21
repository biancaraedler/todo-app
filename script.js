const todoList = document.querySelector("#todo-list");
const showTodo = document.querySelector("#show-todo-api");

fetch("http://localhost:4730/todos")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((jsonData) => {
    console.log(jsonData);
  });
