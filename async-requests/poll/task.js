const pTitle = document.getElementById("poll__title");
const pAnswer = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();
const pull = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let parsed = JSON.parse(xhr.responseText);
        pTitle.textContent = parsed.data.title;
        parsed.data.answers.forEach(element => {
            pAnswer.insertAdjacentHTML("afterbegin",
                `<button class="poll__answer"></button>`)
            pAnswer.firstChild.textContent = element;
            pAnswer.firstChild.onclick = (e) => {
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

xhr.send();

pull.addEventListener("readystatechange", () => {
    if (pull.readyState === pull.DONE) {
        pAnswer.innerHTML=""; 
        let stat = JSON.parse(pull.response);
        stat.stat.forEach(element => {
            pAnswer.insertAdjacentHTML("afterbegin", 
        `<div>
        <div>Результат</div>
        </div>`);
        pAnswer.firstChild.textContent = element.answer + " - " + element.votes + " голосов";
        })
    }
})




