const clickers = document.getElementsByClassName("has-tooltip");

for (let e = 0; e < clickers.length; e++) {
    clickers[e].insertAdjacentHTML("afterend", `<div class="tooltip">
    Текст подсказки
    </div>`);
    clickers[e].onclick = () => {
        let prompt = clickers[e].nextElementSibling;
        prompt.style.position = 'absolute';
        let position = clickers[e].getAttribute("data-position");
        prompt.textContent = clickers[e].title;
        let active = document.querySelector(".tooltip_active");
        if (active && active === prompt) {
            active.classList.remove("tooltip_active");
            return false;
        } else if (active) {
            active.classList.remove("tooltip_active");
        }
        prompt.classList.toggle("tooltip_active");
        if (position === "bottom") {
            prompt.style.left = clickers[e].getBoundingClientRect().left + "px"
            prompt.style.top = (clickers[e].getBoundingClientRect().top + 15) + "px";
        } else if (position === "top") {
            prompt.style.left = clickers[e].getBoundingClientRect().left + "px"
            prompt.style.top = (clickers[e].getBoundingClientRect().top - 30) + "px";
        } else if (position === "left") {
            prompt.style.left = (clickers[e].getBoundingClientRect().left - prompt.offsetWidth) + "px"
            prompt.style.top = clickers[e].getBoundingClientRect().top + "px";
        } else if (position === "right") {
            prompt.style.left = (clickers[e].getBoundingClientRect().left + clickers[e].offsetWidth) + "px"
            prompt.style.top = clickers[e].getBoundingClientRect().top + "px";
        }

        return false;
    }
}