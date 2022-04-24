const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const list = document.getElementById("tasks__list");
let todo;
let getTodo = localStorage.getItem("todo");
let parsed = JSON.parse(getTodo);
if (parsed) {
    parsed.forEach((element) => {
        list.insertAdjacentHTML("afterBegin",
            `<div class="task">
          <div class="task__title">
          ${element}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);
    })
}

list.addEventListener("click", (event) => {
        if (event.target.classList.value === "task__remove") {
            let toDelete = event.target.previousSibling.previousSibling.textContent;
            let getTodo = localStorage.getItem("todo");
            let parsed = JSON.parse(getTodo);
            let index = parsed.indexOf(toDelete);
            parsed.splice(index, 1);
            localStorage.setItem('todo', JSON.stringify(parsed));
            event.target.parentElement.remove();
        }

})

function addToList() {
    list.insertAdjacentHTML("afterBegin",
        `<div class="task">
          <div class="task__title">
          ${input.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`);
    input.value = "";
    let tasks = Array.from(list.getElementsByClassName("task__title"));
    todo = [];
    tasks.forEach(element => {
        todo.push(element.textContent);
        localStorage.setItem("todo", JSON.stringify(todo));
    });
}

button.onclick = () => {
    let noGaps = input.value.trim();
    if (noGaps != "") {
        addToList()
    }
    return false;
}