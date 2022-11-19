const progress = document.getElementById("progress");
const form = document.getElementById("form");
const xhr = new XMLHttpRequest();

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let formData = new FormData(form);
  
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  xhr.upload.onprogress = function (element) {
    progress.value = element.loaded / element.total;
  };
  xhr.send(formData);
  xhr.upload.onload = function () {
    alert(`Данные успешно отправлены.`);
  };
});