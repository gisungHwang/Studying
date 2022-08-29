import React, { useRef } from 'react';
import axios from 'axios';
import './BoardWrite.scss'
import { useNavigate } from '../../../../node_modules/react-router-dom/index';
import { Link, useLocation } from 'react-router-dom';

const BoardWrite = ({
  handlelist,
  articleId,
  setactionmodemain,
  actionmodemain
}) => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const locationRef = useRef();
  const storeIdRef = useRef();
  const timeRef = useRef();

  const navigate = useNavigate();

  const location = useLocation();

  const Article = location.state.articles

  console.log('aaaaaaaaaaaaaaaaaaaaaa', Article)

  const handleInsert = () => {
    // console.log('handleInsert : ', titleRef.current.value);

    if (titleRef.current.value === '' || titleRef.current.value === undefined) {
      alert('게시글의 제목을 입력해주세요.');
      titleRef.current.focus();
      return false;
    }

    // if (writerRef.current.value === '' || writerRef.current.value === undefined) {
    //   alert('게시글의 작성자을 입력해주세요.');
    //   writerRef.current.focus();
    //   return false;
    // }

    if (contentRef.current.value === '' || contentRef.current.value === undefined) {
      alert('게시글의 내용을 입력해주세요.');
      contentRef.current.focus();
      return false;
    }

    if (locationRef.current.value === '' || locationRef.current.value === undefined) {
      alert('게시글의 픽업 장소를 입력해주세요.');
      locationRef.current.focus();
      return false;
    }

    if (timeRef.current.value === '' || timeRef.current.value === undefined) {
      alert('그룹 모집시간을 지정해주세요.');
      timeRef.current.focus();
      return false;
    } else {
      const str = timeRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (!(ch >= "0" && ch <= "9") || ((ch >= "a" && ch <= "z")
          || (ch >= "A" && ch <= "Z"))) {
          alert('그룹 모집시간은 숫자로만 입력해주세요. (분 단위)');
          timeRef.current.focus();
          return false;
        }
      }
    }

    axios
      .post('http://localhost:8008/insert', {
        title: titleRef.current.value,
        writer: window.sessionStorage.getItem('id'),
        content: contentRef.current.value,
        location: locationRef.current.value,
        storeId: storeIdRef.current.value,
        time: timeRef.current.value
      })
      .then((res) => {
        console.log('handleInsert : ', res);
        handlelist();
        titleRef.current.value = '';
        writerRef.current.value = '';
        contentRef.current.value = '';
        locationRef.current.value = '';
        timeRef.current.value = '';

        setactionmodemain({
          ...actionmodemain,
          mode: 0, // 글 수정하기
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const onClick = () => {
    setactionmodemain({
      ...actionmodemain,
      mode: 0, // 글 수정하기
    });
  }

  return (
    <div className='write'>
      {/* <h1>호식이 두 마리 치킨 그룹방</h1> */}
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            <tr>
              <td width='100px'>제목</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='title'
                  size='68'
                  ref={titleRef}
                  placeholder='제목을 입력하세요.'
                />
                <input
                  type='text'
                  name='storeId'
                  size='68'
                  ref={storeIdRef}
                  value={articleId}
                />
              </td>
            </tr>
            <tr>
              <td width='100px' height='30px'>작성자</td>
              <td align='left' width='550px'>
                {/* <input
                  type='text'
                  name='writer'
                  size='68'
                  ref={writerRef}
                  placeholder='작성자를 입력하세요.'
                /> */}
                <div ref={writerRef}>
                  <b>{window.sessionStorage.getItem('id')}</b>
                </div>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td align='left'>
                <textarea
                  rows='5'
                  cols='70'
                  name='content'
                  ref={contentRef}
                  placeholder='내용을 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>픽업 장소</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='location'
                  size='68'
                  ref={locationRef}
                  placeholder='픽업 장소를 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>그룹 모집시간</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='location'
                  size='68'
                  ref={timeRef}
                  placeholder='그룹 모집시간을 입력하세요.'
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
                &nbsp;
                <input
                  type='button'
                  value='그룹 목록으로'
                  onClick={onClick}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;