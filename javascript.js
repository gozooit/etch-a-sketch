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

function addClassOne(cssSelector, className) {
    const element = document.querySelector(`${cssSelector}`);
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    };
}

function removeClass(cssSelector, className) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        };
    })
}

function addTile(tileId) {
    const container = document.querySelector('#container');
    const tile = document.createElement('div');
    tile.setAttribute('id', `${tileId}`);
    tile.classList.add('tile');
    container.appendChild(tile);
}

function createTileId(i) {
    let tileId;
    let x;
    let y;
    if (i <= 16) {
        tileId = `x${i}y1`;
    } else {
        x = i % 16;
        if (x === 0) {
            x = 16;
        }
        y = Math.ceil(i / 16);
        tileId = `x${x}y${y}`;
    };
    return tileId;
}

function addMouseoverClass(e) {
    // console.log(e.target.id);
    console.log(e);
    addClass(`#${e.target.id}`, 'mouseover');
}

function removeMouseoverClass(e) {
    console.log(e.target.id);
    removeClass(`#${e.target.id}`, 'mouseover');
}

for (i=1; i < (16 * 16) + 1; i++) {
    addTile(createTileId(i));
}

const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => tile.addEventListener('mouseover', addMouseoverClass));
tiles.forEach(tile => tile.addEventListener('mouseout', removeMouseoverClass));
