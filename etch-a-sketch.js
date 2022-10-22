const box = document.getElementById("box");
let cell;

function makeGrid(rows, cols) {
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    cell = document.createElement("div");
    box.appendChild(cell).className = "grid-element";
  };
};

makeGrid(16, 16);

let active = document.querySelectorAll(".grid-element");
const changeBackgroundColor = e => {e.target.classList.add('clicked');}

active.forEach(div => {div.addEventListener("mouseover", changeBackgroundColor);}) //change from click