const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const rows = [];
const squares = [];
let nRows = 16;

createGrid(nRows);

resetButton.addEventListener("click", resetGrid);
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#F0AB6C");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#74EDDA");

// Creating rows
function createGrid(dimension) {
  const squareSize = 800/dimension; 
  for (let i = 0; i < dimension; i++) {
    rows[i] = document.createElement("div");
    rows[i].style.display = "flex";
    container.appendChild(rows[i]);
    squares[i] = [];
    for (let j = 0; j < dimension; j++) {
    squares[i][j] = document.createElement("div");
    squares[i][j].style.width = squareSize.toString() + "px";
    squares[i][j].style.height = squareSize.toString() + "px";
    squares[i][j].addEventListener("mouseover", () => squares[i][j].style.backgroundColor = "red");
    rows[i].appendChild(squares[i][j]);
    }
  }
}

// Reset grid
function resetGrid() {
  dimensions = prompt("Enter dimensions of the grid:");
  rows.forEach(row => row.remove());
  createGrid(dimensions);
}