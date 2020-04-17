const gridContainer = document.getElementById('grid-container');

addGrid();

function addGrid() {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const addSquare = document.createElement('div');
            addSquare.classList.add('square');
            gridContainer.appendChild(addSquare);
        }
    }
}