const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".buttons-container button")
const resetButton = document.querySelector(".resetButton");
const rainbowButton = document.querySelector(".rainbowButton");
const defaultButton = document.querySelector(".defaultButton");
const opacityButton = document.querySelector(".opacityButton");
const clearButton = document.querySelector(".clearButton");
const eraserButton = document.querySelector(".eraserButton");
const squares = [];
let rainbowMode = false;
let opacityMode = false;
let eraserMode = false;
let nRows = 16;

// Adding color-hovering effect for buttons
buttons.forEach(function(button) {
  button.addEventListener("mouseover", () => button.style.backgroundColor = "#F0AB6C");
  button.addEventListener("mouseout", () => button.style.backgroundColor = "#74EDDA");
});

// Adding functionality to buttons
resetButton.addEventListener("click", resetGrid);
rainbowButton.addEventListener("click", function() {
  rainbowMode = true;
  eraserMode = false;
});
opacityButton.addEventListener("click", () => opacityMode = true);
defaultButton.addEventListener("click", function() {
  rainbowMode = false;
  eraserMode = false;
});
clearButton.addEventListener("click", clearGrid);
eraserButton.addEventListener("click", function() {
  rainbowMode = false;
  eraserMode = true;
});

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

function activateMouseEnter() {
  squares.forEach( (square) => square.addEventListener("mouseenter", painting) );
}

function deactivateMouseEnter() {
  squares.forEach( (square) => square.removeEventListener("mouseenter", painting) );
}

function activateClickPainting() {
  squares.forEach( (square) => square.addEventListener("mousedown", painting));
}

function painting() {
  if (rainbowMode) {
    if (this.style.backgroundColor === "" || this.style.backgroundColor === "black") {
      this.style.backgroundColor = "#" + randomColor();
    } 
  }
  else if (eraserMode) {
    this.style.backgroundColor = "";
  }
  else {
    this.style.backgroundColor = "black";
  }

  if (opacityMode) {
    if (this.style.opacity === "") {
      this.style.opacity = 0.1;
    }
    else if (Number(this.style.opacity) <= 0.9) {
      let opacityNumber = Number(this.style.opacity);
      opacityNumber += 0.1;
      this.style.opacity = opacityNumber;
    }
  }
}

function addEvents() {
  squares.forEach( (square) => square.addEventListener("mousedown", () => {
    activateClickPainting();
    activateMouseEnter(); }) );
  squares.forEach( (square) => square.addEventListener("mouseup", deactivateMouseEnter) );
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
  squares.forEach( square => square.style.backgroundColor = "" );
}

// testing branch