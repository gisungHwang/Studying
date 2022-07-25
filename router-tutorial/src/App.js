import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      {/* <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} /> 중첩되는 경로를 삭제해주기 위해 밑에 방식사용
         */}
      <Route path="/articles" element={<Articles />} >
      <Route path=":id" element={<Article />} />  
      </Route>
      <Route path = "*" element={<NotFound />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
