onload = function () {
    let activate = document.getElementsByClassName("menu__link");
    for (let i = 0; i < activate.length; i++) {
        let active = activate[i];
        let sub = active.closest('li').querySelector('.menu_sub');
        if (sub !== null) {
            active.onclick = function noLink() {
                sub.classList.toggle("menu_active");
                return false
            };
        }
    }
}
