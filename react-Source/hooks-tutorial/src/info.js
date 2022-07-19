import {useInputs} from 'react';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value  //action은 input 안의 값을 받아와서 호출
//     };
// }
const Info = () => {
    const [state, onChange] = useInputs( {
        name:'',
        nickname:''
    });

    const {name, nickname} = state;  //input안의 value값 때문에 선언

    // const onChange = e => {
    //     dispatch(e.target);  //reducer함수 여기서 호출
    // }
    
        return(
            <div>
                <div>
                    <input name='name' value={name} onChange={onChange} />
                    <input name='nickname' value={nickname} onChange={onChange} />
                </div>
            <div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
            </div>
            </div>
        );
        };

//-------------------- 하나로 만들기----------------
    // const [data, setData] = useState({
    //     name: "",
    //     nickname: ""
    // });
//--------------------------------------------

//     return (
//         <div>
//         <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickname} />
//         </div>
//         <div>
//             <div>
//                 <b>이름</b> {name}
//             </div>
//             <div>
//                 <b>닉네임:</b> {nickname}
//             </div>
//         </div>
//         </div>
//     );
// };

export default Info;