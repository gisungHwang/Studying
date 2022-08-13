import {useRef} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";

const LoginForm = () => {
    const idRef = useRef();
    const pwRef = useRef();

    const navigate = useNavigate(); //바로 이동하기 위한 함수

    const handleLogin = () => { //아이디와 패스워드 검사
        if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하세요!");
            idRef.current.focus();
            return false;
        }
        if (pwRef.current.value === "" || pwRef.current.value === undefined) {
            alert("패스워드를 입력하세요!");
            pwRef.current.focus();
            return false;
        }
    
        console.log( //자동로그인 기능>>localStorage, 해당페이지에서만 로그인 기능>>sessionStorage
            "LoginForm:window.sessionStorage(login_id) => ",
            window.sessionStorage.getItem("id")
        );
        
        axios
        .post("http://localhost:8008/login", {
            id: idRef.current.value,
            pw: pwRef.current.value,    
        })
        .then((res) => {
            alert('로그인 성공')
            console.log("handleLogin =>", res);  
            if(res.data[0].cnt === 1) {
            window.sessionStorage.setItem("id", idRef.current.value); //아이디와 패스워드가 db에 존재하면 수행 
            navigate("/main");
            }
        })
        .catch((e) => {
            console.error(e);
        });
    };

    const handleMemberForm = () => {
        navigate("/member");
    };

    return (
        <div>
    <p></p>  
    <form>
    <table border="1" width="300px" align="center">
        <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
                <input
                type="text"
                name="id"
                size="20"
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
                name="pw"
                size="20"
                defaultValue=""
                ref={pwRef}
                placeholder="패스워드를 입력하세요"
                ></input>
            </td>
            </tr>

            <tr>
                <td colSpan="2" align="center">
                    <input
                    type="button"
                    value="로그인"
                    onClick={handleLogin}
                    ></input>
                    &nbsp;
                    <input
                    type="button"
                    value="회원등록"
                    onClick={handleMemberForm}
                    ></input>
                </td>
            </tr>
        </table>
        </form>
    </div>
    );
};

export default LoginForm;