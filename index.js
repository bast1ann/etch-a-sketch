const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".buttons-container button")
const resetButton = document.querySelector(".resetButton");
const rainbowButton = document.querySelector(".rainbowButton");
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
rainbowButton.addEventListener("click", toggleRainbow);
opacityButton.addEventListener("click", toggleOpacity);
clearButton.addEventListener("click", clearGrid);
eraserButton.addEventListener("click", toggleEraser);

// Initial state
createSquares(nRows);
addEvents();

// Create squares
function createSquares(dimensions) {
  const squareSize = (container.offsetHeight) / dimensions;
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

function toggleRainbow() {
  rainbowMode = !rainbowMode;
    if (rainbowMode === true) {
    rainbowButton.textContent = "Rainbow Mode ON";
  }
  else {
    rainbowButton.textContent = "Rainbow Mode OFF";
  }
}

function toggleOpacity() {
    opacityMode = !opacityMode;
  if (opacityMode === true) {
    opacityButton.textContent = "Opacity Mode ON";
  }
  else {
    opacityButton.textContent = "Opacity Mode OFF";
  }
}

function toggleEraser() {
  eraserMode = !eraserMode;
  if (eraserMode === true) {
    eraserButton.textContent = "Eraser ON";
  }
  else {
    eraserButton.textContent = "Eraser OFF";
  }
  if (rainbowMode === true) {
    toggleRainbow();
  }
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
  else {
    this.style.opacity = 1;
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

function resetGrid() {
  do {
    nRows = prompt("Enter dimensions of the grid:");
  } while (nRows > 100);
  squares.forEach( square => square.remove() );
  createSquares(nRows);
  addEvents();
}

function clearGrid() {
  squares.forEach( (square) => {
    square.style.backgroundColor = "";
    square.style.opacity = "";
  });
}