/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
}) => {
  const image = "http://localhost:8008/uploads/" + article.menu_pictureUrl;

  const handleDelete = (e) => {
    console.log("handleDelete(board_num) =>", e.target.id);
    axios
      .post("http://localhost:8008/menudelete", {
        menu_name: e.target.id,
      })
      .then(() => {
        handlelist();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log("BoardArticle =>", article);

  return (
    <tr align="center">
      {/* <td>{article.menu_pictureUrl}</td> */}
      <td>
        <img width='100px' src={image} />
        <input
          type='text'
          // value={window.sessionStorage.getItem('id')}
          value={article.menu_storeId}
        />
      </td>
      <td>
        {/* <a href="#" id={article.menu_name} onClick={handledetail}> */}
        {article.menu_name}
        {/* </a> */}
      </td>
      <td>{article.menu_price}</td>
      {/* <td>{article.BOARD_DATE}</td> */}
      <td align="center">
        {/* <input
          type="button"
          value="수정"
          id={article.menu_name}
          onClick={handleupdateform}
        ></input> */}
        <input
          type="button"
          value="삭제"
          id={article.menu_name}
          onClick={handleDelete}
        ></input>
      </td>
    </tr>
  );
};

export default BoardArticle;
