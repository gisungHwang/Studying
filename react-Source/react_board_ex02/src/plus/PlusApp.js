import "./PlusApp.css";
import { CKEditor } from "@ckeditor/ckeditor5-build-classic";
import { ClassicEditor } from "../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { useState } from "react";

const PlusApp = () => {
  const [menuContent, setMenuContent] = useState({
    title: "",
    content: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setMenuContent({
      ...menuContent,
      [name]: value,
    });
    console.log(menuContent);
  };

  const onChange = (event, textArea) => {
    const data = textArea.getData();
    console.log({ event, textArea, data });
    setMenuContent({
      ...menuContent,
      content: data,
    });
    console.log(menuContent);
  };

  return (
    <div className="PlusApp">
      <h1>메뉴</h1>
      <div className="menuContainer">
        <h2>제목</h2>
        <div> 내용</div>
      </div>
      <div className="formWrapper">
        <input
          className="titleInput"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from Ckeditor 5!</p>"
        ></CKEditor>
      </div>
      <button className="submitButton">입력</button>
    </div>
  );
};

export default PlusApp;
