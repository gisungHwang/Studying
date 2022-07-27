import {useState, useCallback, Component} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewPage';
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async() => {
//     try{
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apikey=09d662acf71a45e5849e38b5604f6020',
//       );
    
//     // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {              //get메소드가 성공하게되면 .then을 실행 
//       setData(response.data);      
//     } catch(e){
//       console.log(e);
//   }
//   };
//   return (
//     <div>
//     <div>
//       <button onClick={onClick}> 불러오기 </button>  
//     </div>
//     {data && <textarea row={7} value={JSON.stringify(data, null, 4)} readOnly={true} />}    {/* //data가 트루일경우 뒷부분 실행, srtingify는 객체형식의 데이터를 json형식의 문자로 변경 */}
    
//     </div>
//   );
// };

// export default App;

//----------------------------------------------383p---------------------
// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//   <>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}/>
//   </>
//   );
// };

// export default App;
//--------------------------------------------------------------

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;