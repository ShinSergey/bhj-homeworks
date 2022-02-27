const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let flag = 1;
let count = 0;
let startTime = new Date();
console.log(startTime);

cookie.onclick = () => {
    let newTime = new Date();
    console.log(newTime);
    let diff = newTime - startTime;
    console.log(diff);
    startTime = newTime;
    let clickSpeed = 1000 / diff;
    speed.textContent = clickSpeed.toFixed(2);
    count += 1;
    cookie.width = count % 2 ? 250 : 200;
    counter.textContent = count;
}