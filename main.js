import Feel from './feel/feel.js';
import Root from './feel/main.js';
import CardList from './Components/CardList.js';
import ClassesInfos from './Components/ClassesInfos.js';

/* document.onchange = () => {
    Root(Feel.createElement('div', {
            id: "card-container"
        },
        b
    )).render();
} */

Root(Feel.createElement('div', {
        id: "card-container"
    },
    CardList(ClassesInfos.getAll())
)).render();
