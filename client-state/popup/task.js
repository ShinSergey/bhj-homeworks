let subscribe = document.getElementById("subscribe-modal");

subscribe.classList.add("modal_active");
let close = document.getElementsByClassName("modal__close");
close[0].onclick = function () {
    subscribe.classList.remove("modal_active");
    setCookie("popup", "closed");
}

let Cookie = getCookie("popup");
if (Cookie === "closed") {
    subscribe.classList.remove("modal_active");
}

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find(p => p.startsWith(name + "="));
    return cookie.substr(name.length + 1);
}

