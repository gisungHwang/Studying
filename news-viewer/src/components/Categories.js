import styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom'; //NavLink는 스타일을 줄 수 있음

const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비지니스'
    },
    {
        name:'entertainment',
        text:'엔터테이먼트'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    }    
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
    `;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    
    &:hover {
        color: red;
    }

    &.active{
        font-weight:600;
        border-bottom: 2px solid skyblue;
        color: gold;
        &:hover {
            color: green;
        }
    }

    & + & {  
        margin-left:1rem;
        }
    `;

    const Categories = () => {
        return (
            <CategoriesBlock>
                {categories.map(c => (    //c는 caregories안의 항목을 나타냄
                    <Category 
                    key={c.name}
                    className={({isActive}) => (isActive ? 'active' : undefined)}
                    to = {c.name === 'all' ? '/' : `${c.name}`}
                    >
                        {c.text}
                        </Category>
                ))}
            </CategoriesBlock>
        );
    };

export default Categories;






//    ${props =>
//         props.active && css`
//         font-weight: 600;
//         border-bottom: 2px solid #22b8cf;
//         color: #22b8cf;
//         &:hover {
//             color:#3bc9db;
//         }
//     `}