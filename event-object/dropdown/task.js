let drops = document.querySelectorAll(".dropdown__value");
let links = document.querySelectorAll(".dropdown__link");

for (let k = 0; k < drops.length; k++) {
    let drop = drops[k];
    drop.onclick = (event) => {
        console.log(event.currentTarget.nextSibling.nextSibling);
        event.currentTarget.nextSibling.nextSibling.classList.toggle("dropdown__list_active");
    }
}

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.onclick = (event) => {
        let newText = link.textContent;
        event.currentTarget.parentElement.parentElement.classList.toggle("dropdown__list_active");
        let closest = event.currentTarget.parentElement.parentElement.previousElementSibling;
        console.log(event.currentTarget.parentElement.parentElement.previousElementSibling);
        closest.textContent = newText;
        return false;
    }
}

// 111