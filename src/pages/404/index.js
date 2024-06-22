import React from 'react';

import { useNavigate } from 'react-router-dom';
import 'styles/pages/error.sass'

import image from 'images/unsplash_XtUd5SiX464.png'

const Error404 = () => {

    const navigate = useNavigate();

    return (
        <main>
            <div className='container'>
                <h1>404</h1>
                <h3>Ops! Página não encontrada.</h3>
                <p>Tem certeza de que era isso que você estava procurando? <br /> Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <img src={image} alt=''/>
                <br />
                <button onClick={() => navigate(-1)}>Voltar</button>
            </div>
        </main>
    )
}

export default Error404;
