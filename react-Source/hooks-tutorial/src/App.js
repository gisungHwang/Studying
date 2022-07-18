import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './info';
import { useState } from 'react';
import Forminput from './Forminput';

// const App = () => {
// const [visible, setVisible] = useState(false);
// return(
//   <div>
//     <button
//     onClick={() => {
//       setVisible(!visible);
//     }}
//     >
//       {visible ? '숨기기' : '보이기'}
//     </button>
//     <hr/>
//     {visible && <Info/>}
//   </div>
// );
//   };

const App = () => {
  return  <Forminput/>;
};
export default App;


