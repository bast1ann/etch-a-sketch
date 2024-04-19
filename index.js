const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetButton");
const rainbowButton = document.querySelector(".rainbowButton");
const squares = [];
let rainbow = false;
let nRows = 16;

resetButton.addEventListener("click", resetGrid);
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#F0AB6C");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#74EDDA");
rainbowButton.addEventListener("click", () => rainbow = true);
rainbowButton.addEventListener("mouseover", () => rainbowButton.style.backgroundColor = "#F0AB6C");
rainbowButton.addEventListener("mouseout", () => rainbowButton.style.backgroundColor = "#74EDDA");

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
  if (rainbow === true) {
    this.style.backgroundColor = "#" + randomColor();
  }
  else {
    this.style.backgroundColor = "black";
  }
}

function addEvents() {
  squares.forEach( (square) => square.addEventListener("mousedown", () => {
    if (rainbow === true) {
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

// testing branch