const timer = document.getElementById("timer");
const onTimer = setInterval(() => {
  --timer.textContent;
  if (timer.textContent == 0) {
    clearInterval(onTimer);
    alert("Вы победили в конкурсе!");
    timer.textContent = 0;
  };
}, 1000)
