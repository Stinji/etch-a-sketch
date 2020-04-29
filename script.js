const gridContainer = document.querySelector('.grid-container');
const newGrid = document.getElementById('new-grid');
const styleMenu = document.getElementById('style-menu');
const btnsContainer = document.getElementById('style-container');
let styleChoice = 'solid';
let applyStyle = 'mouseenter';

let handler = function (e) {
    if (styleChoice !== 'grayscale' && e.target.style.opacity !== '1') e.target.style.opacity = '';
    if (styleChoice === 'random') e.target.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    else if (styleChoice === 'eraser') e.target.style.background = '#fff';
    else {
        e.target.style.background = '#000';
        if (styleChoice === 'grayscale') {
            let currentLevel = Number(e.target.style.opacity);
            if (currentLevel === 1) return;
            e.target.style.opacity = currentLevel += 0.1;
        }
    }
    removeEventListener(applyStyle, handler);
}

function clearGrid() {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `height: ${100 / gridSize}%; width: ${100 / gridSize}%; opacity: 1`);
        gridContainer.appendChild(square);
    }
    addSelectedStyle();
}

createGrid(16);

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

function addSelectedStyle() {
    gridContainer.childNodes.forEach(square => {
        if (square.style.opacity === '1') square.style.opacity = '';
        square.addEventListener(applyStyle, handler);
    });
}

document.querySelector('.container-left').childNodes.forEach(child => child.addEventListener('click', (e) => {
    styleChoice = e.target.id;
    addSelectedStyle();
}));

document.querySelector('.container-right').childNodes.forEach(child => child.addEventListener('click', (e) => {
    if (e.target.id === 'trash') {
        gridContainer.childNodes.forEach(square => square.style.background = '#fff');
    }
    else {
        console.log('not trash');
    }
}));

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