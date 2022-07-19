import {useState,useRef} from 'react';

const Forminput = () => {  
    const inputEl = useRef();
    const inputEl2 = useRef();
    const inputEl3 = useRef();
    const inputEl4 = useRef();
    const inputEl5 = useRef();
    const inputEl6 = useRef();
    const inputEl7 = useRef();
    const inputEl8 = useRef();
    //1단계 폼에 첫 값을 지정
    const [form, setForm] = useState({
        username: '',
        pwd: '',
        jumin1 : '',
        jumin2 : '',
        tel1:'',
        tel2:'', 
        tel3:'',
    });

    const {username, pwd, jumin1, jumin2, tel1, tel2, tel3} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    // 3단계 클릭 시 바꿔준 값을 출력
    const onClick = () => {
        alert(`
        아이디 : ${username} 
        비밀번호 : ${pwd} 
        주민등록번호 : ${jumin1} - ${jumin2} 
        전화번호 : ${tel1} - ${tel2} - ${tel3}`);
        setForm({
            username: '',
            pwd: '',
            jumin1 : '',
            jumin2 : '',
            tel1:'',
            tel2:'', 
            tel3:'',
        });
    }; 
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            if(e.target.name === 'username'){
                inputEl2.current.focus();
            } else if(e.target.name === 'pwd'){
                inputEl3.current.name.focus();
            } else if(e.target.name === 'jumin1'){
                inputEl4.current.name.focus();
            } else if(e.target.name === 'jumin2'){
                inputEl5.current.name.focus();
            } else if(e.target.name === 'tel1'){
                inputEl6.current.name.focus();
            } else if(e.target.name === 'tel2'){
                inputEl7.current.name.focus();
            } else if(e.target.name === 'tel3'){
                inputEl8.current.name.focus();
            }
        };
    }
    
    return (
        <div>
            <center>
        <h1> 회원가입</h1>
        <table align="center" border="1">
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" onChange={onChange} value={username}  onkeyPress={onKeyPress} ref={inputEl}/>
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" onChange={onChange} value={pwd} onkeyPress={onKeyPress} ref={inputEl2}/>
                </td>
            </tr>
            <tr>
                <td width="110">주민등록번호</td>
                <td width="400" >
                    <input type="text" name="jumin1" id="jumin1" size="6" maxlength="6" onChange={onChange} value={jumin1} onkeyPress={onKeyPress} ref={inputEl3}/> -
                    <input type="text" name="jumin2" id="jumin2" size="7" maxlength="7" onChange={onChange} value={jumin2} onkeyPress={onKeyPress} ref={inputEl4}/>
                </td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td><input type="tel" name="tel1" id="tel1" size="3" maxlength="3" value={tel1} onChange={onChange} onkeyPress={onKeyPress} ref={inputEl5}/> -
                    <input type="tel" name="tel2" id="tel2" size="4" maxlength="4" value={tel2} onChange={onChange} onkeyPress={onKeyPress} ref={inputEl6}/> -
                    <input type="tel" name="tel3" id="tel3" size="4" maxlength="4" value={tel3} onChange={onChange} onkeyPress={onKeyPress} ref={inputEl7}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align = "center"><button onClick={onClick} onkeyPress={onKeyPress} ref={inputEl8}>확인</button></td>
                
            </tr>
        </table>
        </center>
        </div>
    )
};
export default Forminput;