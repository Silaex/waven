import createElement from './Elements/createElement.js';

const Feel = function() {}

Feel.createElement = createElement;

/**
 * @description Add a stylesheet to head
 * @param {String} path 
 */
Feel.addStylesheet = function(path) {
    const style = document.createElement("link")
    style.href = path;
    style.rel = "stylesheet";
    document.head.appendChild(style);
}

export default Feel;