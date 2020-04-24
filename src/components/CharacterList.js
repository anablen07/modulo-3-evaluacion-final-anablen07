import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

const CharacterList = (props) => {
    return (
       
        <ul>
         <div className='character-list'>
            {props.results
                .filter(characterObject => props.inputValue === '' || characterObject.name.toLowerCase().includes(props.inputValue.toLowerCase()))
                .sort(function(a, b){
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                })
                .map(characterObject =>
                    <li key={characterObject.id}>
                       <Link to={`/character/${characterObject.id}`}>
                       <div className="character-list_items">
                            <CharacterCard
                                img ={characterObject.image}
                                name={characterObject.name}
                                species={characterObject.species}
                            />
                        </div>    
                       </Link> 
                    </li>
                )}
            </div>
        </ul>
    )
}

export default CharacterList;