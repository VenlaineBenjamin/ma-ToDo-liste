import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

const todos = [
    {
        text: "je suis une todo",
        done: false,
    },
    {
        text: "faire du JavaScript",
        done: true,
    },
];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
});

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    });
    ul.innerHTML = "";
    ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
    <button class="editer" title="Editer">
        <i class="fa-solid fa-pencil"></i>
    </button>
    <button class="supprimer" title="Supprimer">
        <i class="fa-solid fa-xmark"></i>
    </button>`;
    return li;
};

const addTodo = (text) => {
    todos.push({
        text,
        done: false,
    });
    displayTodo();
};

displayTodo();
