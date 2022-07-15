import { render } from '@testing-library/react';
import {Component} from 'react';

class Counter extends Component {
    constructor(props) {    //5~9까지는 생성자 메소드(어떤객채를 초기화 시킬 목적)
        super(props);
        this.state = {
            number : 0,
            FixedNumber : 0
        };
    }

render() {  //랜더링은 상태가 변경되면  발동
const {number, FixedNumber} = this.state;
    return (
        <div>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값 : {FixedNumber}</h2>
            <button
            //이벤트 함수를 사용할 때는 화살표 함수
            onClick={() => {
                this.setState({ number : number + 1});
            }}
            >
                +1
            </button>
        </div>
    );
}
}

export default Counter;