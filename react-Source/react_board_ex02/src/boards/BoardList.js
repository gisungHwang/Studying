import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardArticle from './BoardArticle';
import PageLink from './PageLink';

const BoardList = ({
  boardlist,
  actionmode,
  handlelist,
  handledetail,
  handleupdateform,
  handlepage,
  pagelink
}) => {

  const navigate = useNavigate();

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
    navigate('/'); // 로그아웃을 할 경우 로그인 페이지로 이동
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
              return (
                <BoardArticle
                  actionmode={actionmode}
                  article={article}
                  key={article.BOARD_NUM}
                  handlelist={handlelist}
                  handledetail={handledetail}
                  handleupdateform={handleupdateform}
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