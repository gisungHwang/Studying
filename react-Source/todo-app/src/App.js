import { useState, useRef, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './componenets/TodoTemplate';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';

const App= () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked: true, 
    },
    {
      id:2,
      text:'컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id:3,
      text:'일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    text=> {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],  //todos에 변화가 발생하면 useCallback가 발동
  );
  const onRemove= useCallback(
  id => {
    setTodos(todos.filter(todo => todo.id !== id));
  },
  [todos],
);

const onToggle = useCallback(
  id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked } : todo,
        ),
    );
  },
  [todos],
);

  return (
        <TodoTemplate> 
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
  );
};


// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;
