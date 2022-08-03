import { useParams } from 'react-router-dom';

import React from 'react';

const Article = () => {
    const {id} =useParams();
    return (
        <div>
            <h2>게시글 {id}</h2>
        </div>
    );
};

export default Article;