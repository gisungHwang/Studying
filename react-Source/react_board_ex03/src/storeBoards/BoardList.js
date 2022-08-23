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
  pagelink,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    console.log(
      "handleLogout:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );
    navigate("/storelogin"); // 로그인페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              {/* <th width="60">번호</th> */}
              <th width="240">메뉴 사진</th>
              <th width="100">메뉴명</th>
              <th width="100">메뉴 가격</th>
              <th width="200">
                삭제
              </th>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </td>
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
              {/* <th width="60">번호</th> */}
              <th width="240">메뉴 사진</th>
              <th width="100">메뉴명</th>
              <th width="100">메뉴 가격</th>
              <th width="200">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.menu_name}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                />
              );
            })}
            <tr>
              <td colSpan='7' align='center'>
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center">
          <tr>
            <td align="center">
              {pagelink.map((page) => {
                return (
                  <PageLink page={page} key={page} handlepage={handlepage} />
                );
              })}
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default BoardList;
