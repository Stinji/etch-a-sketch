const gridContainer = document.querySelector('.grid-container');
const newGrid = document.getElementById('new-grid');

createGrid(16);

function clearPreviousGrid() {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square')
            square.setAttribute('style', `height: ${100 / gridSize}%; width: ${100 / gridSize}%;`);
            square.addEventListener('mouseenter', (e) => {
                e.target.style.background = 'black';
            });
            gridContainer.appendChild(square);
        }
    }
}

newGrid.addEventListener('click', function createNewGrid() {
    let gridSize = prompt('Enter an integer between 1 and 100:');
    if (gridSize === null) {
        alert('Cancelled');
    } else if (gridSize < 1 || gridSize > 100 || gridSize % 1 !== 0 || !parseInt(gridSize)) {
        alert('Please only enter an integer between 1 and 100');
        createNewGrid();
    } else {
        clearPreviousGrid();
        createGrid(gridSize);
    }
});

const solid = document.getElementById('solid');
const random = document.getElementById('random');
const grayscale = document.getElementById('grayscale');
const eraser = document.getElementById('eraser');
const colorButton = document.getElementById('color-button');
const hover = document.getElementById('hover');
const click = document.getElementById('click');
const trash = document.getElementById('trash');

solid.addEventListener('click', () => {
    solid.style.background = '#1a73e859';
});
random.addEventListener('click', () => {
    random.style.background = '#1a73e859';
});
grayscale.addEventListener('click', () => {
    grayscale.style.background = '#1a73e859';
});
eraser.addEventListener('click', () => {
    eraser.style.background = '#1a73e859';
});

hover.addEventListener('click', () => {
    hover.style.background = '#1a73e859';
});
click.addEventListener('click', () => {
    click.style.background = '#1a73e859';
});
trash.addEventListener('click', () => {
    trash.style.background = '#1a73e859';
});