import React from 'react';
import './MovieItem.scss';

// const MovieItemBlock = styled.div`
//     display: flex;
//     .thumbnail {
//         margin-right: 1rem;
//         padding: 3rem;

//         img {
//             display: block;
//             width: 200px;
//             // height: 150%;
//             // object-fit: cover;
//         }
//     }

//     .contents {
//         // padding: 2rem;

//         h2 {
//             // margin: 0;
//             padding-top: 50px;

//             a {
//                 color: black;
//             }
//         }

//         p {
//             margin: 0;
//             line-height: 1.5;
//             margin-top: 0.5rem;
//             white-space: normal;
//         }
//     }

//     & + & {
//         margin-top: 3rem;
//     }
// `;

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
        // <MovieItemBlock>
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
        // </MovieItemBlock>
    );
};

export default MovieItem;