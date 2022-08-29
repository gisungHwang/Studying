/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useRef, useState } from "react";

const UserOrderBoardArticle = ({
  article,
  handlelist
}) => {

  const handleDelete = (e) => {
    if (article.order_userId === window.sessionStorage.getItem('id')) {
      axios
        .post('http://localhost:8008/orderdelete', {
          num: e.target.id
        })
        .then(() => {
          handlelist();
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert('작성자만 해당 글을 삭제할 수 있습니다.');
      return false;
    }
  }

  console.log('asdasdadasdddddddd', article)

  return (
    <tr>
      <td>
        {article.order_menuName}
      </td>
      <td>
        {article.order_price}
      </td>
      <td>
        <input
          type='button'
          value='삭제'
          id={article.order_id}
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default UserOrderBoardArticle;
