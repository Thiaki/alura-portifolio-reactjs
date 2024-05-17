import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt='' />
            <h3>{props.children}</h3>
            <button><a href='https://google.com'>Ler</a></button>
        </div>
    )
}

export default Card;
