const sideWidget = document.querySelector(".chat-widget__side");
let messages = document.getElementsByClassName("message__text");
const widgetInput = document.querySelector(".chat-widget__input");
const chat = document.querySelector('.chat-widget__messages');
const chatScroll = document.querySelector(".chat-widget__messages-container");
const autoAnswers = ["Добрый день!", "Доброе утро!", "Добрый вечер!"];
let interval;

sideWidget.onclick = () => {
  let chatWidget = document.querySelector(".chat-widget");
  chatWidget.classList.toggle("chat-widget_active");
  interval = setInterval(() => {
    chat.innerHTML += `
          <div class="message">
            <div class="message__time"></div>
            <div class="message__text">
            </div>
          </div>
        `;
    let newAuto = messages.length - 1;
    messages[newAuto].textContent = "Вы живы?"
    timeFormat(newAuto)
  }, 30000);
}

function timeFormat(New) {
  let times = document.getElementsByClassName("message__time");
  let time = new Date;
  times[New].textContent = time.getHours() + ":" + time.getMinutes();
  if (times[New].textContent.length < 5) {
    times[New].textContent = "0" + time.getHours() + ":" + time.getMinutes();
  }
}

widgetInput.addEventListener("keydown", (event) => {
  clearInterval(interval);
  interval = setInterval(() => {
    chat.innerHTML += `
        <div class="message">
          <div class="message__time"></div>
          <div class="message__text">
          </div>
        </div>
      `;
    let newAuto = messages.length - 1;
    messages[newAuto].textContent = "Вы живы?"
    timeFormat(newAuto)
  }, 30000);
  if (event.keyCode === 13 && widgetInput.value != 0) {
    chat.innerHTML += `
        <div class="message message_client">
          <div class="message__time"></div>
          <div class="message__text">
          </div>
        </div>
      `;
    messages = document.getElementsByClassName("message__text");
    let newMessage = messages.length - 1;
    messages[newMessage].textContent = widgetInput.value;
    timeFormat(newMessage);
    widgetInput.value = "";

    chat.innerHTML += `
        <div class="message">
          <div class="message__time"></div>
          <div class="message__text">
          </div>
        </div>
      `;
    let newAnswer = messages.length - 1;
    messages[newAnswer].textContent = autoAnswers[Math.floor(Math.random() * autoAnswers.length)];
    timeFormat(newAnswer);
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }
});


