import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password:'',
        clicked : false,
        validated:false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated:this.state.password ==='0000'
        });
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input
                ref={(ref) => (this.input=ref)}  //콜백함수를 사용하지 않을 때는 current 필요 x
                size="5"
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' :'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
                </div>
        );
    }
}

export default ValidationSample;