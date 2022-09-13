import React from "react";
import "./Test1.scss";
import { Link } from "react-router-dom";

//09.06
const Test1 = () => {
  return (
    <div>
      <div className="legeno">
        <h1 align="center">리액트로 복습하기</h1>
      </div>

      <fieldset className="go">
        <legend>Python</legend>
        {/* <Link to ="/test2">08.03</Link><br/>
                <Link to = "/test3">08.04</Link><br/> */}
        <Link to="/">HOME</Link>
        <br />
        <Link to="/Project/gisung">뒤로가기</Link>
        <br />
        <br />
        {/* <Link to = "articles">게시글 목록</Link> */}
        <h1>
          <code> Python</code>
        </h1>
        <li>데이터를 다루기 편리한 구조 </li>
        <li>다양한 데이터를 다룰 수 있다</li>
        <li>인터프리터 (문장단위로 번역하고 실행)</li>
        <li>컴파일러 (전체 다 번역하고 실행)</li>
        <li>파이썬은 인터프리터 언어</li>
        <li>객체지향 언어</li>
        <li>풍부한 라이브러리를 제공</li>

        <h3>순차 자료형</h3>
        <li>
          index를 이용하여 저장된 데이터에 접근, 순서 개념이 존재하는 자료형
        </li>
        <h3>비순차 자료형</h3>
        <li>index를 이용한 접근은 불가, 순서 개념이 존재하지 않는 자료형 </li>
      </fieldset>
    </div>
  );
};

export default Test1;
