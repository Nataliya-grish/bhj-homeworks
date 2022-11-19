const editor = document.getElementById("editor");
const clearBtn = document.getElementById("button");

editor.value = localStorage.getItem("text");

editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});

clearBtn.addEventListener("click", () => {
  editor.value = "";
  localStorage.clear();
});