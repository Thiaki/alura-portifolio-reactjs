import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import ModelPost from 'components/ModelPost';
import DefaultPage from 'components/DeafaultPage';
import Error404 from 'pages/404';

import postJson from 'json/posts.json'
import backgroundImage from 'images/Rectangle 17.png' 

const Post = () => {
    const params = useParams();

    const post = postJson.find(post => post.id === Number(params.id))

    if (!post) {
        return <Error404 />
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage/>}>
                <Route index element={<ModelPost title={post.titulo} coverPicture={backgroundImage}>{post.texto}</ModelPost>} />
            </Route>
        </Routes>
    )
}

export default Post;
