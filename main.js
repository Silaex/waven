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

const targets = document.querySelectorAll('.card');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        console.log(entries)
        entries.forEach(entry => {
            console.log('😍');

            if (entry.isIntersecting) {
                entry.target.classList.add('visible')

                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });

    io.observe(target)
};

targets.forEach(target => lazyLoad(target))