const gridContainer = document.querySelector('.grid-container');
const newGrid = document.getElementById('new-grid');
const styleMenu = document.getElementById('style-menu');
let styleChoice = 'random';

createGrid(16);

function addSelectedStyle() {
    if (styleChoice === 'random') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        }));
    } else if (styleChoice === 'grayscale') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            if (!e.target.style.backgroundColor) {
                return e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            }
            else if (e.target.style.backgroundColor === 'rgb(0, 0, 0)') {
                return;
            }
            else {
                currentOpacity = parseFloat(e.target.style.backgroundColor.slice(-4, -1));
                return e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity += 0.1})`;
            }
        }));
    } else if (styleChoice === 'eraser') {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'white';
        }));
    } else {
        gridContainer.childNodes.forEach(child => child.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'black';
        }));
    }
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `height: ${100 / gridSize}%; width: ${100 / gridSize}%; border: 1px solid #d1d1d1;`);
        gridContainer.appendChild(square);
    }
    addSelectedStyle();
}

function clearGrid() {
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

function promptSize() {
    let gridSize = prompt('Enter an integer between 1 and 100:');
    if (gridSize === null) {
        alert('Cancelled');
    } else if (gridSize < 1 || gridSize > 100 || gridSize % 1 !== 0 || !parseInt(gridSize)) {
        alert('Please only enter an integer between 1 and 100');
        promptSize();
    } else {
        clearGrid();
        createGrid(gridSize);
    }
}

newGrid.addEventListener('click', () => { promptSize() });

function changeStyle(styleChoice, e) {
    if (styleChoice === 'solid') {
        return e.target.style.background = 'black';
    } else if (styleChoice === 'random') {
        console.log('random' + styleChoice);
    } else if (styleChoice === 'grayscale') {
        return console.log(e.target.style.cssText);
    } else {
        console.log('eraser' + styleChoice);
    }
}

styleArray = Array.prototype.slice.call(document.querySelector('.container-left').children);
styleArray.forEach(child => {
    child.addEventListener('click', (e) => {
        styleChoice = e.target.id;
        changeStyle(styleChoice);
    })
});

//switch statement styleChoice