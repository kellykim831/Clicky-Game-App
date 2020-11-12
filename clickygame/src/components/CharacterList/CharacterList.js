import React from 'react';

import './CharacterList.css';
import CharacterItem from '../CharacterItem';

const CharacterList = props => (
  <div className='container'>
    <div className='row'>
      {props.card.map((card, index) => (
        <CharacterItem key={card.id} imageClick={props.imageClick} card={card} />
      ))}
    </div>
  </div>
);

export default CharacterList;