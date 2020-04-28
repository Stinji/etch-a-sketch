const gridContainer = document.querySelector('.grid-container');
const newGrid = document.getElementById('new-grid');
const styleMenu = document.getElementById('style-menu');
const btnsContainer = document.getElementById('style-container');
let styleChoice = 'solid';

createGrid(16);

function clearGrid() {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `height: ${100 / gridSize}%; width: ${100 / gridSize}%;`);
        gridContainer.appendChild(square);
    }
    addSelectedStyle(styleChoice);
}

function promptSize() {
    let gridSize = prompt('Enter an integer between 1 and 50:');
    if (gridSize === null) {
        alert('Cancelled');
    } else if (gridSize < 1 || gridSize > 50 || gridSize % 1 !== 0 || !parseInt(gridSize)) {
        alert('Please only enter an integer between 1 and 50');
        promptSize();
    } else {
        clearGrid();
        createGrid(gridSize);
    }
}

newGrid.addEventListener('click', () => { promptSize() });

styleMenu.addEventListener('click', () => {
    if (btnsContainer.style.display === 'none' || btnsContainer.style.display === '') {
        btnsContainer.style.display = 'flex';
    } else {
        btnsContainer.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'style-container' || e.target.offsetParent.id === 'style-container' || e.target.id === 'style-menu') {
        return
    }
    btnsContainer.style.display = 'none';
});

document.querySelector('.container-left').childNodes.forEach(child => child.addEventListener('click', (e) => {
    styleChoice = e.target.id;
    return addSelectedStyle(styleChoice);
}));

function addSelectedStyle(styleChoice) {

}

function addSelectedStyle(styleChoice) {
    if (styleChoice === 'random') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        }));
    } else if (styleChoice === 'grayscale') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = '#000';
            let currentLevel = Number(e.target.style.opacity);
            if (currentLevel === 1) {
                return;
            }
            e.target.style.opacity = currentLevel + 0.1;
        }));
    } else if (styleChoice === 'eraser') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = '#fff';
        }));
    } else {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = '#000';
        }));
    }
}