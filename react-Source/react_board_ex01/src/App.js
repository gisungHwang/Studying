import logo from './logo.svg';
import './App.css';
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import BoardUpdateForm from './BoardUpdateForm';
import { useState } from "react";

function App() {
  const [actionMode, setActionMode] = useState ({mode: 1}); //0:글쓰기 , 1: 상세보기, 2:글수정
  if (actionMode.mode === 0) {      //alert("글쓰기")  //===는 타입까지 고려할 경우 사용
  
  return (
    <div>
    <BoardWrite></BoardWrite>
    <br />
    <BoardList></BoardList>
    </div>
    );
} else if (actionMode.mode === 1){ //alert("상세보기")
  return(
    <div>
      <BoardDetail></BoardDetail>
      <br/>
      <BoardList></BoardList>
    </div>
  );
}else if (actionMode.mode === 2) {  //alert("글 수정")
  return(
    <div>
      <BoardUpdateForm></BoardUpdateForm>
      <br/>
      <BoardList></BoardList>
    </div>
  );
}
}

export default App;
