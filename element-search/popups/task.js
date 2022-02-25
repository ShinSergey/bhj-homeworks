let main = document.getElementById("modal_main");
let success = document.getElementById("modal_success");


onload = function () {
    main.classList.add("modal_active");
    let close = document.getElementsByClassName("modal__close_times");
    for (let i = 0; i < close.length; i++) {
        let x = close[i];
        x.onclick = function () {
            main.classList.remove("modal_active");
            success.classList.remove("modal_active");;
        }
    }
}

let showS = document.querySelector(".show-success");

showS.onclick = () => {
    main.classList.remove("modal_active");
    success.classList.add("modal_active");
    // console.log(success.classList);
};