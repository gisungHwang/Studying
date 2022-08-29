import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardArticle from './MiniBoardArticle';
import PageLink from './MiniPageLink';

const MiniBoardListNoOrder = ({
  boardlist,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink,
  handlelistnoorder
}) => {

  useEffect(() => {
    handlelistnoorder();
  }, []);


  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width='700px' border='1' align='center'>
          <thead>
            <tr>
              <th width='100'>주문자</th>
              <th width='150'>주문내역</th>
              <th width='100'>가격</th>
              <th width='100'>수정 / 삭제</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width='700px' border='1' align='center'>
          <thead>
            <tr>
              <th width='100'>주문자</th>
              <th width='150'>주문내역</th>
              <th width='100'>가격</th>
              <th width='100'>수정 / 삭제</th>
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
              )
            })}
          </tbody>
        </table>
        <table align='center'>
          <tfoot>
            <br />
            <tr>
              <td align='center'>
                {pagelink.map((page) => {
                  return (
                    <PageLink
                      page={page}
                      key={page}
                      handlepage={handlepage}
                    />
                  )
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default MiniBoardListNoOrder;