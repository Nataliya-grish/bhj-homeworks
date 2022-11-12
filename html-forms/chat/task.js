const chatWindow = document.querySelector(".chat-widget__side-text");
chatWindow.onclick = function () {
  const chatWidget = document.querySelector(".chat-widget");
  chatWidget.classList.add("chat-widget_active");
};

const input = document.getElementById("chat-widget__input");
input.onkeypress = function (e) {
  if (e.which == 13) {
    const time = new Date();
    const messageValue = input.value;
    const bot = [
        "Кто тут?",
        "Где ваша совесть?",
        "К сожалению  все операторы сейчас заняты! Не пишите нам больше",
        "Вы не купили не одного товара, что б так с нами разговаривать!",
        "Добрый день! До свидания!",
        "Мы все сказали!",
        "Мы ничего не будем вам продавать!",
      ],
      index = Math.floor(Math.random() * bot.length);
    if (messageValue != "") {
      const messages = document.querySelector(".chat-widget__messages");
      messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                        <div class="message__text">${messageValue}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                            <div class="message__text">${bot[index]}</div>
                    </div>`;
    }
    input.value = "";
  }
};