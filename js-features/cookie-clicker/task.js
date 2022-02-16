const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let flag = 1;
let count = 0;
let date = new Date
let clickSpeed = 1/speed.textContent;

cookie.onclick = () => {
    count += 1;
    switch (flag) {
        case 1:
            cookie.width += 20
            cookie.height += 20
            break;
        case 2:
            cookie.width -= 20
            cookie.height -= 20
            break;
    }
    if (flag === 1) {
        flag = 2;
    } else {
        flag = 1;
    }
    counter.textContent = count;
};