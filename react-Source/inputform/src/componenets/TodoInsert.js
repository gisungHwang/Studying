// import {useState, useCallback, useRef} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import {useState,useRef} from 'react';


const TodoInsert = ({onInsert}) => { 
    const [value, setvalue] = useState('');
    const foucs = useRef(null);
    
    //1단계 폼에 첫 값을 지정
    const [form, setForm] = useState({
        username: '',
        pwd: '',
        mail1 : '',
        mail2 : '',
        man:'',
        woman:'', 
    });

    const {username, pwd, mail1, mail2, man, woman} = form;
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
        이메일 : ${mail1} - ${mail2} 
        성별 : ${man}  ${woman} `);
        setForm({
            username: '',
            pwd: '',
            mail1 : '',
            mail2 : '',
            man:'',
            woman:'', 
        });
    }; 
    return (
        <div>
            <center>
        <table align="center" border="1" >
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" onChange={onChange} value={username} />
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" onChange={onChange} value={pwd}/>
                </td>
            </tr>
            <tr>
                <td width="110">이메일</td>
            <td width="400">
                <input type="text" name="mail1" size="10" placeholder="아이디" value={mail1}onChange={onChange} /> @
                <select name="mail2"  placeholder="주소" value={mail2}onChange={onChange}>
                    <option value="">메일주소선택</option>
                    <option value="hanmail.net" >hanmail.net</option>
                    <option value="naver.com" >naver.com</option>
                    <option value="nate.com" >nate.com</option>
                </select>
            </td>
            </tr>
            <tr>
                <td width="110">성별</td>
            <td width="400">
                <input type="radio" name="gender" placeholder="남자" value={man}onChange={onChange} />남자
                <input type="radio" name="gender"placeholder="여자" value={woman}onChange={onChange} />여자
            </td>
            </tr>
            <tr>
                <td colSpan="2" align = "center"><button onClick={onClick}>등록</button></td>
                
            </tr>
        </table>
        </center>
        </div>
    )
};
export default TodoInsert;

// const TodoInsert = ({onInsert}) => {
//     const [value, setvalue] = useState('');
    
//     const onChange = useCallback(e => {
//         setvalue(e.target.value);
//     }, []);

//     const onSubmit = useCallback(
//         (e) => {
//             onInsert (value);
//             setvalue('');
//             e.preventDefault();
//         },
//         [onInsert, value],
//     );
    
//     return (
//         <form className= "TodoInsert" onSubmit={onSubmit}>
//             <table border="1">
//                 <tr>
//                     <td>아이디</td>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>비밀번호</td>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>이메일</td>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>성별</td>
//                     <td></td>
//                 </tr>
//                 </table>
//             {/* <table border="1"/>
//             <tr>
//                 <td>아이디</td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>비밀번호</td>
//                 <td></td>
//             </tr> */}

        
//         </form>
//     );
// };

// export default TodoInsert;