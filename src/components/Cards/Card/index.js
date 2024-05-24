import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={`/posts/${props.id}`}>
            <div className='card'>
                <img src={props.image} alt='' />
                <h3>{props.children}</h3>
                <button>Ler</button>
            </div>
        </Link>
    )
}

export default Card;
