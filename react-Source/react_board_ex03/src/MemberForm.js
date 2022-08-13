import React from 'react';
import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
    const idRef = useRef();
    const passwordRef = useRef();
    const passwordcheckRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();


    const navigate = useNavigate();

    const handleMember = () => {
        if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하세요!");
            idRef.current.focus();
            return false;
        }
        if (passwordRef.current.value === "" || passwordRef.current.value === undefined) {
            alert("패스워드를 입력하세요!");
            passwordRef.current.focus();
            return false;
        }
        if (passwordcheckRef.current.value === "" || passwordcheckRef.current.value !== passwordRef.current.value || passwordcheckRef.current.value === undefined) {
            alert("패스워드를 다시 확인해주세요!");
            passwordcheckRef.current.focus();
            return false;
        }
        if (nameRef.current.value === "" || nameRef.current.value === undefined) {
            alert("이름을 확인하세요!");
            nameRef.current.focus();
            return false;
        }
        if (emailRef.current.value === "" || emailRef.current.value === undefined) {
            alert("이메일을 확인하세요!");
            emailRef.current.focus();
            return false;
        }
        if (addressRef.current.value === "" || addressRef.current.value === undefined) {
            alert("주소를 입력하세요!");
            addressRef.current.focus();
            return false;
        }
        if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
            alert("휴대폰 번호를 입력하세요!");
            phoneRef.current.focus();
            return false;
        }

    
axios
    .post("http://localhost:8008/member", {
        id: idRef.current.value,
        password: passwordRef.current.value,
        passwordcheck: passwordcheckRef.current.value,
        name: nameRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
    })

    .then((res) => {
        console.log("handleMember =>", res);
        if(res.data.affectedRows === 1) alert("회원가입 성공!!!");
            else alert("회원가입 실패!!!");
        navigate("/");  //로그인화면으로 이동
    })
    .catch((e) => {
        console.error(e);
    });
};

return (
    <div>
    <p></p>  
    
    <form>
    <table border="1" width="350px" align="center">
        <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="id"
                size="23"
                defaultValue=""
                ref={idRef}
                placeholder="아이디를 입력하세요"
                ></input>
            </td>
            </tr>
        <tr>
            <td width="100px">패스워드</td>
            <td align="left" width="200px">
                <input
                type="password"
                name="password"
                size="23"
                defaultValue=""
                ref={passwordRef}
                placeholder="패스워드를 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">패스워드확인</td>
            <td align="left" width="200px">
                <input
                type="password"
                name="passwordcheck"
                size="23"
                defaultValue=""
                ref={passwordcheckRef}
                placeholder="패스워드를 다시 확인해주세요"
                ></input>
            </td>
            </tr>
            
            <tr>
            <td width="100px">이름</td>
            <td align="left" width="200px">
                <input
                type="text"
                name=""
                size="23"
                defaultValue=""
                ref={nameRef}
                placeholder="이름을 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">이메일</td>
            <td align="left" width="200px">
                <input
                type="email"
                name="email"
                size="23"
                defaultValue=""
                ref={emailRef}
                placeholder="이메일을 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">주소</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="address"
                size="23"
                defaultValue=""
                ref={addressRef}
                placeholder="주소를 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">휴대폰번호</td>
            <td align="left" width="200px">
                <input
                type="tel"
                name="id"
                size="2"
                defaultValue=""
                ref={phoneRef}
                placeholder="휴대폰 번호를 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
                <td colSpan="2" align="center">
                    <input
                    type="button"
                    value="회원등록"
                    onClick={handleMember}
                    ></input>
                </td>
            </tr>
        </table>
        </form>
    </div>
    );
};

export default MemberForm;