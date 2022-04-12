const sideWidget = document.querySelector(".chat-widget__side");

sideWidget.onclick = () => {
    let chatWidget = document.querySelector(".chat-widget");
    chatWidget.classList.toggle("chat-widget_active");
}

const widgetInput = document.querySelector(".chat-widget__input");
const chat = document.querySelector('.chat-widget__messages');
const autoAnswers = []

widgetInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && widgetInput.value != 0) {
      
      chat.innerHTML += `
        <div class="message message_client">
          <div class="message__time">09:21</div>
          <div class="message__text">
          
          </div>
        </div>
      `;
      let messages = document.getElementsByClassName("message__text");
      let newMessage = messages.length - 1;
      messages[newMessage].textContent = widgetInput.value;
      let times = document.getElementsByClassName("message__time");
      times[newMessage].textContent = new Date;
      widgetInput.value = "";
      chat.innerHTML += `
        <div class="message">
          <div class="message__time">09:21</div>
          <div class="message__text">
          
          </div>
        </div>
      `;
    }
});


