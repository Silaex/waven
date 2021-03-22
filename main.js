import Feel from './lib/feel/feel.js';
import Root from './lib/feel/main.js';
import CardList from './Components/Card/CardList.js';
import ClassesInfos from './Components/ClassesInfos.js';
import State from './lib/leive.js';
import Homepage from './Components/Homepage/Homepage.js';

State.addState("page_name", "Characters");

function start(elements) {
    Root.render(elements);
}
const Pages = {
    Characters: Feel.createElement('div', {
            id: "card-container"
        },
        CardList(ClassesInfos.getAll())
    ),
    Homepage: Homepage()
}

function pageUpdate() {
    start(Pages[State.getState("page_name")])
}

pageUpdate();

State.subscribe(pageUpdate);

State.dispatch("page_name", "Homepage")
