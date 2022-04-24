const pTitle = document.getElementById("poll__title");
const pAnswer = document.getElementById("poll__answers");
let xhr = function xhr(type, url, header, value) {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);
    if (header && value) {
        xhr.setRequestHeader(header, value);
    }
    xhr.send();
    return xhr;
}
const pull = new XMLHttpRequest();

xhr("GET", "https://netology-slow-rest.herokuapp.com/poll.php")

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let parsed = JSON.parse(xhr.responseText);
        pTitle.textContent = parsed.data.title;
        parsed.data.answers.forEach(element => {
            let newButton = document.createElement("button");
            newButton.classList = "poll__answer";
            newButton.textContent = element;
            pAnswer.appendChild(newButton);
            // pAnswer.insertAdjacentHTML("afterbegin",
            //     `<button class="poll__answer"></button>`)
            // pAnswer.firstChild.textContent = element;
            pAnswer.firstChild.nextSibling.onclick = (e) => {
                alert("Спасибо, ваш голос засчитан!");
                pull.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                pull.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                let answer = parsed.data.answers.findIndex(element => {
                    if (element === e.currentTarget.textContent) {
                        return element;
                    }
                });
                pull.send('vote=' + parsed.id + '&answer=' + answer);
            }
        });
    }
})


pull.addEventListener("readystatechange", () => {
    if (pull.readyState === pull.DONE) {
        pAnswer.innerHTML = "";
        let stat = JSON.parse(pull.response);
        stat.stat.forEach(element => {
            pAnswer.insertAdjacentHTML("afterbegin",
                `<div>
        <div>${element.answer + " - " + element.votes + " голосов"}</div>
        </div>`);
        })
    }
})




