import { useReducer } from "react";
const Forminput = () => {
function reducer(state, action) {
    return {
    ...state,
    [action.name] : action.value
};
}
    const [state, dispatch] = useReducer(reducer, {
        username: '',
        pwd: '',
        jumin1 : '',
        jumin2 : '',
        tel1:'',
        tel2:'', 
        tel3:'',
    });

const {username, pwd, jumin1, jumin2, tel1, tel2, tel3} = state;

    const onChange = e => {
        dispatch(e.target);
    };
    // 3단계 클릭 시 바꿔준 값을 출력
    const onClick = () => {
        alert(`
        아이디 : ${username} 
        비밀번호 : ${pwd} 
        주민등록번호 : ${jumin1} - ${jumin2} 
        전화번호 : ${tel1} - ${tel2} - ${tel3}`);
    }
    return (
        <div>
            <center>
        <h1> 회원가입</h1>
        <table align="center" border="1">
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" onChange={onChange} value={username} />
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" onChange={onChange} value={pwd} />
                </td>
            </tr>
            <tr>
                <td width="110">주민등록번호</td>
                <td width="400" >
                    <input type="text" name="jumin1" id="jumin1" size="6" maxlength="6" onChange={onChange} value={jumin1} /> -
                    <input type="text" name="jumin2" id="jumin2" size="7" maxlength="7" onChange={onChange} value={jumin2} />
                </td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td><input type="tel" name="tel1" id="tel1" size="3" maxlength="3" value={tel1} onChange={onChange}/> -
                    <input type="tel" name="tel2" id="tel2" size="4" maxlength="4" value={tel2} onChange={onChange}/> -
                    <input type="tel" name="tel3" id="tel3" size="4" maxlength="4" value={tel3} onChange={onChange}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align = "center"><button onClick={onClick} >확인</button></td>
                
            </tr>
        </table>
        </center>
        </div>
    )
};
export default Forminput;