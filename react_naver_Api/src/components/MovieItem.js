import React from 'react';
import './MovieItem.scss';

const MovieItem = ({ item }) => {
    const {
        title,
        link,
        image,
        pubDate,
        director,
        // actor,
        userRating
    } = item;

    const title_1 = title.replace(/<[^>]*>?/g, '');

    return (
        <div className='movie'>
            {image && (
                <div className='thumbnail'>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <img src={image} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        {title_1}
                    </a>
                </h2>
                <p>감독 : {director}</p>
                <p>개봉 : {pubDate}</p>
                <p>평점 : {userRating}</p>
                {/* <p>배우 : {actor}</p> */}
            </div>
        </div>
    );
};

export default MovieItem;