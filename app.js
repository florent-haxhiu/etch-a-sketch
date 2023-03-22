const grid = document.querySelector(".grid");
const cells = grid.childNodes;
const GRIDSIZE = 16;

const makeRows = (rows, cols) => {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement("div");
    // cell.innerText = c + 1;
    grid.appendChild(cell).className = "grid-item";
  }
};

makeRows(15, 15);

const colorCell = (event) => {
	event.target.style.backgroundColor = document.querySelector('#colorSelector').value;
}

console.log(grid, cells);
console.log(document.querySelector("#gridSize").value)

cells.forEach(cell => cell.addEventListener('mouseover', colorCell))