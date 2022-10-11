let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
  let getHole = document.getElementById("hole" + i)

  getHole.onclick = function() {
    if (getHole.classList.contains("hole_has-mole")) {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert("Победа!");
        return location.reload();
      };

    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert("Вы проиграли!");
        return location.reload();
      };
    };
  }
};