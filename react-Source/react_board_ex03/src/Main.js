    import BoardList from "./BoardList";
    import BoardWrite from "./BoardWrite";
    import BoardDetail from "./BoardDetail";
    import BoardUpdateForm from "./BoardUpdateForm";
    import { useState, useEffect } from "react";
    import axios from "axios";
    import {useNavigate} from "react-router-dom";

    function Main() {
    const [boardlist, setBoardlist] = useState({
        boardList: [],
    });

    const navigate = useNavigate();

    const [article, setArticle] = useState({
        board_num: 0,
        board_writer: "",
        board_title: "",
        board_content: "",
        board_date: "",
    });

    // 0:글쓰기, 1:상세보기, 2:글수정
    const [actionMode, setActionMode] = useState({ mode: 0 });
    const [pageLink, setPageLink] = useState([]);

    var page_num = 1;  //state함수는 자식컴포넌트 내에서 전달 가능(props를 통해), 일반변수는 전달 불가능 
    const page_size = 3;  //그러므로 여기서 선언한 일반변수들은 여기서만 쓰기위해 선언
    var page_count = 1;
    var article_count = 0;

    useEffect(() => {
        const login_id = window.sessionStorage.getItem("id");  
        console.log("window.sessionStorage(login_id =>", login_id);
        if (login_id === null) {
            alert("로그인후 사용가능합니다!");
            navigate("/");
        }
    }, []);

    const handlepage = (e) => { //페이지링크.js에서의 핸들페이지
        console.log("handlePage(e.target.id) => ", e.target.id);
        page_num = e.target.id;
        getList();
    } 

    // 글목록
    async function getList() {  //async가 쓰이면 비동기함수라는 뜻
        // alert("getList(actionMode) =>" + actionMode.mode);
        await axios //await는 비동기함수를 수행하지만 호출한 결과가 완료될 때까지 기다리라는 함수 , 수행이 끝나야지만 다음수행을 함(동기식으로 바꾸는 느낌)
        .get("http://localhost:8008/count", {})
        .then((res) => {
            const { data } = res;
            article_count = data[0].COUNT;
            page_count = Math.ceil(article_count / page_size);  //ceil은 무조건 올림처리 
            var page_link = [];
            for (let i = 1; i <= page_count; i++) page_link.push(i); //push는 배열에 추가하는 작업
            console.log("getArticleCount(page_link) => ", page_link);
            setPageLink(page_link); 
        })
        //     setBoardlist({
        //     boardList: data,
        //     });
        //     setActionMode({
        //     ...actionMode,
        //     mode: 0, // 상세보기
        //     });
        // })
        .catch((e) => {
            console.error(e);
        });
        console.log("article_count =>", article_count);
                
    //             .then((res) => {  //성공적으로 호출 시
    //             const { data } = res;
    //             console.log("data ==>", data);
    //             setBoardlist({
    //             boardList: data,
    //             });
    //             setActionMode({
    //             ...actionMode,
    //             mode: 0,
    //             });
    //         })
    //         .catch((e) => { //호출 실패 시
    //             console.error(e);
    //         });
        
    // };

    //상세보기
    const handleDetail = (e) => {
        alert("handleDetail(actionMode) =>" + actionMode.mode);
        axios
        .post("http://localhost:8008/detail", { num: e.target.id })
        .then((res) => {  //성공적으로 호출 시
                const { data } = res;
                console.log("data ==>", data);
                setBoardlist({
                boardList: data,
                });
                setActionMode({
                ...actionMode,
                mode: 0,
                });
            })
            .catch((e) => { //호출 실패 시
                console.error(e);
            });
        
    };

    // 수정폼 보기
    const handleUpdateForm = (e) => {
        alert(
        "handleUpdateForm(actionMode) =>" + actionMode.mode + ", " + e.target.id
        );
        axios
        .post("http://localhost:8008/detail", { num: e.target.id })
        .then((res) => {
            const { data } = res;
            console.log("handleUpdateForm =>", data);
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
                mode: 2, // 글수정하기
            });
            }
        })
        .catch((e) => {
            console.error(e);
        });
    };

    const handleUpdate = () => {
        console.log("handleUpdate =>", article);
        axios
        .post("http://localhost:8008/update", {
            article: article,
        })
        .then((res) => {
            console.log("handleUpdate( changedRows) =>", res.data.changedRows);
            getList();
        })
        .catch((e) => {
            console.error(e);
        });
    };

    if (actionMode.mode === 0) {
        // alert("글쓰기");
        // 글쓰기
        return (
        <div>
            <BoardWrite handlelist={getList}></BoardWrite>
            <br />
            <BoardList
            boardlist={boardlist}
            actionmode={actionMode}
            handlelist={getList}
            handledetail={handleDetail}
            handleupdateform={handleUpdateForm}
            handlepage={handlepage}
            pagelink={pageLink}
            ></BoardList>
        </div>
        );
    } else if (actionMode.mode === 1) {
        // alert("상세정보");
        // 상세보기
        return (
        <div>
            <BoardDetail article={article} handlelist={getList}></BoardDetail>
            <br />
            <BoardList
            boardlist={boardlist}
            handlelist={getList}
            handledetail={handleDetail}
            handleupdateform={handleUpdateForm}
            handlepage={handlepage}
            pagelink={pageLink}
            ></BoardList>
        </div>
        );
    } else if (actionMode.mode === 2) {
        // alert("글수정");
        // 글수정
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
            handleupdateform={handleUpdateForm}
            handlepage={handlepage}
            pagelink={pageLink}
            ></BoardList>
        </div>
        );
    }
    }
    }
    export default Main;