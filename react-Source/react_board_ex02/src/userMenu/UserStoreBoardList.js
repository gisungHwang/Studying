import { useEffect, useState } from "react";
import BoardArticle from "./UserStoreBoardArticle";
import UserOrderMain from "./orderMenu/UserOrderMain";
import PageLink from "./UserStorePageLink";

const UserStoreBoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
  actionmodemini,
  setactionmodemini,
  number,
  fee,
  totalprice,
  actionmodestore,
  setactionmodestore,
  actionmodemain,
  setactionmodemain,
  orderlist
}) => {

  const onClick = () => {
    setactionmodemini({
      ...actionmodemini,
      mode: 0,
    });
  }

  const onClick_k = () => {
    setactionmodestore({
      ...actionmodestore,
      mode: 1,
    });
  }

  useEffect(() => {
    handlelist();
  }, []);


  const onClick_b = () => {
    setactionmodemini({
      ...actionmodemini,
      mode: 4,
    });
  }

  console.log('불러와서 뭐함?', fee, totalprice)

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width="700px" border="1" align="center">
          <thead>
            <tr>
              <th width="240">메뉴 사진</th>
              <th width="100">메뉴명</th>
              <th width="100">메뉴 가격</th>
              <th width="200">
                선택
              </th>
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
              <th width="120">메뉴 사진</th>
              <th width="200">메뉴명</th>
              <th width="80">메뉴 가격</th>
              <th width="50">
                선택
              </th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              return (
                <BoardArticle
                  orderlist={orderlist}
                  number={number}
                  setactionmodemini={setactionmodemini}
                  actionmodemini={actionmodemini}
                  article={article}
                  key={article.menu_storeId}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
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
            <td align="center">
              {/* <UserOrderMain
                number={number}
              /> */}
            </td>
          </tr>
          <tr>
            <td align="center">
              <input
                type='button'
                value='주문 내역으로'
                onClick={onClick}
              />
              <input
                type='button'
                value='장바구니로'
                onClick={onClick_b}
              />
              <input
                type='button'
                value='결제하기'
                onClick={onClick_k}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default UserStoreBoardList;
