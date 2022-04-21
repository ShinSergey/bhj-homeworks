const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const list = document.getElementById("tasks__list");
let todo;
let getTodo = localStorage.getItem("todo");
let parsed = JSON.parse(getTodo);
if (parsed) {
    parsed.forEach((element) => {
        list.insertAdjacentHTML("afterBegin", element);
    })
}

function addToList() {
    list.insertAdjacentHTML("afterBegin",
        `<div class="task">
          <div class="task__title">
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);
    list.firstChild.firstChild.nextSibling.textContent = input.value;
    input.value = "";
    list.firstChild.lastChild.previousSibling.addEventListener("click", (event) => {
        event.currentTarget.parentElement.remove();
    })
    let tasks = Array.from(list.getElementsByClassName("task"));
    todo = [];
    localStorage.clear();
    tasks.forEach(element => {
        todo.push(element.outerHTML);
        localStorage.setItem("todo", JSON.stringify(todo));
    });
}

button.onclick = () => {
    input.value.trim();
    if (input.value != "") {
        addToList()
    }
    return false;
}