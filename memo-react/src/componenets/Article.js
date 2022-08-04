import { useParams } from 'react-router-dom';

import React from 'react';

const Article = () => {
    const {id} =useParams("");
    return (
        <div>
            <h2>뭘까 {id}</h2>
        </div>
    );
};

export default Article;