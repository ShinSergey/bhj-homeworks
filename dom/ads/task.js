const rotators = document.getElementsByClassName("rotator__case");
let currentAd = 0;
let speed = rotators[currentAd].getAttribute("data-speed");
let color = rotators[currentAd].getAttribute("data-color");
rotators[currentAd].style.color = color;

let myFunction = function () {
    rotators[currentAd].classList.toggle("rotator__case_active");
    ++currentAd;
    if (currentAd >= rotators.length) {
        currentAd = 0;
    }
    rotators[currentAd].classList.toggle("rotator__case_active");
    let speedNew = rotators[currentAd].getAttribute("data-speed");
    let colorNew = rotators[currentAd].getAttribute("data-color");
    rotators[currentAd].style.color = colorNew;
    setTimeout(myFunction, speedNew);
}

setTimeout(myFunction, speed);