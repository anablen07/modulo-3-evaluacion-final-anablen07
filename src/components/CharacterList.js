import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    return (
        <ul className='character-list'>
            <h1>Rick and Morty</h1>
            {props.results
                .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()))
                .map(characterObject =>
                    <li key={characterObject.id} >
                        <CharacterCard
                            name={characterObject.name}
                            img={characterObject.image}
                            species={characterObject.species}
                        />
                    </li>
                )}
        </ul>
    )
}





export default CharacterList;