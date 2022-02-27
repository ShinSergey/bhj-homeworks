let timer = document.getElementById("timer");
timer.textContent = "00:00:59";
let final;

let interval = setInterval(() => {
    // console.log(timer.textContent);
    let arr = timer.textContent.split(":");
    // console.log(arr);
    let parsed = parseInt(arr[2], 10) - 1;
    let string = parsed.toString();
    // console.log(string);
    arr.splice(2, 1, string);
    final = arr.join(":");
    // console.log(final);
    timer.textContent = final;
    
    if (timer.textContent === "00:00:00") {
        alert("Вы победили в конкурсе!");
        clearInterval();
        location.assign("http://www.mozilla.org");
    }
}, 1000);

