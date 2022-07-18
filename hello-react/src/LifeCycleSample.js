import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number :0,
        color:null,
    }
    myRef = null;
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !==4;     //마지막 숫자 자리가 4가 아니면 리렌더링하지 않는다. 
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');  //컴포넌트를 돔에서 제거할 때 호출
    }
    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {   //render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }
    conponentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        } 
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
        };
        return(
            <div>
                {this.state.missing.value} 에러발견하기
                <h1 style={style} ref={ref => this.myRef=ref}>
                {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
} 

export default LifeCycleSample;