// Function to create a grid of arbitrary size
function createGrid(size, parentDiv) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-cell");

            square.addEventListener("mouseover", () => paint(square));

            column.appendChild(square);
        }

        parentDiv.appendChild(column);
    }
}

// Function to paint cells
function paint(element) {
    element.classList.add("painted");
}

// Create initial grid after page load
const initialGridSize = 16;
const container = document.querySelector(".grid-container");

createGrid(initialGridSize, container);

// Reset Functionality
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".painted");
    cells.forEach((cell) => cell.classList.remove("painted"));
});
