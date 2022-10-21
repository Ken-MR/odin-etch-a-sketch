const box = document.getElementById("box");

function makeGrid(rows, cols) {
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    box.appendChild(cell).className = "grid-element";
  };
};

makeGrid(16, 16);