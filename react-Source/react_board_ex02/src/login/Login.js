import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="form">
      <span className="logo">LOGIN</span>
      <span className="han">로그인</span>
      <input className="ID" placeholder="ID" />
      <input id="password" type="password" placeholder="PassWord" />
      <Link to="/Signup" id="signup">
        회원가입
      </Link>
      <a href="#" id="find">
        아이디/비밀번호 찾기
      </a>

      <Link to="category" className="Link">
        <button id="hakin">확인</button>
      </Link>
    </div>
  );
}

export default Login;
