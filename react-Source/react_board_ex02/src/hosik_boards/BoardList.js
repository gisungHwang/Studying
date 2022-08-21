import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import BoardArticle from './BoardArticle';
import PageLink from './PageLink';

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleadd,
  handleupdateform,
  handlepage,
  pagelink
}) => {

  const navigate = useNavigate();

  const location = useLocation();

  const [query, setQuery] = useState(location.search);

  // const query = location.search;

  console.log(query);

  useEffect(() => {
    handlelist();
  }, []);

  // const handleInsert = () => {
  //   axios
  //     .post('http://localhost:8008/insert', {
  //       query: query
  //     })
  //     .then((res) => {
  //       console.log('handleInsert : ', res);
  //       handlelist();
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }

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
              <th width='200'>수정 / 삭제</th>
            </tr>
            <tr>
              <input
                type='button'
                value='로그아웃'
                onClick={handleLogout}
              />
              <input
                type='button'
                value='그룹 생성'
                onClick={handleadd}
              // onClick1={handleInsert}
              />
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
              <th width='200'>수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {boardlist.boardList.map((article) => {
              // state -1 구문
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
                  query={query}
                />
              )
            })}
            <tr>
              <th colSpan='7'>
                <input
                  type='button'
                  value='로그아웃'
                  onClick={handleLogout}
                />
                <Link to='/boardwrite?bbq'>
                  <input
                    type='button'
                    value='그룹 생성'
                  // onClick={handleInsert}
                  />
                </Link>
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