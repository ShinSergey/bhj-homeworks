let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");
let sliders = document.getElementsByClassName("slider__item");
let dots = document.getElementsByClassName("slider__dot");

onload = function () {
    sliders = Array.from(sliders);
    for (let i = 0; i < sliders.length; i++) {
        let active = sliders[i];
        prev.onclick = function () {
            if (active === sliders[0]) {
                active.classList.remove("slider__item_active");
                sliders[sliders.length - 1].classList.add("slider__item_active");
            }
            active.classList.remove("slider__item_active");
            sliders[i -= 1].classList.add("slider__item_active");
        }
        next.onclick = function () {
            if (active === sliders[sliders.length - 1]) {
                active.classList.remove("slider__item_active");
                active[0].classList.add("slider__item_active");
            }
            active.classList.remove("slider__item_active");
            sliders[i += 1].classList.add("slider__item_active");
        }
    }
    for (let k = 0; k < dots.length; k++) {
        let clicked = dots[k];
        clicked.onclick = () => {
            prevDot = document.querySelector(".slider__item_active")
            prevDot.classList.remove("slider__item_active");
            sliders[k].classList.add("slider__item_active");
            
        }
    }
}



