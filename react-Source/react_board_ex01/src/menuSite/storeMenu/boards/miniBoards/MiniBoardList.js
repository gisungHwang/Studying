import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BoardArticle from "./MiniBoardArticle";
import PageLink from "./MiniPageLink";
import "./MiniBoardList.css";

const MiniBoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
  fee,
  count,
}) => {
  useEffect(() => {
    handlelist();
  }, []);

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table className="miniboardList" align="center">
          <thead>
            <tr>
              <th className="order_desc" width="40px">
                주문자
              </th>
              <th className="order_desc" width="50">
                주문내역
              </th>
              <th className="order_desc" width="50">
                가격
              </th>
              <th className="order_del">수정 / 삭제</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <table className="miniboardList">
            <thead>
              <tr>
                <th className="order_desc" width="40px">
                  주문자
                </th>
                <th className="order_desc" width="60">
                  주문내역
                </th>
                <th className="order_desc" width="50">
                  가격
                </th>
                <th className="order_desc">수정 / 삭제</th>
              </tr>
            </thead>
            <tbody>
              {boardlist.boardList.map((article) => {
                return (
                  <BoardArticle
                    article={article}
                    key={article.comment_name} //물어보기
                    handlelist={handlelist}
                    handledetail={handledetail}
                    handleupdateform={handleupdateform}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <table align="center">
          <tfoot>
            <br />
            <tr>
              <td className="miniboardList_fee" align="center">
                {/* {pagelink.map((page) => {
                  return (
                    <PageLink page={page} key={page} handlepage={handlepage} />
                  );
                })} */}

                <table>
                  <tr className="deli_fee" height="30px">
                    <td>총배달비 :</td>
                    <td>{fee}</td>
                  </tr>

                  <tr className="deli_fee" height="30px">
                    <td> 파티원수 :</td>
                    <td>{count}</td>
                  </tr>

                  <tr className="deli_fee" height="30px">
                    <td>할인금액:</td>
                    <td>{fee - Math.floor(fee / count)}</td>
                  </tr>

                  <tr className="deli_fee" height="30px">
                    <td>배달비 :</td>
                    <td>{Math.floor(fee / count)}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default MiniBoardList;
