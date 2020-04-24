import React from 'react';

const CharacterCard = (props) => {

    return (
        <div className='character-card'>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.species}</p>
        </div>
      
    )
}

export default CharacterCard;