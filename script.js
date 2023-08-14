// Function to create a grid of arbitrary size
function createGrid(size, parentDiv) {
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("grid-column");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("grid-cell");
      square.setAttribute("data-color", 0);

      square.addEventListener("mouseover", () => paint(square));

      column.appendChild(square);
    }

    parentDiv.appendChild(column);
  }
}

// Function to paint cells
function paint(element) {
  const darkness = element.getAttribute("data-color");
  element.style.background = `hsla(0, 0%, ${100 - 10 * +darkness}%, 1)`;
  element.setAttribute("data-color", Math.min(+darkness + 1, 10));
}

function changeGridSize() {
  const newSize = prompt("What grid size would you like?");

  if (isNaN(+newSize) || +newSize < 0 || +newSize > 100) {
    console.error("That was not a valid input!");
    const error = document.querySelector(".error");
    error.textContent = "You must input a number between 0 and 100.";
  }

  const container = document.querySelector(".grid-container");
  container.replaceChildren();

  document.documentElement.style.setProperty("--grid-size", +newSize);

  createGrid(+newSize, container);
}

// Create initial grid after page load
const initialGridSize = 16;
const container = document.querySelector(".grid-container");

createGrid(initialGridSize, container);

// Reset Functionality
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => location.reload());

// Change grid size functionality
const newGridButton = document.querySelector("#change-size");
newGridButton.addEventListener("click", changeGridSize);
