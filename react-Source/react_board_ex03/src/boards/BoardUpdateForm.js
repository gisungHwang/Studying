import React from 'react';

const BoardUpdateForm = ({ article, setarticle, handleupdate }) => {

  const onChange = (e) => {
    if (article.board_writer === window.sessionStorage.getItem('id')) {
      setarticle({
        ...article,
        [e.target.name]: e.target.value
      });
    } else {
      alert('작성자만 해당 글을 수정할 수 있습니다.');
      return false;
    }
  }

  // const onChange = (e) => {
  //   setarticle({
  //     ...article,
  //     [e.target.name]: e.target.value
  //   });
  // }

  console.log('BoardUpdateForm : ', article);

  return (
    <div>
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            <tr>
              <td width='100px'>제목</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='board_title'
                  defaultValue={article.board_title}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>작성자</td>
              <td align='left' width='600px'>
                {article.board_writer}
              </td>
            </tr>
            <tr>
              <td width='100px'>글내용</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='board_content'
                  defaultValue={article.board_content}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='글수정'
                  onClick={handleupdate}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;