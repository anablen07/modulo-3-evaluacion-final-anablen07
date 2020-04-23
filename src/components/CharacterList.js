import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList =(props) =>{
    return(
        <ul className='character-list'>
            <h1>Rick and Morty</h1>
            {props.results
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