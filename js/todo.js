const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const TODO_DONE = "todo-done";
const TODO_DONE_BTN = "todo-done--btn";
const FA_SOLID = "fa-solid";
const FA_REGULAR = "fa-regular";
const STAR = "fa-star";
const ERASER = "fa-eraser";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function changeFlag(event) {
    const li = event.target.parentElement;
    const children = li.children;

    if (children[1].innerText === "0") {
        children[0].classList.remove(FA_REGULAR);
        children[0].classList.add(FA_SOLID, TODO_DONE_BTN);
        children[1].innerText = "1";
        children[2].classList.add("todo-done");
    } else {
        children[0].classList.add(FA_REGULAR);
        children[0].classList.remove(FA_SOLID, TODO_DONE_BTN);
        children[1].innerText = "0";
        children[2].classList.remove("todo-done");
    }

    for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].id === parseInt(li.id)) toDos[i].flag = children[1].innerText;
    }

    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const flag = document.createElement("span");
    flag.innerText = newTodoObj.flag;
    flag.classList.add("hidden");

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const flagButton = document.createElement("button");
    flagButton.classList.add(STAR);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(FA_SOLID, ERASER);

    if (newTodoObj.flag === "0") {
        flagButton.classList.add(FA_REGULAR);
    } else {
        flagButton.classList.add(FA_SOLID, TODO_DONE_BTN);
        span.classList.add("todo-done");
    }

    flagButton.addEventListener("click", changeFlag);
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(flagButton);
    li.appendChild(flag);
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        flag: "0",
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
