// import logo from './logo.svg';
// import './App.css';
// // import { Component } from 'react'; //default가 없을때 사용
// // import MyComponent, {MyComponent2 , MyComponent3} //from "./MyComponent"
// // import Counter from "./Counter"
// import Say from './Say';
// import EvenPractice from './EvenPractice';
import Wanted from './Wanted';

import { Component } from 'react';
// import Classinput from './Classinput';
// import IterationSample from './iterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Forminput from './Forminput';

// import ValidationSample from './ValidationSample';
// import RefSample from './createRef';
// import ScrollBox from './ScrollBox';
//함수 기반 컴포넌트
// function App() {  
//   const name = '리액트';
//   return (
//       <> {name}<br />
//       작동완료
//       </>
//   );
// }


// //클래스 기반 컴포넌트
// class App extends Component {
//   render() {
//     const name = prompt("입력");
//     return <div className = "react"> {name}</div>;
//   } 
// }

const App  = () => {
    return <Forminput/>
  };
// const App  = () => {
//     return (
//       <div>
// //     {/* <Wanted /> */}
// //     {/* <Say/> */}
//        <Forminput/>
// //     {/* <EvenPractice/> */}
// {/* //     <ValidationSample> */}
// //     </div>
  //   ) 
  // };
  /* // class App extends Component { */
  //   render(){
  //     return(
  //       <div>
  //       <ScrollBox ref ={(ref) => this.scrollBox=ref}/>
  //       <button onClick={() => this.scrollBox.scrollToBottom()}>
  //         맨밑으로
  //       </button>
  //       </div>
  //     );
  //   }
  // }
// {/* // const App  = () => {
    
// //   }; */}

  // class App extends Component {
  //       render(){
  //       return(
  //       // <Classinput/>
  //       <IterationSample/>          
  //       );
  //     };
  //   }




//   function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
//   }

//   class App extends Component {
//     state = {
//       color: '#000000'
//     }
//     handleClick = ()=>{
//       this.setState({
//         color:getRandomColor()
//       });
//     }
//     render() {
//       return(
//         <div>
//           <button onClick={this.handleClick}>랜덤 색상</button>
//           <ErrorBoundary>
//           <LifeCycleSample color={this.state.color}/>
//           </ErrorBoundary>
//         </div>
//       );
//     }
//   }
// export default App; //default 없으면 import를 사용할 때 {}를 사용해야 함 


//rsc = 함수자동
// import React from 'react';

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

export default App;