import React from 'react';

import mask from 'images/Mask group.svg'

import 'styles/components/banner.sass'

const Banner = () => {
    return(
        <div className='introduction'>
            <div className='container-text'>
                <div>
                    <h1>Olá, mundo!</h1>
                    <p>Boas vindas ao meu espaço pessoal! Eu sou Eduardo Thiaki, estudante de Front-end da Alura. Aqui compartilho meus estudos sobre a biblioteca React juntos com routes!</p>
                </div>
            </div>
            <div className='container-image'>
                <div className='circle'>
                    <img src={mask} alt='Mask' />
                </div>
                <div className='profile'>
                    <img src='https://github.com/Thiaki.png' alt='perfil' />
                </div>
            </div>
        </div>
    )
}

export default Banner;
