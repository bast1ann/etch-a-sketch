const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const squares = [];
let nRows = 16;

resetButton.addEventListener("click", resetGrid);
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#F0AB6C");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#74EDDA");

createSquares(nRows);

// Create squares
function createSquares(dimensions) {
  const squareSize = 800/dimensions; 
  for (let i = 0; i < dimensions*dimensions; i++) {
    squares[i] = document.createElement("div");
    squares[i].style.width = squareSize + "px";
    squares[i].style.height = squareSize + "px";
    squares[i].style.border = "1px solid grey";
    squares[i].addEventListener("mousemove", () => squares[i].style.backgroundColor = "red");
    container.appendChild(squares[i]);
  }
}

// Reset grid
function resetGrid() {
  nRows = prompt("Enter dimensions of the grid:");
  squares.forEach( square => square.remove());
  createSquares(nRows);
}

// move in squares matrix

// square.addEventListener("mousedown", () => pintar + activar mousemove event)
// square.addEventListener("mouseup", () => desactivar mousemove event)


// testing branch