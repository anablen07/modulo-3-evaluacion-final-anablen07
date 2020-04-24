import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetail = (props) => {


    return (
       
        <div className="character-detail"> 
           <div className="character-detail-button"> 
           <Link to="/"><button className="btn">Volver</button>
           </Link>
           </div>
            <div className="character-detail_image">
                <img src={props.characterObject.image} alt={props.characterObject.name}></img>
            </div>
            <div className="character-detail_text">
                <p className="name-detail">{props.characterObject.name}</p>
                <p className="status">status: {props.characterObject.status + ' '}
                {(props.characterObject.status === 'Dead')
                ? <i class="fas fa-skull-crossbones"></i>
                : <i class="fas fa-heartbeat"></i>}
                </p>
                 <p>species: {props.characterObject.species + ' '}
                    {(props.characterObject.species === 'Human')
                    ? <i class="far fa-laugh"></i>
                    : <i class="fab fa-optin-monster"></i>}
                 </p>
                <p className="origin">origin: {props.characterObject.origin.name}</p>
                <p className="episode">episodes: {props.characterObject.episode.length}</p>
            </div>

        </div>
    )
}

export default CharacterDetail;