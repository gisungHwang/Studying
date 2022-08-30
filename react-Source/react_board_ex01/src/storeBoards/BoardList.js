import { useEffect } from "react";
import BoardArticle from "./BoardArticle";
import { useNavigate } from "react-router-dom";
import PageLink from "./PageLink";
import "./BoardList.css";

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
        <input
          type="button"
          value="로그아웃"
          onClick={handleLogout}
          className="storelogout1"
        ></input>
      </div>
    );
  } else {
    return (
      <div>
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
        {/* <tr>
              <td colSpan="7" align="center">
                <input
                  type="button"
                  value="로그아웃"
                  onClick={handleLogout}
                ></input>
              </td>
            </tr> */}

        <input
          type="button"
          value="로그아웃"
          onClick={handleLogout}
          className="storelogout"
        ></input>
        <br />
        {pagelink.map((page) => {
          return (
            <PageLink
              page={page}
              key={page}
              handlepage={handlepage}
              className="PageLink1"
            />
          );
        })}
      </div>
    );
  }
};

export default BoardList;
