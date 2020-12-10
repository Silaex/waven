import Feel from '../feel/feel.js';

const Card = function ({ name, image, logo, color } = {}) {

    return (Feel.createElement('div', { className: "card" }, 
            [
                Feel.createElement('div', { className: `info ${color}` }, 
                    [
                        Feel.createElement('div', { className: "name" }, [
                            Feel.createElement('img', { className: `aside-logo black-shadow`, src: logo, loading: "lazy" }),
                            name
                        ]),
                        Feel.createElement('img', { className: `logo black-shadow`, src: logo, loading: "lazy" })
                    ]
                ),
                Feel.createElement('div', { className: "image" }, 
                    Feel.createElement('img', { src: image, alt: name, loading: "lazy" })
                )
            ]
        )
    );
}

export default Card;