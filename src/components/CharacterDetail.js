import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {

    const { image, name, status, species } = props.characterObject;

    return (

        <div className="character-detail">
            <div className="character-detail-button">
                <Link to="/"><button className="btn">Volver</button>
                </Link>
            </div>
            <div className="character-detail_image">
                <img src={image} alt={name}></img>
            </div>
            <div className="character-detail_text">
                <p className="name-detail">{name}</p>
                <p className="status">status: {status + ' '}
                    {(status === 'Dead')
                        ? <i class="fas fa-skull-crossbones"></i>
                        : <i class="fas fa-heartbeat"></i>}
                </p>
                <p>species: {species + ' '}
                    {(species === 'Human')
                        ? <i class="far fa-laugh"></i>
                        : <i class="fab fa-optin-monster"></i>}
                </p>
                <p className="origin">origin: {props.characterObject.origin.name}</p>
                <p className="episode">episodes: {props.characterObject.episode.length}</p>
            </div>

        </div>
    )
}

CharacterDetail.propTypes = {
    
    name: PropTypes.string,
    image: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.string,

}
export default CharacterDetail;