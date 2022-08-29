import { useEffect, useState } from "react";
import BoardArticle from "./UserOrderBoardArticle";
import PageLink from "./UserOrderPageLink";

const UserOrderBoardList = ({
  boardlist,
  handlelist,
  handlepage,
  pagelink,
  actionmode,
  setactionmode,
  number,
  fee,
  actionmodemini,
  setactionmodemini,
  actionmodestore,
  setactionmodestore
}) => {
  const onClick = () => {
    setactionmodemini({
      ...actionmodemini,
      mode: 1, // 상세보기
    });
  }

  useEffect(() => {
    handlelist();
  }, []);

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="100">메뉴명</th>
              <th width="100">메뉴 가격</th>
            </tr>
            <tr>
              <td colSpan={3} align="center">
                <input
                  type='button'
                  value='메뉴 선택 창으로'
                  onClick={onClick}
                />
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
              <th>메뉴명</th>
              <th>메뉴 가격</th>
              <th>
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  number={number}
                  actionmode={actionmode}
                  article={article}
                  key={article.menu_storeId}
                  handlelist={handlelist}
                />
              );
            })}
            <tr>
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
          <tr>
            <td colSpan={3} align="center">
              <input
                type='button'
                value='메뉴 선택 창으로'
                onClick={onClick}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default UserOrderBoardList;
