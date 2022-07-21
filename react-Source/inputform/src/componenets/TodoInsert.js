// import {useState, useCallback, useRef} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import {useState,useRef, useCallback} from 'react';



const TodoInsert = ({onInsert}) => { 
    const [value, setValue] = useState('');
    const foucs = useRef(null);
    
    //1단계 폼에 첫 값을 지정
    const [username, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [mail1, setMail] = useState("");
    const [mail2, setMail2] = useState("");
    const [gender, setgender] = useState("");

    const onChange1 = useCallback(
        (e) => {
            setId(e.target.value);
        }, []);

        const onChange2 = useCallback(
        (e) => {
            setPwd(e.target.value);
        }, []);

        const onChange3 = useCallback(
        (e) => {
            setMail(e.target.value);
        }, []);

        const onChange4 = useCallback(
        (e) => {
            setMail2(e.target.value);
        }, []);

        const onChange5 = useCallback(
        (e) => {
            setgender(e.target.value);
        }, []);

        const onSubmit = useCallback(
            e => {
                onInsert(
                    <table align="center" border="1" >
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" value={username} />
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" value={pwd}/>
                </td>
            </tr>
            <tr>
                <td width="110">이메일</td>
            <td width="400">
                <input type="text" name="mail1" size="10" placeholder="이메일" value={mail1} /> @
                <select name="mail2"  placeholder="주소" value={mail2}>
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
                <input type="radio" name="gender" placeholder="남자" value= "남자"/>남자
                <input type="radio" name="gender"placeholder="여자" value= "여자" />여자
            </td>
            </tr>

        </table>
                );
                setId('');
                setPwd('');
                setMail('');
                setMail2('');
                setgender('');
                e.preventDefault();
            },
            [onInsert, username, pwd, mail1, mail2, gender],
        );

    // 3단계 클릭 시 바꿔준 값을 출력
    const onClick = () => {
        alert(`
        아이디 : ${username} 
        비밀번호 : ${pwd} 
        이메일 : ${mail1} - ${mail2} 
        성별 : ${gender} `);
    }; 

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
        <div>
            <center>
        <table align="center" border="1" >
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" onChange={onChange1} value={username} />
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" onChange={onChange2} value={pwd}/>
                </td>
            </tr>
            <tr>
                <td width="110">이메일</td>
            <td width="400">
                <input type="text" name="mail1" size="10" placeholder="아이디" value={mail1}onChange={onChange3} /> @
                <select name="mail2"  placeholder="주소" value={mail2}onChange={onChange4}>
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
                <input type="radio" name="gender" placeholder="남자" value={gender}onChange={onChange5} />남자
                <input type="radio" name="gender"placeholder="여자" value={gender}onChange={onChange5} />여자
            </td>
            </tr>
            <tr>
                <td colSpan="2" align = "center"><button>등록</button></td>
                
            </tr>
        </table>
        </center>
        </div>
        </form>
    )
    }
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