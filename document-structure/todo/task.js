const task = document.querySelector(".tasks__list");
const taskAdd = document.querySelector(".tasks__add");
const input = document.querySelector(".tasks__input");

taskAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const value = input.value;
  if (value != "") {
    task.innerHTML += `<div class="task">
          <div class="task__title">
          ${value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`;
    input.value = "";
  }
  onclick = (e) => {
    if (e.target.classList.contains("task__remove")) {
      e.target.parentElement.remove();
    }
  };
});
