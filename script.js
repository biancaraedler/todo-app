const addTodoBtn = document.querySelector("#add-todo-btn");
const newTodoInput = document.querySelector("#create-new-todo");
const todoList = document.querySelector("#todo-list");

let todos = []; // da speichere ich die todos von der Api rein mit todos = todosFromApi;

function loadTodos() {
  fetch("http://localhost:4730/todos")
    .then((res) => res.json())
    .then((todosFromApi) => {
      // hier habe ich die todos zurückbekommen
      todos = todosFromApi;
      renderTodos();
    });
}

function renderTodos() {
  // hier zeichne ich mein todos oder create
  todoList.innerHTML = ""; // den inhalt erstmal gelöscht
  todos.forEach((todo) => {
    const newLi = document.createElement("li");
    const text = document.createTextNode(todo.description);
    newLi.appendChild(text);

    todoList.appendChild(newLi);
  });
}

loadTodos(); //hier hab ich sie aufgerufen
