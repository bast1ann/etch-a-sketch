const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".buttons-container button")
const resetButton = document.querySelector(".resetButton");
const rainbowButton = document.querySelector(".rainbowButton");
const defaultButton = document.querySelector(".defaultButton");
const clearButton = document.querySelector(".clearButton");
const squares = [];
let rainbowMode = false;
let nRows = 16;

buttons.forEach(function(button) {
  button.addEventListener("mouseover", () => button.style.backgroundColor = "#F0AB6C");
  button.addEventListener("mouseout", () => button.style.backgroundColor = "#74EDDA");
});

resetButton.addEventListener("click", resetGrid);
rainbowButton.addEventListener("click", () => rainbowMode = true);
defaultButton.addEventListener("click", () => rainbowMode = false);
clearButton.addEventListener("click", clearGrid);

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
  squares.forEach( (square) => square.addEventListener("mouseenter", painting) );
}

function deactivateMousemove() {
  squares.forEach( (square) => square.removeEventListener("mouseenter", painting) );
}

function painting() {
  if (rainbowMode === true) {
    this.style.backgroundColor = "#" + randomColor();
  }
  else {
    this.style.backgroundColor = "black";
  }
}

function addEvents() {
  squares.forEach( (square) => square.addEventListener("mousedown", () => {
    if (rainbowMode === true) {
      square.style.backgroundColor = "#" + randomColor();
    }
    else {
      square.style.backgroundColor = "black";
    }
    activateMousemove(); }) );
  squares.forEach( (square) => square.addEventListener("mouseup", deactivateMousemove) );
}

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

// Reset grid
function resetGrid() {
  nRows = prompt("Enter dimensions of the grid:");
  squares.forEach( square => square.remove() );
  createSquares(nRows);
  addEvents();
}

function clearGrid() {
  squares.forEach( square => square.style.backgroundColor = "white" );
}

// testing branch