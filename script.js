const gridContainer = document.querySelector('.grid-container');
const newGrid = document.getElementById('new-grid');
const styleMenu = document.getElementById('style-menu');
const styleButtons = document.querySelector('.style-buttons');

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


styleMenu.addEventListener('click', () => {
    styleButtons.classList.toggle('style-buttons-flex');
});

const solid = document.getElementById('solid');
const random = document.getElementById('random');
const grayscale = document.getElementById('grayscale');
const eraser = document.getElementById('eraser');

solid.addEventListener('click', (e) => {
    alert(e)
});
random.addEventListener('click', selectStyle('random'));
grayscale.addEventListener('click', selectStyle('grayscale'));
eraser.addEventListener('click', selectStyle('eraser'));

function selectStyle() {
    
}