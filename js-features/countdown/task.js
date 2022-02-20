let timer = document.getElementById("timer")

let interval = setInterval(() => {
    let date = new Date(0);
    date.setSeconds(timer.textContent);
    let timeString = date.toISOString().substr(11, 6) + (timer.textContent -= 1);
    console.log(timeString);
    console.log(timer.textContent);
    

    if (timer.textContent === "0") {
        alert("Вы победили в конкурсе!");
        clearInterval();
        location.assign("http://www.mozilla.org");
    }
}, 1000);

