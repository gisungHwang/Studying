// import {Component} from 'react';

// class EvenPractice extends Component {
//     state = {
//         message: ''
//     }
//     handleChange = (e) => {  //생성자를 사용하지 않고 호출하는 방식
//         this.setState({
//             message:e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.message);
//         this.setState({
//         message:''
//     });
// }

//     //--------------------------------------------------------다른방식
//     // constructor(props) {  //생성자의 주된 목적은 객체를 생성함과 동시에 초기화
//     //     super(props);     //부모 클래스에 있는 생성자를 호출
//     //     this.handleChange = this. handleChange.bind(this);
//     //     this.handleClick = this. handleChange.bind(this); 
//     // }

//     // handleChange(e) {
//     //     this.setState({
//     //         message : e.target.value
//     //     });
//     // }
    

//     // handleClick() {
//     //     alert(this.state.message);
//     //     this.setState({
//     //         message:''
//     //     });
//     // }
//------------------------------------------------------------------------------다른방식

//     render () {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input                                    //인풋태그는 닫아주는거 필요
//             type = "text"
//             name = "message"
//             placeholder='아무거나 입력해 볼까'
//             value={this.state.message}
//             onChange={this.handleChange}
//             />
//             <button onClick={this.handleClick}>확인</button>
//         </div>
//     );
// }
// }

// export default EvenPractice;





//---------134p---------------------------------------------id생성
// import {Component} from 'react';

// class EvenPractice extends Component {
//     state = {
//         username:'',
//         id:'',
//         message: ''

//     }
//     handleChange = (e) => {  //생성자를 사용하지 않고 호출하는 방식
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.id  + ',' + this.state.message);
//         this.setState({
//             username:'',  //인풋안의 태그에 있는 이름과 맞춰줘야 위의 타겟네임에서 값을 똑같이 넣을 수 있음
//             id: '',
//             message:''
//     });
// }
//     render () {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input                                    //인풋태그는 닫아주는거 필요
//             type = "text"
//             name = "username"
//             placeholder='사용자명'
//             value={this.state.username}
//             onChange={this.handleChange}
//             />
//             <input                                   
//             type = "text"
//             name= "id"
//             placeholder='아이디 입력'
//             value={this.state.id}
//             onChange={this.handleChange}
//             />
//             <input                                   
//             type = "text"
//             name = "message"
//             placeholder='아무거나 입력해보세요'
//             value={this.state.message}
//             onChange={this.handleChange}
//             />
//             <button onClick={this.handleClick}>확인</button>
//         </div>
//     );
// }
// }

// export default EvenPractice;



//------------------------------------------------------------------
// import {Component} from 'react';

// class EvenPractice extends Component {
//     state = {
//         username:'',
//         message: ''

//     }
//     handleChange = (e) => {  //생성자를 사용하지 않고 호출하는 방식
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.message);
//         this.setState({
//             username:'',  //인풋안의 태그에 있는 이름과 맞춰줘야 위의 타겟네임에서 값을 똑같이 넣을 수 있음
//             message:''
//         });
//     }
//     handlekeyPress = (e) => {  //엔터를 누르면 확인
//         if(e.key ==='Enter') {
//             this.handleClick();
//         }
//     }
//     render () {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input                                    //인풋태그는 닫아주는거 필요
//             type = "text"
//             name = "username"
//             placeholder='사용자명'
//             value={this.state.username}
//             onChange={this.handleChange}
//             />
//             <input                                   
//             type = "text"
//             name = "message"
//             placeholder='아무거나 입력해보세요'
//             value={this.state.message}
//             onChange={this.handleChange}
//             onKeyPress={this.handlekeyPress}
//             />
//             <button onClick={this.handleClick}>확인</button>
//         </div>
//     );
// }
// }

// export default EvenPractice;

//---------------------------------------------------------------138p 함수버전----------------------
// import {useState} from 'react';

// const EvenPractice = () => {
//     const[username, setUsername] = useState('');
//     const[message, setMessage] = useState('');
//     const onChangeUsername = e => setUsername(e.target.value);
//     const onChangeMessage = e => setMessage(e.target.value);
//     const onClick = () => {
//         alert(username + ':' + message);
//         setUsername('');
//         setMessage('');
//     };
//     const onKeyPress = e => {
//         if(e.key ==='Enter') {
//             onClick();
//         }
//     };
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input                                    //인풋태그는 닫아주는거 필요
//             type = "text"
//             name = "username"
//             placeholder='사용자명'
//             value={username}
//             onChange={onChangeUsername}
//             />
//             <input                                   
//             type = "text"
//             name = "message"
//             placeholder='아무거나 입력해보세요'
//             value={message}
//             onChange={onChangeMessage}
//             onKeyPress={onKeyPress}
//             />
//             <button onClick={onClick}>확인</button>
//         </div>
//     );
// };

// export default EvenPractice;

//---------------------------139p----------------------------------------
import {useState} from 'react';

const EvenPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            아이디<input                                    //인풋태그는 닫아주는거 필요
            type = "text"
            name = "username"
            placeholder='사용자명'
            value={username}
            onChange={onChange}
            /><br/>
            <input                                   
            type = "text"
            name = "message"
            placeholder='아무거나 입력해보세요'
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EvenPractice;