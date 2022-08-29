/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
  handleupdate
}) => {

  var [counterSec, setCounterSec] = useState(59);
  var [counterMin, setCounterMin] = useState(article.BOARD_TIME - 1);

  // useEffect(() => {
  //   const timer =
  //     counterSec > 0 && setInterval(() => setCounterSec(counterSec - 1), 1000);
  //   if (counterSec === 0) {
  //     setCounterMin(counterMin - 1)
  //   }
  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [counterSec]);

  useEffect(() => {
    const timer =
      counterSec > -1 && setInterval(() => setCounterSec(counterSec - 1), 1000);

    if (counterSec === -1) {
      setCounterSec(59);
      setCounterMin(counterMin - 1);
    } else if (counterSec === 0 && counterMin === 0) {
      return clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    }
  }, [counterSec]);

  if (counterSec === 0 && counterMin === 0) {
    counterSec = '더 이상 그룹에 참여할 수 없습니다.';
    counterMin = '완료';
  }

  const handleDelete = (e) => {
    if (article.BOARD_WRITER === window.sessionStorage.getItem('id')) {
      if (window.confirm('그룹을 삭제하시겠습니까?')) {
        alert('그룹이 삭제되었습니다.');
      } else {
        alert('그룹 삭제를 취소했습니다.');
        return false;
      }
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
      </td>
      <td>
        <a
          // href='#'
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
      <td>{counterMin < 10 ? `0${counterMin}` : counterMin} : {counterSec < 10 ? `0${counterSec}` : counterSec}</td>
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