import { Route, Routes } from 'react-router-dom'
import LoginForm from './login/LoginForm';
import MemberForm from './login/MemberForm';
import StoreMemberForm from './login/StoreMemberForm';
import StoreLoginForm from './login/StoreLoginForm';
import FoodCategory from './foodCategory/FoodCategory';
import Menu from "./menuSite/storeMenu/StoreMain";
import Loading from './Loading/Loading';
import StoreMain from './storeBoards/StoreMain';
import BoardMain from './menuSite/storeMenu/boards/Main';
import UserMenu from './userMenu/UserStoreMain';
import PayLoading from './Loading/PayLoading';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loading />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/member' element={<MemberForm />} />
      <Route path='/storelogin' element={<StoreLoginForm />} />
      <Route path='/storemember' element={<StoreMemberForm />} />
      <Route path="/main" element={<FoodCategory />} />
      <Route path="/main/chicken" element={<Menu />} />
      <Route path="/main/burger" element={<Menu />} />
      <Route path="/main/pizza" element={<Menu />} />
      <Route path="/main/korean" element={<Menu />} />
      <Route path="/main/sandwitch" element={<Menu />} />
      <Route path="/main/chinese" element={<Menu />} />
      <Route path="/main/japanese" element={<Menu />} />
      <Route path="/main/dessert" element={<Menu />} />
      <Route path="/main/cafe" element={<Menu />} />
      <Route path="/main/porkfood" element={<Menu />} />
      <Route path='/storeboard' element={<StoreMain />} />
      <Route path='/userstoreboard' element={<UserMenu />} />
      <Route path='/boardmain' element={<BoardMain />} />
      <Route path='/payloading' element={<PayLoading />} />
    </Routes>
  )
};

export default App;
