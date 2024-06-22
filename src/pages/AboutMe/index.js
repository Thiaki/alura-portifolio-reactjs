import React from 'react';
import ModelPost from 'components/ModelPost';

import backgroundImage from 'images/Rectangle 17.png'

function AboutMe() {
    
    const textAboutMe = `### Olá, meu nome é Eduardo! \n\n Esse é o meu trabalho sobre Routes no ReactJs pela Alura ![gif do logo da linguagem de programação python](https://github.com/Thiaki.png) \n\n **NÃO É UMA PÁGINA DE PORTIFÓLIO, CRIADA APENAS PARA TREINO**`

    return(
        <ModelPost
            coverPicture={backgroundImage}
            title="Sobre mim"
        >
            {textAboutMe}
        </ModelPost>
    )
}

export default AboutMe;
