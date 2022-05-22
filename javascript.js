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
        if (!element.classList.contains($className)) {
            element.classList.add(className);
        };
    })
}

function removeClass(cssSelector, className) {
    const elements = document.querySelectorAll(`${cssSelector}`);
    elements.forEach(element => {
        if (element.classList.contains($className)) {
            element.classList.remove(className);
        };
    })
}