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

  const handleDelete = (e) => {
    // if (article.comment_name === window.sessionStorage.getItem('id')) {
    console.log('handleDelete(comment_name) : ', e.target.id);
    axios
      .post('http://localhost:8008/minidelete', {
        comment_name: e.target.id
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
    // } else {
    //   alert('작성자만 해당 글을 삭제할 수 있습니다.');
    //   return false;
    // }
  }
  console.log('BoardArticle : ', article);

  return (
    <tr>
      <td>{article.comment_name}</td>
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