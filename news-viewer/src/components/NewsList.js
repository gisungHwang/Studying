import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Newsitem from './Newsitem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom:3rem;
    width: 768px;
    margin: 0 auto;
    margin-top : 2rem;
    @media screen and (max-width: 768px) {
        width:100%;
        padding-left: 1rem;
        padding-right : 1rem;
    }
    `;
    
    // const sampleArticle= {
    //     title:'제목',
    //     description:'내용',
    //     url:'https://google.com',
    //     urlToImage:'https://via.placeholder.com/160',
    // };

    
    // const NewsList = () => {
    //     return (
    //         <NewsListBlock>
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //             <Newsitem article={sampleArticle} />
    //         </NewsListBlock>
    //         );
    //     };
    const NewsList= ({category}) => {
        const [articles, setArticles] = useState(null);
        const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=09d662acf71a45e5849e38b5604f6020`,
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    
    if(loading) {   
        return <NewsListBlock> 로딩 중...</NewsListBlock>;
    }

    if(!articles) {     //아직 articles값이 설정되지 않았을 경우
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <Newsitem key={article.url} article={article}/>
                ))}
        </NewsListBlock>
    );
            };
export default NewsList;