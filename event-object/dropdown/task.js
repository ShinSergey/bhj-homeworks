let drops = document.querySelectorAll(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let links = document.querySelectorAll(".dropdown__link");

for (let k = 0; k < drops.length; k++) {
    let drop = drops[k];
    drop.onclick = () => {
        list.classList.toggle("dropdown__list_active");
    }
}

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.onclick = () => {
        let newText = link.textContent;
        list.classList.toggle("dropdown__list_active");
        let closest = document.querySelector(".dropdown__value");
        closest.textContent = newText;
        return false;
    }
}
