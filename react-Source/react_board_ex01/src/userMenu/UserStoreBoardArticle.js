/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useRef, useState } from "react";
import "./UserStoreBoardArticle.css";
const UserStoreBoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform,
  number,
  setactionmodemini,
  actionmodemini,
}) => {
  const storeIdRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const numberRef = useRef();
  const userIdRef = useRef();

  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log(
        "왜 뽑읍?",
        storeIdRef.current.value,
        nameRef.current.value,
        priceRef.current.value,
        numberRef.current.value,
        userIdRef.current.value
      );
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const image = "http://localhost:8008/uploads/" + article.menu_pictureUrl;

  console.log("BoardArticle =>", article);

  console.log("BoardArticle ~~~~~~~~~~~~ =>", article.menu_storeId);

  const handleInsert = () => {
    axios
      .post("http://localhost:8008/pay", {
        order_menuName: nameRef.current.value,
        order_boardNum: numberRef.current.value,
        order_userId: userIdRef.current.value,
        order_price: priceRef.current.value,
      })
      .then((res) => {
        alert(
          `메뉴가 추가되었습니다.
장바구니를 확인해주세요.
          `
        );
        setactionmodemini({
          ...actionmodemini,
          mode: 1,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <tr align="center">
      {/* <td>{article.menu_pictureUrl}</td> */}
      <td>
        <img src={image} className="order_img" />
        <input
          hidden
          type="checkbox"
          value={article.menu_storeId}
          name={article.menu_name}
          ref={storeIdRef}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
        <input
          hidden
          type="checkbox"
          value={number}
          name={article.menu_name}
          ref={numberRef}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
      </td>
      <td>
        {article.menu_name}
        <input
          hidden
          value={article.menu_name}
          type="checkbox"
          name={article.menu_name}
          // hidden
          ref={nameRef}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
        <input
          hidden
          value={window.sessionStorage.getItem("id")}
          type="checkbox"
          name={article.menu_name}
          // hidden
          ref={userIdRef}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
      </td>
      <td>
        {article.menu_price}
        <input
          hidden
          value={article.menu_price}
          type="checkbox"
          name={article.menu_name}
          // hidden
          ref={priceRef}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
      </td>
      <td align="center">
        <input
          hidden
          type="checkbox"
          // name={article.menu_name}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, UserStoreBoardArticle);
          }}
          checked={checkedInputs.includes(UserStoreBoardArticle) ? true : false}
        />
        <input
          className="article_btn"
          type="button"
          value="주문추가"
          onClick={handleInsert}
        />
      </td>
    </tr>
  );
};

export default UserStoreBoardArticle;
