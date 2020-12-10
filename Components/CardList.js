import Card from './Card.js';

function CardList(charactersInfo) {
    if (!Array.isArray(charactersInfo)) throw new Error('CardList doit recevoir un tableau en paramètre');
    return (
        charactersInfo.map(characterInfo => Card(characterInfo))
    )
}

export default CardList;
