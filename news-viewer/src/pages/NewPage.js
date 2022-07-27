import {useParams} from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPage = () => {
    const params = useParams();
    const category = params.category || 'all';  // params.category에서 카테고리가 나타내는 것은 Categories.js에서의 카테고리를 나타냄

    return (
        <>  
        <Categories />
        <NewsList category={category} />
            
        </>
    );
};

export default NewPage;