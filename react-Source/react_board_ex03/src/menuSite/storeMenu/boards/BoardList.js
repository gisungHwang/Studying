import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../../../../node_modules/axios/index';
import BoardArticle from './BoardArticle';
import PageLink from './PageLink';

const BoardList = ({
  boardlist,
  handlelist,
  handledetail,
  handleadd,
  handleupdateform,
  handlepage,
  pagelink,
  articleId,
  handleupdate,
  url
}) => {

  const navigate = useNavigate();

  const onClick = () => {
    if (url === 'chicken') {
      navigate('/main/chicken');
    } else if (url === 'burger') {
      navigate('/main/burger');
    } else if (url === 'korean') {
      navigate('/main/korean');
    } else if (url === 'sandwitch') {
      navigate('/main/sandwitch');
    } else if (url === 'chinese') {
      navigate('/main/chinese');
    } else if (url === 'japanese') {
      navigate('/main/japanese');
    } else if (url === 'dessert') {
      navigate('/main/dessert');
    } else if (url === 'cafe') {
      navigate('/main/cafe');
    } else if (url === 'porkfood') {
      navigate('/main/porkfood');
    }
  }

  console.log('링딩동', url)

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log('handleLogout');
    window.sessionStorage.clear();
    // 세션에 저장된 로그인 정보를 지우며 로그아웃
    console.log(
      'handleLogout - window.sessionStorage(login_id) : ',
      window.sessionStorage.getItem('id')
    );
    navigate('/login'); // 로그아웃을 할 경우 로그인 페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <table width='700px' border='1' align='center'>
          <thead>
            <tr>
              <th width='60'>번호</th>
              <th width='240'>제목</th>
              <th width='100'>작성자</th>
              <th width='100'>픽업 장소</th>
              <th width='100'>작성일</th>
              <th width='180'>그룹 모집시간</th>
              <th width='200'>수정 / 삭제</th>
            </tr>
            <tr>
              <td colSpan='7' align='center'>
                {/* <input
                  type='button'
                  value='로그아웃'
                  onClick={handleLogout}
                /> */}
                <input
                  type='button'
                  value='그룹 생성'
                  // onClick={handleadd}
                  onClick={handleadd}
                />
                <input
                  type='button'
                  value='가게 메뉴로'
                  onClick={onClick}
                />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table width='700px' border='1' align='center'>
          <thead>
            <tr>
              <th width='60'>번호</th>
              <th width='240'>제목</th>
              <th width='100'>작성자</th>
              <th width='100'>픽업 장소</th>
              <th width='100'>작성일</th>
              <th width='180'>그룹 모집시간</th>
              <th width='200'>수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              // state -1 구문
              return (
                <BoardArticle
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                  handleupdate={handleupdate}
                />
              )
            })}
            <tr>
              <th colSpan='7'>
                {/* <input
                  type='button'
                  value='로그아웃'
                  onClick={handleLogout}
                /> */}
                <input
                  type='button'
                  value='그룹 생성'
                  // onClick={handleadd}
                  onClick={handleadd}
                />
                <input
                  type='button'
                  value='가게 메뉴로'
                  onClick={onClick}
                />
              </th>
            </tr>
          </tbody>
        </table>
        <table align='center'>
          <tfoot>
            <br />
            <tr>
              <td align='center'>
                {pagelink.map((page) => {
                  return (
                    <PageLink
                      page={page}
                      key={page}
                      handlepage={handlepage}
                    />
                  )
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default BoardList;