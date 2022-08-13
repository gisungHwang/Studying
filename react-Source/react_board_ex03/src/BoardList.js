import { useEffect } from "react";
import BoardArticle from "./BoardArticle";
import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink
}) => {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear(); //세션스토리지에 아이디남겼던 것을 clear
    console.log(
      "handleLogout:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );
    navigate("/"); //로그인페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
              <input
                type="button"
                value="로그아웃"
                onClick={handleLogout}
                ></input>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="60">번호</th>
              <th width="240">제목</th>
              <th width="100">작성자</th>
              <th width="100">작성일</th>
              <th width="200">수정/삭제</th>
              <input
                type="button"
                value="로그아웃"
                onClick={handleLogout}
                ></input>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td>
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                )
              })}
            </td>
          </tr>

        </table>
      </div>
    );
  }
};

export default BoardList;
