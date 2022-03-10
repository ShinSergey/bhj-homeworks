let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");
let sliders = document.getElementsByClassName("slider__item");
let dots = document.getElementsByClassName("slider__dot");

sliders = Array.from(sliders);
let current = sliders.findIndex(function (element) {
    if (element.className === "slider__item slider__item_active") {
        return element;
    }
});

onload = function () {
    prev.onclick = function () {
        prev = current - 1;
        if (current === 0) {
            prev = sliders.length - 1;
        };
        console.log(prev);
        sliders[current].classList.remove("slider__item_active");
        getSlide(sliders[prev]);
        
        current = prev;
    }

    next.onclick = function () {
        next = current + 1;
        if (current >= sliders.length - 1) {
            next = 0;
        };
        console.log(next);
        sliders[current].classList.remove("slider__item_active");
        getSlide(sliders[next]);
        current = next;
    }

    for (let k = 0; k < dots.length; k++) {
        let clicked = dots[k];
        clicked.onclick = () => {
            sliders[current].classList.remove("slider__item_active");
            getSlide(sliders[k]);
            current = k;
        }
    }
}

function getSlide(slide) {
    slide.classList.add("slider__item_active");
}