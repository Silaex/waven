/**
 * @description Fonction de création d 'element HTML
 * @param {HTMLElement} type 
 * @param {HTMLElement} props 
 * @param {HTMLElement[]} childrens 
 */
const createElement = function createElement(type, props, childrens = []) {
    const element = document.createElement(type);
    if (!props) props = {};

    for (const [key, value] of Object.entries(props)) {
        if (key !== "style") {
            element[key] = value;
        } else {
            for (const [a, b] of Object.entries(value)) {
                let v = b
                if (b > 0 && !Number.isNaN(b)) v = `${v}px`
                element.style[a] = v;
            }
        }
    }
    if (childrens) {
        if (!Array.isArray(childrens)) childrens = [childrens]
        childrens.forEach(children => {
            element.append(children)
        })
    }
    return element;
}

export default createElement;