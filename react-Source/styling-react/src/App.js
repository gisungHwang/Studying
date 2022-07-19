import {Component} from 'react';
import SassComponent from './SassComponent';
import logo from './logo.svg';
import './App.css';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';


class App extends Component {
  render() {
    return(
      <div>
        <CSSModule />
        <SassComponent/>
        <StyledComponent/>
      </div>
    );
  }
}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
