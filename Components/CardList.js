import Card from './Card.js';
import LazyLoad from './../IntersectionObserver.js';

function CardList(charactersInfo) {
    if (!Array.isArray(charactersInfo)) throw new Error('CardList doit recevoir un tableau en paramètre');
    return (
        charactersInfo.map(characterInfo => {
            const card = Card(characterInfo)
            LazyLoad(card)
            return card
        })
    )
}

export default CardList;
