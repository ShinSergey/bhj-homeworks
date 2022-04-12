const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const list = document.getElementById("tasks__list");
let getTodo;

if (getTodo) {
    list.replaceWith(getTodo);
}

function addToList() {
    list.insertAdjacentHTML("afterBegin", 
        `<div class="task">
        <div class="task__title">
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`);
        list.firstChild.firstChild.textContent = input.value;
        input.value = "";
        list.firstChild.lastChild.previousSibling.addEventListener("click", (event) => {
            event.currentTarget.parentElement.remove();
        })
        localStorage.setItem("todo", list);
        getTodo = localStorage.getItem("todo");
}

button.onclick = () => {
    if (input.value != 0) {
        addToList()
    }
    return false;
}

input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && input.value != 0) {
        addToList()
    }
    return false;
});
