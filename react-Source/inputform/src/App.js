import { useState, useRef, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './componenets/TodoTemplate';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';

const App= () => {
  const [todos, setTodos] = useState([
    {
      username : '',
      pwd: '',
        mail1 : '',
        mail2 : '',
        gender: '' 
    }
  ]);
  const nextId = useRef();
  const updateData ={}; 
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

export default App;

// import React, {useState} from 'react';
// // React의 내장 함수인 useState를 Import함
// import logo from './logo.svg';
// import './App.css';

// function Header(props) {
//   return (
//     <header className='black_h1'>
//       <h1>
//         <a href="/" onClick={(event)=>{
//           event.preventDefault();
//           // click 후의 새로고침이 되지 않도록 지정
//           props.onChangeMode();
//         }}>
//         {props.title}
//         </a>
//       </h1>
//     </header> 
//   );
// }

// function Nav(props) {
//   const lists = []
//   // lists라는 변수를 배열로 지정

//   for(let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     lists.push(
//     <li key={t.id}>
//       <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
//         event.preventDefault();
//         props.onChangeMode(Number(event.target.id));
//         // 여기서의 key 값으로 지정된 숫자는 문자열로써 key가 지정되었기 때문에
//         // Number 함수를 사용해서 숫자로 변환을 해주면 오류가 사라짐
//       }}>
//       {/*
//       click을 통해 각각의 id를 출력하기 위해서 a 태그에 직접 id를 부여해주고,
//       event 객체가 가지고 있는 target(이벤트를 유발시킨 태그인 a)이라는 기능과
//       .id(event.target.id)를 props인 onChangeMode 함수에 지정해주면,
//       클릭했을 시, 해당 list의 id 값을 얻을 수 있음
//       */}
//        {t.title}
//       </a>
//     </li>
//     );
//   }
//   // for 문을 이용해 list들을 생성해주고, lists의 배열에 push해주는 작업을
//   // topics라는 변수의 배열만큼 반복시켜줌
//   // react는 자동으로 생성되는 경우에는 고유의 key 값을 지정해줘서 추적이 가능하게 해야 함

//   return (
//     <nav className='lists'>
//       <ol>
//         {lists}
//       </ol>
//     </nav>
//   );
// }

// function Article(props) {
//   return (
//     <article className='articles'>
//       <h2>
//         {props.title}
//       </h2>
//       {props.body}<br/>
//       {props.body1}
//     </article>
//   ); 
// }

// function Create(props) {
//   return (
//     <article className='create_article'>
//       <h2>Create</h2>
//       <form onSubmit={(event)=>{
//         event.preventDefault();
//         const title = event.target.title.value;
//         const body = event.target.body.value;
//         props.onCreate(title, body);
//       }}>
//         <p>
//           <input type="text" name='title' className='create_input' placeholder='제목을 입력하세요.' />
//         </p>
//         <p>
//           <textarea name="body" className='create_textarea' rows='15' placeholder='내용을 입력하세요.'></textarea>
//         </p>
//         <p>
//           <input type="submit" value="Create" className='create_submit' onClick={()=>{
//             alert('새로운 메뉴가 만들어졌습니다.');
//           }} />
//         </p>
//       </form>
//     </article>
//   );
// }

// function Update(props) {
//   const [title, setTitle] = useState(props.title);
//   const [body, setBody] = useState(props.body);
//   return (
//     <article className='create_article'>
//       <h2>Update</h2>
//       <form onSubmit={(event) => {
//         event.preventDefault();
//         const title = event.target.title.value;
//         const body = event.target.body.value;
//         props.onUpdate(title, body);
//       }}>
//         <p>
//           <input type="text" name='title' className='update_input' placeholder='제목을 입력하세요.' value={title} onChange={(event)=>{
//             setTitle(event.target.value);
//           }} />
//         </p>
//         <p>
//           <textarea name="body" className='update_textarea' rows='15' placeholder='수정할 내용을 입력하세요.' value={body} onChange={(event)=>{
//             setBody(event.target.value);
//           }}></textarea>
//         </p>
//         <p>
//           <input type="submit" value="Update" className='update_submit' onClick={()=>{
//             alert('내용이 수정되었습니다.');
//           }} />
//         </p>
//       </form>
//     </article>
//   );
// }
// // Main
// function App() {
//   // const _mode = useState('개발자 Blog 추천');
//   // const mode = _mode[0];
//   // const setMode = _mode[1];
//   // 및의 코드와 같은 기능

//   const [mode, setMode] = useState('Main');
//   const [id, setId] = useState(null);
//   const [nextId, setNextId] = useState(4);

//   const [topics, setTopics] = useState([
//     {
//       id: 1, title: 'velog를 사용할까?',
//       body: 'velog의 장점과 단점\n\n장점\n1. 기본에 충실하게 기능들이 핵심만을 갖추었다.\n2. 개발자를 위한 Blog로써 사용자의 비율이 개발자가 압도적으로 높다.\n3. 전체적으로 기능이 직관적이며, 글 작성시에 미리보기 지원으로 사용이 편리하다.\n\n단점\n1. 기본적인 카테고리를 제공하지 않으며, 태그가 카테고리의 역할을 한다.\n2. 커스텀에 대한 자유도가 존재하지 않는다.(모든 velog의 디자인 획일화)\n3. 광고를 통한 수익 창출이 불가능하다.',
//     },
//     {
//       id: 2, title: 'Tistory를 사용할까?',
//       body: 'Tistory의 장점과 단점\n\n장점\n1. 테마, 플러그인 등의 지원하는 기능이 많다.\n2. 지원하는 기능이 많은 만큼 진입장벽이 낮다.\n3. 구글 에드센스 적용으로 수익 창출이 가능하다.\n\n단점\n1. 마크다운을 지원하지만, 호환성이 많이 떨어진다.(수정 시, 깨지는 현상)\n2. 블로그 운영에 대한 기본 가이드가 어려운 편으로 검색 노출이 어려워질 수 있다.\n3. 개발자 친화적인 플랫폼이라고 보기에 어려움이 있다.'
//     },
//     {
//       id: 3, title: 'GitHub Blog를 사용할까?',
//       body: 'GitHub Blog의 장점과 단점\n\n장점\n1. 기본적인 코딩에 능숙하다면 커스텀의 자유도가 굉장히 높다.\n2. 포스팅의 주제가 자유롭다.\n3. 커뮤니티의 성격보다는 개인적인 정리 사이트의 느낌이다.\n\n단점\n1. 높은 진입장벽으로 준비 단계가 고통스럽다.\n2. 관리자 모드의 부재로, Blog의 다양한 통계 정보를 확인할 수 없다.\n3. 댓글 등의 기능이 존재하지 않아, 별도의 플러그인을 설치해야 한다.'
//   }
//   ]);

//   let content = null;
//   let contextControl = null;
//   if (mode === 'Main') {
//     content = 
//     <Article
//       title="개발자 Blog를 시작하려는 모두를 위해..."
//       body="어떤 플랫폼을 사용해야 하는지의 나름대로의 정보들을 정리해놓은 블로그."
//       body1="각각의 플랫폼의 장점과 단점을 정리했습니다."
//     ></Article>
//   } else if (mode === 'Read') {
//     let title, body = null;
//     for (let i = 0; i < topics.length; i++) {
//       if (topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content =
//       <Article
//         title={title}
//         body={body}
//       >
//       </Article>
//     contextControl = 
//       <>
//         <li>
//           <a href={"/update/" + id} className='update_btn' onClick={(event)=>{
//             event.preventDefault();
//             setMode('Update')
//           }}>Update List</a>
//         </li>
//         <li>
//           <input type="button" value="Delete List" className='delete_btn' onClick={()=>{
//             alert("글을 삭제합니다.");
//             const newTopics = []
//             for (let i = 0; i < topics.length; i++) {
//               if (topics[i].id !== id) {
//                 newTopics.push(topics[i]);
//               }
//             }
//             setTopics(newTopics);
//             setMode('Main');
//           }}/>
//         </li>
//       </>
//   } else if (mode === 'Create') {
//     content = <Create onCreate={(_title, _body)=>{
//       const newTopic = {id:nextId, title:_title, body:_body}
//       const newTopics = [...topics]
//       newTopics.push(newTopic);
//       setTopics(newTopics);
//       setMode('Read');
//       setId(nextId);
//       setNextId(nextId + 1);
//     }}></Create>
//   } else if (mode === 'Update') {
//     let title, body = null;
//     for (let i = 0; i < topics.length; i++) {
//       if (topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Update title={title} body={body} onUpdate={(title, body)=>{
//       const newTopics = [...topics]
//       const updatedTopic = {id:id, title:title, body:body}
//       for (let i = 0; i < newTopics.length; i++) {
//         if (newTopics[i].id === id) {
//           newTopics[i] = updatedTopic;
//           break;
//         }
//       }
//       setTopics(newTopics);
//       setMode('Read');
//     }}></Update>
//   }

//   return (
//     <div>
//       <Header title="개발자 Blog 추천" onChangeMode={()=>{
//         setMode('Main');
//         }}></Header>
//       <Nav topics={topics} onChangeMode={(_id)=>{
//         setMode('Read');
//         setId(_id);
//       }}></Nav>
//       <ul className='btn_list'>
//         <li><a href="/create" className='create_btn' onClick={(event) => {
//           event.preventDefault();
//           setMode('Create');
//         }}>Create List</a></li>
//         {contextControl}
//       </ul>
//         {content}
//     </div>
//   );
// }

// export default App;