import Feel from './feel.js';

const Root = function (elements) {
    
    function render() {
        document.body.appendChild(
            Feel.createElement('div', {
                    id: "root"
                },
                elements
            )
        );
    }

    return { render }
}

export default Root;