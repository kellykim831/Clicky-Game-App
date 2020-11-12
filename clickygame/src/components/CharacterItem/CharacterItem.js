import React from 'react';

import './CharacterItem.css';

const CharacterItem = props => (
    <div
        onClick={() => props.imageClick(props.card.id)}
        className='card-box col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2'
    >
        <div className='img-container'>
            <img
                title={props.card.name}
                alt={props.card.name}
                src={props.card.image}
                className='img-thumbnail'
            />
        </div>
    </div>
);

export default CharacterItem;