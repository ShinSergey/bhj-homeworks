const reveals = document.getElementsByClassName("reveal");

setInterval(() => {
    for (i = 0; i < reveals.length; i++) {
        let reveal = reveals[i];
        let { top, bottom } = reveal.getBoundingClientRect()
        if (top < window.innerHeight && bottom > 0) {
            reveal.classList.add("reveal_active");
        } else if (top > window.innerHeight || bottom < 0) {
            reveal.classList.remove("reveal_active");
        }
    }
}, 1000);