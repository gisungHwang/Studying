import React from 'react';

const MiniBoardUpdateForm = ({ article, setarticle, handleupdate }) => {

  const onChange = (e) => {
    setarticle({
      ...article,
      [e.target.name]: e.target.value
    });
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
              <td width='100px'>주문자</td>
              <td align='left' width='600px'>
                {article.comment_name}
              </td>
            </tr>
            <tr>
              <td width='100px'>주문내역</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='comment_content'
                  defaultValue={article.comment_content}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>가격</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='comment_price'
                  defaultValue={article.comment_price}
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

export default MiniBoardUpdateForm;