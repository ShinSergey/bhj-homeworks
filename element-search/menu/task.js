onload = function () {
    let activate = document.getElementsByClassName("menu__link");
    for (let i = 0; i < activate.length; i++) {
        let active = activate[i];
        if (!active.closest('li').querySelector('.menu_active')) {
            let sub = active.closest('li').querySelector('.menu_sub');
            active.onclick = function noLink() {
                sub.classList.add("menu_active");
                return false
            };
        }
        else if (active.closest('li').querySelector('.menu_active')) {
            let close = active.closest('li').querySelector('.menu_active');
            active.onclick = function noLink() {
                close.classList.remove("menu_active"); 
                return false
            };
        }
    }
}
