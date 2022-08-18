import { Route, Routes } from 'react-router-dom'
import Main from './boards/Main';
import LoginForm from './login/LoginForm';
import MemberForm from './login/MemberForm';
import StoreMemberForm from './login/StoreMemberForm';
import StoreLoginForm from './login/StoreLoginForm';
import FoodCategory from './foodCategory/FoodCategory';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/member' element={<MemberForm />} />
      <Route path='/storelogin' element={<StoreLoginForm />} />
      <Route path='/storemember' element={<StoreMemberForm />} />
      <Route path='/main' element={<FoodCategory />} />
      <Route path='/board' element={<Main />} />
    </Routes>
  )
};

export default App;
