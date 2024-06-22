import React from 'react';

import ReactMarkdown from 'react-markdown'

import 'styles/components/modelpost.sass'

const ModelPost = (props) => {
    return (
        <article className='container-modelPost'>
            <div className='cover-picture' style={{backgroundImage: `url('${props.coverPicture}')`}}>
                <h2>{props.title}</h2>
            </div>
            <div className='container-content'>
                <ReactMarkdown>
                    {props.children}
                </ReactMarkdown>
            </div>
        </article>
    )
}

export default ModelPost;
