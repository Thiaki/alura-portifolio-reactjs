import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const params = useParams();

    return (
            <h1>Teste {params.id}</h1>
    )
}

export default Post;
