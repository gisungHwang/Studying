import { Route, Routes } from 'react-router-dom'
import Main from './hosik_boards/Main';
import LoginForm from './login/LoginForm';
import MemberForm from './login/MemberForm';
import StoreMemberForm from './login/StoreMemberForm';
import StoreLoginForm from './login/StoreLoginForm';
import FoodCategory from './foodCategory/FoodCategory';
import MenuChicken from "./menuSite/MenuChicken";
import MenuCafe from "./menuSite/MenuCafe";
import MenuPorkfood from "./menuSite/MenuPorkfood";
import MenuPizza from "./menuSite/MenuPizza";
import MenuBurger from "./menuSite/MenuBurger";
import MenuChina from "./menuSite/MenuChina";
import MenuJapan from "./menuSite/MenuJapan";
import MenuKfood from "./menuSite/MenuKfood";
import MenuDessert from "./menuSite/MenuDessert";
import MenuSandwich from "./menuSite/MenuSandwich";
import BoardWrite from './hosik_boards/BoardWrite';
import Loading from './Loading/Loading';
import StoreMain from './storeBoards/StoreMain';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Loading />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/member' element={<MemberForm />} />
      <Route path='/storelogin' element={<StoreLoginForm />} />
      <Route path='/storemember' element={<StoreMemberForm />} />
      <Route path="/main" element={<FoodCategory />} />
      <Route path="/main/menuchicken" element={<MenuChicken />} />
      <Route path="/main/menucafe" element={<MenuCafe />} />
      <Route path="/main/menuporkfood" element={<MenuPorkfood />} />
      <Route path="/main/menupizza" element={<MenuPizza />} />
      <Route path="/main/menuchina" element={<MenuChina />} />
      <Route path="/main/menujapan" element={<MenuJapan />} />
      <Route path="/main/menukfood" element={<MenuKfood />} />
      <Route path="/main/menudessert" element={<MenuDessert />} />
      <Route path="/main/menuburger" element={<MenuBurger />} />
      <Route path="/main/menusandwich" element={<MenuSandwich />} />
      <Route path='/boardlist' element={<Main />} />
      <Route path='/storeboard' element={<StoreMain />} />
      <Route path='/boardwrite' element={<BoardWrite />} />
    </Routes>
  )
};

export default App;
