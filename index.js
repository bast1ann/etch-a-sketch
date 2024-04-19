const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const squares = [];
let nRows = 16;

resetButton.addEventListener("click", resetGrid);
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#F0AB6C");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#74EDDA");

createSquares(nRows);
addEvents();

// Create squares
function createSquares(dimensions) {
  const squareSize = 800/dimensions; 
  for (let i = 0; i < dimensions*dimensions; i++) {
    squares[i] = document.createElement("div");
    squares[i].style.width = squareSize + "px";
    squares[i].style.height = squareSize + "px";
    squares[i].style.border = "1px solid grey";
    container.appendChild(squares[i]);
  }
}

function activateMousemove() {
  squares.forEach( (square) => square.addEventListener("mousemove", painting) );
}

function deactivateMousemove() {
  squares.forEach( (square) => square.removeEventListener("mousemove", painting) );
}

function painting() {
  this.style.backgroundColor = "blue";
}

function addEvents() {
  squares.forEach( (square) => square.addEventListener("mousedown", () => {
  square.style.backgroundColor = "blue";
  activateMousemove(); }) );

  squares.forEach( (square) => square.addEventListener("mouseup", deactivateMousemove) );
}

// Reset grid
function resetGrid() {
  nRows = prompt("Enter dimensions of the grid:");
  squares.forEach( square => square.remove() );
  createSquares(nRows);
  addEvents();
}

// testing branch