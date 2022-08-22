import React, { useRef } from 'react';
import axios from 'axios';

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform
}) => {

  // const nameRef = useRef();

  // if (article.comment_name === window.sessionStorage.getItem('id')) {
  //   alert('주문 내역은 하나만 작성이 가능합니다.');
  //   return false;
  // }

  const comment_userId = window.sessionStorage.getItem('id');

  // console.log(comment_userId);

  // const article_userId = article.comment_userId

  // console.log(article_userId);
  // if (!(comment_userId === article.comment_userId)) {
  //   alert('자신의 주문 내역만 삭제할 수 있습니다.');
  //   return false;
  // }

  const handleDelete = (e) => {
    if (!(comment_userId === article.comment_userId)) {
      alert('자신의 주문 내역만 삭제할 수 있습니다.');
      return false;
    }
    console.log('handleDelete(comment_name) : ', e.target.id);
    axios
      .post('http://localhost:8008/minidelete', {
        comment_name: e.target.id,
        comment_userId: comment_userId
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  }
  console.log('BoardArticle : ', article);

  return (
    <tr>
      <td>
        {article.comment_name}
        <br />
        주문자 ID : <b>{article.comment_userId}</b>
        {/* <input
          type='text'
          value={article.comment_userId}
          id={article.comment_userId}
        /> */}
      </td>
      <td>
        {/* <a
          href='#'
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
        </a> */}
        {article.comment_content}
      </td>
      <td>{article.comment_price}</td>
      {/* <td>{article.BOARD_CONTENT}</td> */}
      {/* <td>{article.BOARD_LOCATION}</td>
      <td>{article.BOARD_DATE}</td> */}
      <td align='center'>
        <input
          type='button'
          value='수정'
          id={article.comment_name}
          onClick={handleupdateform}
        />
        <input
          type='button' 
          value='삭제'
          id={article.comment_name}
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default BoardArticle;