import logo from './logo.svg';
import './App.css';
import Test1 from './componenets/Test1';
// import ScrollTop from './components/ScrollTop';
import {Route, Routes } from 'react-router-dom';
import Test2 from './componenets/Test2';
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
      <Route path="/test2" element={<Test2 />} />
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
