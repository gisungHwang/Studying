import React, { useRef } from "react";
import axios from "axios";
import "./MiniBoardArticle.css";
const MiniBoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  // const nameRef = useRef();

  // if (article.comment_name === window.sessionStorage.getItem('id')) {
  //   alert('주문 내역은 하나만 작성이 가능합니다.');
  //   return false;
  // }

  const comment_userId = window.sessionStorage.getItem("id");

  const onClick = (e) => {
    if (!(comment_userId === article.comment_userId)) {
      alert("자신의 주문 내역만 수정할 수 있습니다.");
      return false;
    }
    handleupdateform(e);
  };

  const handleDelete = (e) => {
    if (!(comment_userId === article.comment_userId)) {
      alert("자신의 주문 내역만 삭제할 수 있습니다.");
      return false;
    }
    if (window.confirm("주문 내역을 삭제하시겠습니까?")) {
      alert(
        `주문 내역이 삭제되었습니다.
결제된 금액은 결제 취소처리 됩니다.`
      );
    } else {
      alert("주문 내역 삭제를 취소했습니다.");
      return false;
    }
    console.log("handleDelete(comment_num) : ", e.target.id);

    axios
      .post("http://localhost:8008/minidelete", {
        comment_num: e.target.id,
        comment_userId: comment_userId,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  console.log("BoardArticle : ", article);

  return (
    <tr>
      <td>
        {article.comment_name}
        <br />
        <span hidden>
          주문자 ID : <b>{article.comment_userId}</b>
        </span>
      </td>
      <td>{article.comment_content}</td>
      <td>{article.comment_price}</td>
      <td align="center">
        <div className="mini_up">
          <input
            className="miniboardarticle_btn"
            type="button"
            value="수정"
            id={article.comment_num}
            onClick={onClick}
          />
          <input
            className="miniboardarticle_btn"
            type="button"
            value="삭제"
            id={article.comment_num}
            onClick={handleDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default MiniBoardArticle;
