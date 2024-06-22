import React, { useEffect, useState } from 'react';

import image1 from 'images/Cards/Foto 1.png'
import image2 from 'images/Cards/Foto 2.png'
import image3 from 'images/Cards/Foto 3.png'
import image4 from 'images/Cards/Foto 4.png'
import image5 from 'images/Cards/Foto 5.png'
import image7 from 'images/Cards/Foto 7.png'
import image6 from 'images/Cards/Foto 6.png'
import image8 from 'images/Cards/Foto 8.png'

import Card from './Card';
import 'styles/components/cards.sass';

import postsJson from 'json/posts.json';

const Cards = () => {

    const images = [
        {
            id: 1,
            src: image1,
        },
        {
            id: 2,
            src: image2,
        },
        {
            id: 3,
            src: image3,
        },
        {
            id: 4,
            src: image4,
        },
        {
            id: 5,
            src: image5,
        },
        {
            id: 6,
            src: image6,
        },
        {
            id: 7,
            src: image7,
        },
        {
            id: 8,
            src: image8,
        },
    ]

    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(postsJson)
    }, [])

    
    return (
        <section className='container-cards'>
            {cards.map((card) => {
                const image = images.find((image) => image.id === card.id)
                return <Card key={card.id} id={card.id} image={image.src}>{card.titulo}</Card>
            })}
        </section>
    )
}

export default Cards;
