import React from 'react';

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
                    <img src='https://s3-alpha-sig.figma.com/img/e8c8/7c35/ee20e9c33d31057c398f07dd3d71f3f9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZbhA1R-e3UtiD7Y4OyYiJ5dlMIqBY~1kYLn4fR0qVetV59DLY3Y3cgyOQz~-XP6bGoInQJ80LTZ~lFon9gVyPzrhDzgsSaj3hgDs0XZW~~j4fQztA~8-IVnF1qYzqHXc1glXj1qAOCYU7iGbQzYCVsAMmRv97MYQEuO-utzKYSTmcmFVoe1-l08FUm6FEODb3L9uPSKJ6~tdfBsVP3TtOTVyvqPvghdmk58oG3emSV4Wa596NcUeJMwD1IS825xJxYdmjp1zo~F66xn0iQA2OsOquKUKL-26KYw5rThmYWfVlWD7bgujT93PeABVF8goKQoliTgK5hQy0FZVwQ3UPw__' alt='' />
                </div>
                <div className='profile'>
                    <img src='https://github.com/Thiaki.png' alt='perfil' />
                </div>
            </div>
        </div>
    )
}

export default Banner;
