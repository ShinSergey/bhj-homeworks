const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let flag = 1;
let count = 0;
let startTime = 0;

cookie.onclick = () => {
    start = new Date();
    count += 1;
    cookie.width = count % 2 ? 250 : 200;
    counter.textContent = count;
}