/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
  query
}) => {

  const handleDelete = (e) => {
    if (article.BOARD_WRITER === window.sessionStorage.getItem('id')) {
      console.log('handleDelete(board_num) : ', e.target.id);
      axios
        .post('http://localhost:8008/delete', {
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
  console.log('BoardArticle : ', article);

  return (
    <tr>
      <td>
        {article.BOARD_NUM}
        <input
          type='hidden'
          value={query}
        />
      </td>
      <td>
        <a
          href='#'
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
          {article.BOARD_TITLE}
        </a>
      </td>
      <td>{article.BOARD_WRITER}</td>
      {/* <td>{article.BOARD_CONTENT}</td> */}
      <td>{article.BOARD_LOCATION}</td>
      <td>{article.BOARD_DATE}</td>
      <td align='center'>
        <input
          type='button'
          value='수정'
          id={article.BOARD_NUM}
          onClick={handleupdateform}
        />
        <input
          type='button'
          value='삭제'
          id={article.BOARD_NUM}
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default BoardArticle;