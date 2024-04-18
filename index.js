const container = document.querySelector(".container");
const row = [];
const square = [];

// Creating rows
for (let i = 0; i < 16; i++) {
  row[i] = document.createElement("div");
  row[i].style.display = "flex";
  container.appendChild(row[i]);
  // Creating squares
  for (let j = 0; j < 16; j++) {
    square[j] = document.createElement("div");
    square[j].style.border = "2px solid black";
    square[j].style.width = "80px";
    square[j].style.height = "80px";
    square[j].style.margin = "5px";
    row[i].appendChild(square[j]);
  }
}

