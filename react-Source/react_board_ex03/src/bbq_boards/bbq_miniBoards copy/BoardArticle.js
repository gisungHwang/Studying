import React from 'react';
import axios from 'axios';

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform
}) => {
  const handleDelete = (e) => {
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