import React, { useState } from "react";
import MiniMain from "./miniBoards/MiniMain";
import "./BoardDetail.css";

const BoardDetail = ({
  article,
  handlelist,
  articleId,
  actionmodemain,
  setactionmodemain,
}) => {
  console.log("BoardDetail : ", article);

  console.log("카카오 테스트용1", articleId);

  const [number, setNumber] = useState(article.board_num);

  const boardNum = article.board_num;

  console.log("답 나오냐", article.board_num);

  return (
    <div>
      <div className="totla2">
        <div className="board_num">
          글번호&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; {article.board_num}
        </div>
        <div className="board_title">
          제목&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {article.board_title}
        </div>
        <div className="board_writer">
          작성자&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{article.board_writer}
        </div>
        <div className="board_location">
          픽업장소&nbsp;: &nbsp;{article.board_location}
        </div>
        <div className="board_date">
          작성날짜&nbsp;: &nbsp;{article.board_date}
        </div>
        <div className="board_content">
          내용&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {article.board_content}
        </div>
        <div className="board_time">모집시간&nbsp;: {article.BOARD_TIME}</div>
      </div>
      <div align="center">
        <input
          type="button"
          value="전체 글목록"
          onClick={handlelist}
          className="mokrok"
        />
      </div>

      <div>
        <div className="Detail_scroll">
          <MiniMain
            articles={article}
            number={number}
            articleId={articleId}
            boardnum={boardNum}
            actionmodemain={actionmodemain}
            setactionmodemain={setactionmodemain}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
