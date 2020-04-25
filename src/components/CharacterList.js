import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
    const { results, inputValue } = props;
    return (

        <ul>
            <div className='character-list'>
                {results
                    .filter(characterObject => inputValue === '' || characterObject.name.toLowerCase().includes(inputValue.toLowerCase()))
                    .sort(function (a, b) {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    })
                    .map(characterObject =>
                        <li key={characterObject.id}>
                            <Link to={`/character/${characterObject.id}`}>
                                <div className="character-list_items">
                                    <CharacterCard
                                        img={characterObject.image}
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

CharacterList.propTypes = {

    img: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    results: PropTypes.array,
    inputValue: PropTypes.string
}

export default CharacterList;