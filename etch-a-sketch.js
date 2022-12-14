const box = document.getElementById("box");
const size = document.getElementById("grid-size");
let color = '#FFFFFF';
const changeBackgroundColor = e => {e.target.style.backgroundColor = `${color}`;}
const colorChoice = document.querySelector('#color-choice');

colorChoice.addEventListener('input', function () {
  color = this.value;
});

function makeGrid(num) {
  box.style.setProperty('--grid-rows', num);
  box.style.setProperty('--grid-cols', num);
  for (i = 0; i < (num * num); i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeBackgroundColor);
    box.appendChild(cell).className = "grid-element";
  };
};

function deleteGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function resize() {
  let size = prompt("Please enter a new grid size. Pick a number between 2 and 100.", 2);
  if (size > 1 && size < 101) {
    deleteGrid(box);
    makeGrid(size);
    return;
  }
  else {
    return alert("Invalid selection. Please enter a number between 2 and 100.");
  }
};

function clearGrid() {
  let elements = document.querySelectorAll(".grid-element");
  elements.forEach(element => element.style.backgroundColor = 'white');
};

function erase() {
  color = '#FFFFFF';
}

makeGrid(16);
