const container = document.querySelector(".container");
const row = [];
const square = [];
const resetButton = document.querySelector(".resetButton");
let dimensions = 16;

// Creating rows
for (let i = 0; i < dimensions; i++) {
  row[i] = document.createElement("div");
  row[i].style.display = "flex";
  container.appendChild(row[i]);
  square[i] = [];
  // Creating squares
  for (let j = 0; j < dimensions; j++) {
    square[i][j] = document.createElement("div");
    square[i][j].style.border = "1px solid black";
    square[i][j].style.width = "80px";
    square[i][j].style.height = "80px";
    square[i][j].style.margin = "1px";
    square[i][j].addEventListener("mouseover", () => square[i][j].style.backgroundColor = "red");
    row[i].appendChild(square[i][j]);
  }
}

// Reset button
resetButton.addEventListener("click", () => dimensions = prompt("Enter dimensions of the grid:"));
resetButton.addEventListener("mouseover", () => resetButton.style.backgroundColor = "#F0AB6C");
resetButton.addEventListener("mouseout", () => resetButton.style.backgroundColor = "#74EDDA");