import {Component} from 'react';

class Classinput extends Component {

    state = {
        username: '',
        pwd: '',
        jumin1 : '',
        jumin2 : '',
        tel1:'',
        tel2:'', 
        tel3:'',
    };
    
    handleChange = (e) => {
        setTimeout(() => console.log(e), 500);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if(e.target.name == "username") {
                this.pwd.foucs();
            } else if (e.target.name == "pwd") {
                this.jumin1.foucs();
            } else if (e.target.name == "jumin1") {
                this.jumin2.focus();
            }else if (e.target.name == "jumin2") {
                this.tel1.focus();
            }else if (e.target.name == "tel1") {
                this.tel2.focus();
            }else if (e.target.name == "tel2") {
                this.tel3.focus();
            }else if (e.target.name == "tel3") {
                this.btn.focus();
            }
        }
    };
    handleClick = () => {
        alert(`
        아이디 : ${this.state.username} 
        비밀번호 : ${this.state.pwd} 
        주민등록번호 : ${this.state.jumin1} - ${this.state.jumin2} 
        전화번호 : ${this.state.tel1} - ${this.state.tel2} - ${this.state.tel3}`);
        
        this.setState({
        username: '',
        pwd: '',
        jumin1 : '',
        jumin2 : '',
        tel1:'',
        tel2:'', 
        tel3:'',
        });
    }
    render() {
        return (
        // < div
        //     style={style}
        //     ref={(ref) => {this.onClick=ref}}> 
            <div>
            <center>
        <h1> 회원가입</h1>
        <table align="center" border="1">
            <tbody>
            <tr>
                <td width="110">아이디</td>
                <td width="400">
                    <input type="text" name="username" size="30" required placeholder="아이디 입력" onChange={this.handleChange} value={this.state.username}   onClick={this.handleKeyPress}/>
                </td>
            </tr>
            <tr>
                <td width="110">비밀번호</td>
                <td width="400">
                    <input type="password" name="pwd" size="30" placeholder="최소6~최대10, 숫자와 알파벳만 사용" onChange={this.handleChange} value={this.state.pwd}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/>
                </td>
            </tr>
            <tr>
                <td width="110">주민등록번호</td>
                <td width="400" >
                    <input type="text" name="jumin1" id="jumin1" size="6" maxlength="6" onChange={this.handleChange} value={this.state.jumin1}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/> -
                    <input type="text" name="jumin2" id="jumin2" size="7" maxlength="7" onChange={this.handleChange} value={this.state.jumin2}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/>
                </td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td><input type="tel" name="tel1" id="tel1" size="3" maxlength="3" value={this.state.tel1} onChange={this.handleChange}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/> -
                    <input type="tel" name="tel2" id="tel2" size="4" maxlength="4" value={this.state.tel2} onChange={this.handleChange}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/> -
                    <input type="tel" name="tel3" id="tel3" size="4" maxlength="4" value={this.state.tel3} onChange={this.handleChange}  onClick={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align = "center"><button onClick={this.handleKeyPress} id = "btn" >확인</button></td>
                
            </tr>
            </tbody>
        </table>
        </center>
        </div>
        );
    }
}

export default Classinput;