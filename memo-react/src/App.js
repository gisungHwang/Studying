import logo from './logo.svg';
import './App.css';
// import ScrollTop from './components/ScrollTop';
import {Route, Routes } from 'react-router-dom';
import Test1 from './componenets/Test1';
import Test1_1 from './componenets/Test1_1';
import Test2 from './componenets/Test2';
import Test3 from './componenets/Test3';
import Test4 from './componenets/Test4';
import Test5 from './componenets/Test5';
import  Project  from './componenets/Project';
import Article from './componenets/Article';
import Articles from './componenets/Articles';
// import Layout from './Layout';

const App = () => {
  return (
    <div>
      
      <Routes>
        {/* <Route element={<Layout />}> */}
      <Route path="/" element={<Test1 />} />
      <Route path="/test_1" element={<Test1_1 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path="/test3" element={<Test3 />} />
      <Route path="/test4" element={<Test4 />} />
      <Route path="/test5" element={<Test5 />} />
      <Route path="/project/:username" element={<Project />} />
      {/* </Route> */}
      <Route path='articles' element={<Articles />} >
      <Route path=':id' element={<Article />} />
      </Route>
      </Routes>
    </div>
  );
};

export default App;
