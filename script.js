const newGrid = document.getElementById('new-grid');
const gridContainer = document.querySelector('.grid-container');


let gridSize = 16;
createGrid();

function removeGrid() {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

function createGrid() {
    const widthHeight = 100 / gridSize;
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            const addSquare = document.createElement('div');
            addSquare.classList.add('grid-square');
            addSquare.setAttribute('style', `height: ${widthHeight}%; width: ${widthHeight}%`)
            gridContainer.appendChild(addSquare);
        }
    }
}

newGrid.addEventListener('click', function createNewGrid() {
    gridSize = parseFloat(prompt('Enter an integer between 1 and 128'));
    if (gridSize < 1 || gridSize > 128 || gridSize % 1) {
        alert('Please only enter an integer between 1 and 128.\n');
        return createNewGrid();
    } else if (isNaN(gridSize)) {
        return alert('Cancelled');
    } else {
        removeGrid();
        createGrid();
    }
});

const gridSquare = document.querySelector('.grid-container>div');
const allSquares = document.querySelectorAll('.grid-container>div');
allSquares.forEach((gridSquare) => {
    console.log(gridSquare);
})