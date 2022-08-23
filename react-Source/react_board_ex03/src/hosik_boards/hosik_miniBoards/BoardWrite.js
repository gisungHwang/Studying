import React, { useRef } from 'react';
import axios from 'axios';
import './BoardWrite.scss'
import { Link } from 'react-router-dom';

const BoardWrite = ({ handlelist, number }) => {
  const nameRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();
  const numRef = useRef();

  const handleInsert = () => {
    console.log('handleInsert : ', nameRef.current.value);
    console.log('handleInsert : ', contentRef.current.value);
    console.log('handleInsert : ', priceRef.current.value);

    // if (nameRef.current.value === window.sessionStorage.getItem('id')) {
    //   alert('주문 내역은 하나만 작성이 가능합니다.');
    //   return false;
    // }

    if (contentRef.current.value === '' || contentRef.current.value === undefined) {
      alert('주문내역을 입력해주세요.');
      contentRef.current.focus();
      return false;
    }

    if (priceRef.current.value === '' || priceRef.current.value === undefined) {
      alert('음식의 가격을 입력해주세요.');
      priceRef.current.focus();
      return false;
    } else {
      const str = priceRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (!(ch >= "0" && ch <= "9") || ((ch >= "a" && ch <= "z")
          || (ch >= "A" && ch <= "Z"))) {
          alert('음식의 가격은 숫자로만 입력해주세요.');
          priceRef.current.focus();
          return false;
        }
      }
    }

    axios
      .post('http://localhost:8008/miniinsert', {
        comment_name: nameRef.current.value,
        comment_content: contentRef.current.value,
        comment_price: priceRef.current.value,
        comment_boardNum: numRef.current.value
      })
      .then((res) => {
        console.log('handleInsert : ', res);
        handlelist();
        nameRef.current.value = '';
        contentRef.current.value = '';
        priceRef.current.value = '';
        numRef.current.value = 0;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className='write'>
      <h2>주문 내역</h2>
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            {/* <tr>
              <td width='100px'>유저네임</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='title'
                  size='68'
                  ref={titleRef}
                  placeholder='제목을 입력하세요.'
                />
              </td>
            </tr> */}
            <tr>
              <td width='100px' height='30px'>주문자</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='writer'
                  size='68'
                  ref={nameRef}
                  placeholder='작성자를 입력하세요.'
                />
                {/* <b>
                  <input
                    type='text'
                    name='number'
                    size='68'
                    ref={nameRef}
                    value={window.sessionStorage.getItem('id')}
                  />
                </b> */}
                {/* <div ref={nameRef}>
                  <b>{window.sessionStorage.getItem('id')}</b>
                </div> */}
                <input
                  type='hidden'
                  name='number'
                  size='68'
                  ref={numRef}
                  value={number}
                />
                {/* <div ref={comment_nameRef}>
                  &nbsp;&nbsp;&nbsp;<b>{window.sessionStorage.getItem('id')}</b>
                </div> */}
              </td>
            </tr>
            <tr>
              <td>주문내역</td>
              <td align='left'>
                {/* <textarea
                  rows='5'
                  cols='70'
                  name='content'
                  ref={contentRef}
                  placeholder='내용을 입력하세요.'
                /> */}
                <input
                  type='text'
                  name='title'
                  size='68'
                  ref={contentRef}
                  placeholder='주문내역을 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>가격</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='location'
                  size='68'
                  ref={priceRef}
                  placeholder='주문하신 음식의 가격을 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='글쓰기'
                  onClick={handleInsert}
                />
                &nbsp;
                <input type='reset' value='초기화' />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;