const sideWidget = document.querySelector(".chat-widget__side");

sideWidget.onclick = () => {
    let chatWidget = document.querySelector(".chat-widget");
    chatWidget.classList.toggle("chat-widget_active");
}

const widgetInput = document.querySelector(".chat-widget__input");
const messages = document.querySelector('.chat-widget__messages');
let messageText = document.querySelector(".message__text");

widgetInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && widgetInput.value != 0) {
      
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">09:21</div>
          <div class="message__text">
          
          </div>
        </div>
      `;
      widgetInput.value = "";
    }
});


