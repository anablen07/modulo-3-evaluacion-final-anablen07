import React from 'react';

const CharacterDetail = (props) => {
    return (
        <div className="character-detail">

            <p>{props.characterObject.name}</p>
            <img src={props.characterObject.image} alt={props.characterObject.name}></img>
            <p>{props.characterObject.species}</p>
            <p>{props.characterObject.origin.name}</p>
            <p>{props.characterObject.status}</p>
            <p>{props.characterObject.episode.length}</p>

        </div>
    )
}

export default CharacterDetail;