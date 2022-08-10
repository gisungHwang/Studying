import logo from './logo.svg';
import './App.css';
import BoardList from './BoardList';
import BoardWrite from './BoardWrite';
import BoardDetail from './BoardDetail';
import BoardUpdateForm from './BoardUpdateForm';
import { useState } from "react";
import axios from "axios";


function App() {
  const [boardlist, setBoardlist] = useState({
    boardlist: [],  //게시판 글 정보를 저장
  });

  const [article, setArticle] = useState({  //상세정보를 저장할 함수
    board_name : 0,
    board_writer : "",
    board_title : "",
    board_content : "",
    board_data: "",
  });

  //0:글쓰기 , 1: 상세보기, 2:글수정
  const [actionMode, setActionMode] = useState ({mode: 0}); 

  const getList = () => {  //글목록
    axios
      .get("http://localhost:8008/list", {} )
      .then((res) => {  //정상적으로 수행되었을 때 .then사용
        const {data} =res;  //비구조화 할당방식
        console.log("data ==>", data);
        setBoardlist({
          boardList: data,
        });
        setActionMode({
            ...actionMode,
            mode:0, //상세보기
        });
      })
      .catch((e) => {   //오류나면 .chtch사용
        console.error(e);
      });
  };

  const handleDetail = (e) => {
    alert("handleDetail(actionMode) => " + actionMode.mode);
    axios
    .post("http://localhost:8008/detail", {num: e.target.id}) 
    .then((res) => {
      const {data} = res;
      console.log("detail =>", data );
      if(res.data.length > 0) {
        setArticle({
            ...article,
            baord_num: data[0].BOARD.NUM,
            baord_writer: data[0].BOARD.WRITER,
            baord_title: data[0].BOARD.TITLE,
            baord_content: data[0].BOARD.CONTENT,
            baord_date: data[0].BOARD.DATE,
        });
        setActionMode({
            ...actionMode,
            mode:1,
        });
      }
    })
    .catch((e) => {
      console.error(e);
    });
  };

  const hadleUpdateForm = (e) => {
    alert(
      "handleUpdateForm(actionMode) =>" + actionMode.mode + "," + e.target.id
    );
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res; //data에는 상세데이터 하나가 저장
        console.log("handleUpdateForm=>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode,
            mode: 2,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate => ", article);
    axios
      .post("http://localhost:8008/update", {
        article: article,
      })
      .then(() => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    return (
      <div>
        <BoardWrite handlelist={getList}></BoardWrite>
        <br />
        <BoardList
          boardlist={boardlist} //boardlist에는 조회한 글이 들어있다.
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    return (
      <div>
        <BoardDetail article={article} handlelist={getList}></BoardDetail>

        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}
export default App;