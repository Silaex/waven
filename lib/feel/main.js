import Feel from './feel.js';

const Root = function (elements) {
    
    function render(elements) {
        const rootNode = document.getElementById("root");
        while (rootNode.firstChild) {
            rootNode.removeChild(rootNode.lastChild);
        }
        rootNode.append(elements);
    }

    document.body.appendChild(
        Feel.createElement('div', {
            id: "root"
        })
    )

    return { render }
}

export default Root();