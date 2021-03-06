function addAttribute(cssSelector, attribute, value=false) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (!element.hasAttribute(attribute)) {
            if (!value) {
                element.setAttribute(`${attribute}`);
            } else {
                element.setAttribute(`${attribute}`, value);
            };
        };
    })
}

function removeAttribute(cssSelector, attribute) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (element.hasAttribute(attribute)) {
            element.removeAttribute(`${attribute}`);
        };
    })
}

function addClass(cssSelector, className) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        };
    })
}

function removeClass(cssSelector, className) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        };
    })
}


//
//
// above is just maybe usefull classes
//
//


function addTile(tileId) {
    const container = document.querySelector('#container');
    const tile = document.createElement('div');
    tile.setAttribute('id', `${tileId}`);
    tile.classList.add('tile');
    container.appendChild(tile);
}

function createTileId(i, size) {
    let tileId;
    let x;
    let y;
    if (i <= size) {
        tileId = `x${i}y1`;
    } else {
        x = i % size;
        if (x === 0) {
            x = size;
        }
        y = Math.ceil(i / size);
        tileId = `x${x}y${y}`;
    };
    return tileId;
};

function createGrid(size) {
    for (i=1; i < (size * size) + 1; i++) {
        addTile(createTileId(i, size));
    };
    const tileSize = 80 / size;
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.style.width = `${tileSize}em`;
        tile.style.height = `${tileSize}em`;
    })
};

function addMouseoverClass(e) {
    // console.log(e.target.id);
    addClass(`#${e.target.id}`, 'mouseover');
};

function setRandomColor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.background = `#${randomColor}`;
}

function createSizeOption() {
    const select = document.querySelector('select');
    let size;
    for (i = 4; i <= 80; i=i+4) {
        size = document.createElement('option');
        size.setAttribute('id', `grid${i}x${i}`)
        size.setAttribute('value', `${i}`);
        size.textContent = `${i} x ${i}`;
        select.appendChild(size);
    };
}

function refreshGrid(e) {
    // console.log(this.value);
    // delete all element in container
    const container = document.querySelector('#container');
    container.innerHTML = '';
    createGrid(parseInt(this.value));
    // this.value = la valeur selectionnee dans l'evenement
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => tile.addEventListener('mouseover', setRandomColor));   
}

createSizeOption();
createGrid(16);

const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => tile.addEventListener('mouseover', setRandomColor));
// tiles.forEach(tile => tile.addEventListener('mouseover', addMouseoverClass));

const sizeList = document.querySelector('#size-list');
sizeList.addEventListener('change', refreshGrid);
