import React, { useState } from 'react';
import MiniMain from './miniBoards/MiniMain';

const BoardDetail = ({
  article,
  handlelist,
  articleId,
  actionmodemain,
  setactionmodemain,
}) => {
  console.log('BoardDetail : ', article);

  console.log('카카오 테스트용1', articleId);

  const [number, setNumber] = useState(article.board_num);

  const boardNum = article.board_num;

  console.log('답 나오냐', article.board_num);

  return (
    <div>
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            <tr>
              <td width='100px'>글번호</td>
              <td align='left' width='600px'>
                {article.board_num}
              </td>
            </tr>
            <tr>
              <td width='100px'>제목</td>
              <td align='left' width='600px'>
                {article.board_title}
              </td>
            </tr>
            <tr>
              <td width='100px'>작성자</td>
              <td align='left' width='600px'>
                {article.board_writer}
              </td>
            </tr>
            <tr>
              <td width='100px'>픽업 장소</td>
              <td align='left' width='600px'>
                {article.board_location}
              </td>
            </tr>
            <tr>
              <td width='100px'>작성날짜</td>
              <td align='left' width='600px'>
                {article.board_date}
              </td>
            </tr>
            <tr>
              <td width='100px'>글내용</td>
              <td align='left' width='600px'>
                {article.board_content}
              </td>
            </tr>
            <tr>
              <td width='100px'>그룹 모집시간</td>
              <td align='left' width='600px'>
                {article.BOARD_TIME}분
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='전체 글목록'
                  onClick={handlelist}
                />
                <div>
                  <MiniMain
                    articles={article}
                    number={number}
                    articleId={articleId}
                    boardnum={boardNum}
                    actionmodemain={actionmodemain}
                    setactionmodemain={setactionmodemain}
                  />
                </div>
              </td>
            </tr>
            <tr>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardDetail;