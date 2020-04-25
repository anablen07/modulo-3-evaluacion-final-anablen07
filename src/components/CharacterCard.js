import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
    const { img, name, species } = props
    return (
        <div className='character-card'>
            <img src={img} alt={name} />
            <p className='name-card'>{name}</p>
            <p className='species-card'>{species}</p>
        </div>

    )
}

CharacterCard.propTypes = {

    img: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
}

export default CharacterCard;

