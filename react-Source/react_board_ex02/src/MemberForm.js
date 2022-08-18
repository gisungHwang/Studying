import axios from "axios";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
// import Checkbox from 'antd';

const MemberForm = () => {
    const idRef = useRef();
    const passwordRef = useRef();
    const passwordcheckRef = useRef();
    const nameRef = useRef();
    const email1Ref = useRef();
    const email2Ref = useRef();
    const addressRef = useRef();
    const phone1Ref = useRef();
    const phone2Ref = useRef();
    const phone3Ref = useRef();


    const navigate = useNavigate();

    const handleMember = () => {
        if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하세요!");
            idRef.current.focus();
            return false;
        }
        if (passwordRef.current.value === "") {
                alert("비밀번호를 입력하세요.");
                passwordRef.focus();
                return false;
            }
            else if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 10) {
                alert("비밀번호 확인 ( 6~10자리)");
                passwordRef.focus();
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
        if (email1Ref.current.value === "" || email1Ref.current.value === undefined ) {
            alert("이메일을 확인하세요!");
            email1Ref.current.focus();
            return false;
        }
        if (addressRef.current.value === "" || addressRef.current.value === undefined) {
            alert("주소를 입력하세요!");
            addressRef.current.focus();
            return false;
        }
        if (phone1Ref.current.value === "" || phone1Ref.current.value === undefined || phone2Ref.current.value === "" || phone2Ref.current.value === undefined || phone3Ref.current.value === "" || phone3Ref.current.value === undefined) {
            alert("휴대폰 번호를 입력하세요!");
            phone1Ref.current.focus();
            return false;
        }
        // if(!term.current.value){
        //     return setTermError(true);
        // }

    
axios
    .post("http://localhost:8008/member", {
        user_id: idRef.current.value,
        password: passwordRef.current.value,
        passwordcheck: passwordcheckRef.current.value,
        name: nameRef.current.value,
        email1: email1Ref.current.value,
        email2: email2Ref.current.value,
        address: addressRef.current.value,
        phone1: phone1Ref.current.value,
        phone2: phone2Ref.current.value,
        phone3: phone3Ref.current.value,
    })

    .then((res) => {
        if(res.data.affectedRows === 1) alert("회원가입 성공!!!");
            else alert("회원가입 실패!!!");
        navigate("/");  //로그인화면으로 이동
    })
    .catch((e) => {
        console.error(e);
    });
};
// const onChangeTerm = (e) => {
//         //체크박스 초기화
//         setTermError(false);
//         setTerm(e.target.checked);
//     };

return (
    <div>
    <p></p>  
    
    <form>
    <table border="1" width="360px" align="center">
        <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="id"
                size="30"
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
                size="30"
                defaultValue=""
                ref={passwordRef}
                placeholder="6~10자리의 비밀번호를 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">패스워드확인</td>
            <td align="left" width="200px">
                <input
                type="password"
                name="passwordcheck"
                size="30"
                defaultValue=""
                ref={passwordcheckRef}
                placeholder="패스워드를 확인해주세요"
                ></input>
            </td>
            </tr>
            
            <tr>
            <td width="100px">이름</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="name"
                size="30"
                defaultValue=""
                ref={nameRef}
                placeholder="ex)홍길동"
                ></input>
            </td>
            </tr>

            <tr>
            <td width="100px">이메일</td>
            <td align="left" width="200px">
                <input
                type="email"
                name="email1"
                size="10"
                defaultValue=""
                ref={email1Ref}
                placeholder="이메일을 입력"
                ></input>&nbsp;@&nbsp;

                {/* <input 
                type="email"
                name="email2"
                size="15"
                defaultValue=""
                ref={email2Ref}
                placeholder="이메일주소 선택">
                    </input> */}

                <select
                type="email"
                name="email2"
                defaultValue=""
                ref={email2Ref}
                >
                <option value="" />메일주소선택
                        <option value="hanmail.net">hanmail.net</option>
                        <option value="naver.com">naver.com</option>
                        <option value="nate.com">nate.com</option>
                </select>
    
                        
            </td>
            </tr>
            <tr>
            <td width="100px">주소</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="address"
                size="30"
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
                name="phone1" 
                id = "tel_1" 
                size="3" 
                maxLength="3" 
                defaultValue="" 
                ref={phone1Ref} 
                />-
            <input 
            type="tel" 
            name="phone2" 
            id = "tel_2" 
            size="4" 
            maxLength="4" 
            defaultValue="" 
            ref={phone2Ref} 
            />-
            <input 
            type="tel" 
            name="phone3" 
            id = "tel_3" 
            size="4" 
            maxLength="4" 
            defaultValue=""
            ref={phone3Ref} 
                />
{/* 
                <input
                type="tel"
                name="phone"
                size="30"
                defaultValue=""
                ref={phoneRef}
                placeholder="휴대폰 번호를 입력하세요"
                ></input> */}
            </td>
            </tr>
            {/* <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의 합니까?</Checkbox>
                {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
            </div> */}
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