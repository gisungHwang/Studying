import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();

  const handleMember = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력해주세요.");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current.focus();
      return false;
    }
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력해주세요.");
      emailRef.current.focus();
      return false;
    }
    if (
      addressRef.current.value === "" ||
      addressRef.current.value === undefined
    ) {
      alert("주소를 입력해주세요.");
      addressRef.current.focus();
      return false;
    }
    if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
      alert("전화번호를 입력해주세요.");
      phoneRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8008/member", {
        user_id: idRef.current.value,
        user_pw: pwRef.current.value,
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        user_address: addressRef.current.value,
        user_phone: phoneRef.current.value,
      })
      .then((res) => {
        console.log("handleMember : ", res);
        if (res.data.affectedRows === 1) {
          alert("회원 등록에 성공했습니다.");
        } else {
          alert("회원 등록에 실패했습니다.");
        }
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <br />
      <h1 align="center">개인 회원가입</h1>
      <form>
        <table border="1" width="500px" align="center">
          <thead>
            <tr>
              <td width="100px">아이디</td>
              <td align="left" width="200px">
                <input
                  type="text"
                  name="id"
                  size="20"
                  defaultValue=""
                  ref={idRef}
                  placeholder="아이디를 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <td width="100px">비밀번호</td>
              <td align="left" width="200px">
                <input
                  type="password"
                  name="pw"
                  size="20"
                  defaultValue=""
                  ref={pwRef}
                  placeholder="비밀번호를 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <td width="100px">이름</td>
              <td align="left" width="200px">
                <input
                  type="text"
                  name="name"
                  size="20"
                  defaultValue=""
                  ref={nameRef}
                  placeholder="이름을 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <td width="100px">이메일</td>
              <td align="left" width="200px">
                <input
                  type="text"
                  name="email"
                  size="20"
                  defaultValue=""
                  ref={emailRef}
                  placeholder="aischool@example.com"
                />
              </td>
            </tr>
            <tr>
              <td width="100px">주소</td>
              <td align="left" width="200px">
                <input
                  type="text"
                  name="address"
                  size="50"
                  defaultValue=""
                  ref={addressRef}
                  placeholder="주소를 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <td width="100px">전화번호</td>
              <td align="left" width="200px">
                <input
                  type="text"
                  name="phone"
                  size="20"
                  defaultValue=""
                  ref={phoneRef}
                  placeholder="전화번호를 입력해주세요."
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input type="button" value="회원 등록" onClick={handleMember} />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default MemberForm;
